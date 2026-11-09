import React, { useState, useMemo, useCallback, useRef, useEffect, memo } from 'react';
import { 
  Activity, 
  CheckCircle2, 
  XCircle, 
  Terminal, 
  Download, 
  Cpu, 
  ChevronRight, 
  ChevronDown, 
  SlidersHorizontal, 
  ZoomIn, 
  ZoomOut, 
  Maximize2, 
  Minimize2, 
  Columns, 
  ArrowUpRight, 
  Table, 
  Play, 
  FileText, 
  BookOpen, 
  Radio, 
  X, 
  Check, 
  AlertTriangle,
  AlertCircle 
} from 'lucide-react';
import { SimulationResult, SignalConfig, Problem, WaveformSample, TestVectorAssertion } from '../../types';
import { downloadWaveformAsPng, downloadCircuitAsSvg, generateAsciiTimingTable, generateVcdText } from '../../utils/exportUtils';
import { isCombinationalCircuit, getStandardCircuitDefinition } from '../../utils/circuitClassification';
import { simulatorEngine } from '../../services/simulatorEngine';
import { VivadoSchematicViewer } from './VivadoSchematicViewer';

type RadixFormat = 'hex' | 'dec' | 'bin';

interface SignalGroupItem {
  id: string;
  displayName: string;
  type: 'input' | 'output' | 'clock' | 'internal';
  isBusGroup: boolean;
  memberSignals: SignalConfig[];
  color: string;
  fillColor: string;
}

interface WaveformViewerProps {
  simulationResult?: SimulationResult | null;
  signalConfigs?: SignalConfig[];
  signals?: SignalConfig[];
  samples?: WaveformSample[];
  isSimulating?: boolean;
  forcedValues?: Record<string, string>;
  onForceSignal?: (signalName: string, value: string) => void;
  onClearForced?: () => void;
  onDownloadVcd?: () => void;
  onDownloadTestbench?: () => void;
  onDownloadCsv?: () => void;
  code?: string;
  problem?: Problem;
  windowMode?: 'split' | 'lifted' | 'full';
  onToggleWindowMode?: (mode: 'split' | 'lifted' | 'full') => void;
  onRunCode?: () => void;
}

// 8 High-Contrast EDA Color Palette matching authentic logic analyzers
const SIGNAL_PALETTE = [
  { stroke: '#38bdf8', fill: 'rgba(56, 189, 248, 0.18)' },  // Cyan (Signal 0)
  { stroke: '#34d399', fill: 'rgba(52, 211, 153, 0.18)' },  // Emerald Green (Signal 1)
  { stroke: '#f59e0b', fill: 'rgba(245, 158, 11, 0.18)' },  // Amber/Gold (Signal 2 - typically output)
  { stroke: '#c084fc', fill: 'rgba(192, 132, 252, 0.18)' }, // Purple (Signal 3)
  { stroke: '#fb7185', fill: 'rgba(251, 113, 133, 0.18)' }, // Rose (Signal 4)
  { stroke: '#60a5fa', fill: 'rgba(96, 165, 250, 0.18)' },  // Blue (Signal 5)
  { stroke: '#2dd4bf', fill: 'rgba(45, 212, 191, 0.18)' },  // Teal (Signal 6)
  { stroke: '#fde047', fill: 'rgba(253, 224, 71, 0.18)' },  // Bright Yellow (Signal 7)
];

// Global cache for baseline golden reference waveforms
const baselineSimulationCache = new Map<string, SimulationResult>();

export const WaveformViewer: React.FC<WaveformViewerProps> = memo(({
  simulationResult,
  signalConfigs = [],
  signals = [],
  samples: samplesProp,
  isSimulating = false,
  forcedValues = {},
  onForceSignal = (_sig: string, _val: string) => {},
  onClearForced = () => {},
  onDownloadVcd,
  onDownloadTestbench,
  onDownloadCsv,
  code = '',
  problem,
  windowMode = 'split',
  onToggleWindowMode,
  onRunCode
}) => {
  const [viewMode, setViewMode] = useState<'waveform' | 'schematic' | 'assertions' | 'text_trace'>('waveform');
  const [waveformSource, setWaveformSource] = useState<'simulated' | 'reference'>('simulated');
  const [radix, setRadix] = useState<RadixFormat>('hex');
  const [enableBusGrouping, setEnableBusGrouping] = useState<boolean>(true);
  const [collapsedBuses, setCollapsedBuses] = useState<Record<string, boolean>>({});
  const [showSpecModal, setShowSpecModal] = useState<boolean>(false);
  const [showLiveStatusModal, setShowLiveStatusModal] = useState<boolean>(false);
  const [copiedAscii, setCopiedAscii] = useState<boolean>(false);
  const [copiedVcd, setCopiedVcd] = useState<boolean>(false);
  const [matchFilter, setMatchFilter] = useState<'all' | 'passed' | 'failed'>('all');

  // Zoom control: zoom level in percentage (50%, 75%, 100%, 125%, 150%, 200%)
  const [zoomPercent, setZoomPercent] = useState<number>(100);

  // Time cursor state in nanoseconds (defaults to 38ns or 95% of total time as seen in screenshot)
  const [cursorNs, setCursorNs] = useState<number>(38);
  const [isDraggingCursor, setIsDraggingCursor] = useState<boolean>(false);

  const waveformContainerRef = useRef<HTMLDivElement>(null);
  const isComb = isCombinationalCircuit(problem);

  // Effective signal definitions list
  const effectiveSignals = useMemo<SignalConfig[]>(() => {
    let raw: SignalConfig[] = [];
    if (Array.isArray(signalConfigs) && signalConfigs.length > 0) raw = signalConfigs;
    else if (Array.isArray(signals) && signals.length > 0) raw = signals;
    if (isComb) {
      return raw.filter(
        s => !s.name.toLowerCase().includes('clk') &&
             !s.name.toLowerCase().includes('clock') &&
             !s.name.toLowerCase().includes('rst')
      );
    }
    return raw;
  }, [signalConfigs, signals, isComb]);

  // Helper to resolve signal value from a sample
  // Helper to resolve signal value from a sample (supporting 4-state 0, 1, X, Z logic)
  const getSampleSignalVal = useCallback((sample: WaveformSample | null | undefined, name: string): string => {
    if (!sample?.signals) return '0';
    if (sample.signals[name] !== undefined) return sample.signals[name];
    const lower = name.toLowerCase();
    if (sample.signals[lower] !== undefined) return sample.signals[lower];

    // Single-bit index match, e.g. a[3] or q_2
    const bitMatch = name.match(/^([a-zA-Z_]\w*)\[(\d+)\]$/) || name.match(/^([a-zA-Z_]\w*)_(\d+)$/);
    if (bitMatch) {
      const base = bitMatch[1];
      const bit = parseInt(bitMatch[2], 10);
      for (const [k, v] of Object.entries(sample.signals)) {
        const busMatch = k.match(/^([a-zA-Z_]\w*)\[(\d+):(\d+)\]$/);
        if (busMatch && busMatch[1].toLowerCase() === base.toLowerCase()) {
          const msb = parseInt(busMatch[2], 10);
          const lsb = parseInt(busMatch[3], 10);
          const cleanV = String(v).replace(/^(\d+'[bBhHdD])/, '').replace(/[^0-1xXzZ]/g, '');
          if (msb >= lsb) {
            const offset = msb - bit;
            if (offset >= 0 && offset < cleanV.length) return cleanV[offset];
          } else {
            const offset = bit - msb;
            if (offset >= 0 && offset < cleanV.length) return cleanV[offset];
          }
        }
        if (k.toLowerCase() === base.toLowerCase()) {
          const cleanV = String(v).replace(/^(\d+'[bBhHdD])/, '').replace(/[^0-1xXzZ]/g, '');
          if (cleanV.length > 1) {
            const offset = cleanV.length - 1 - bit;
            if (offset >= 0 && offset < cleanV.length) return cleanV[offset];
          }
        }
      }
    }

    // Bus range match, e.g. q[7:0] or sum[3:0]
    const busRangeMatch = name.match(/^([a-zA-Z_]\w*)\[(\d+):(\d+)\]$/);
    if (busRangeMatch) {
      const base = busRangeMatch[1];
      if (sample.signals[base] !== undefined) return sample.signals[base];
      if (sample.signals[base.toLowerCase()] !== undefined) return sample.signals[base.toLowerCase()];
      // Look for any key starting with base[
      for (const [k, v] of Object.entries(sample.signals)) {
        if (k.toLowerCase().startsWith(`${base.toLowerCase()}[`)) return v;
      }
    }

    // Stripped base
    const stripped = name.replace(/\[.*\]/, '');
    if (sample.signals[stripped] !== undefined) return sample.signals[stripped];
    if (sample.signals[stripped.toLowerCase()] !== undefined) return sample.signals[stripped.toLowerCase()];
    for (const [k, v] of Object.entries(sample.signals)) {
      const kStripped = k.replace(/\[.*\]/, '');
      if (kStripped.toLowerCase() === stripped.toLowerCase() || k.toLowerCase() === lower) return v;
    }
    return '0';
  }, []);

  // Golden reference fallback simulation for instant 0ms rendering across all problem libraries
  const fallbackResult = useMemo<SimulationResult | null>(() => {
    if (!problem?.id) return null;
    if (baselineSimulationCache.has(problem.id)) {
      return baselineSimulationCache.get(problem.id)!;
    }
    try {
      const stdDef = getStandardCircuitDefinition(problem);
      const codeToSim = stdDef?.solutionCode || problem.solutionCode || problem.starterCode || '';
      const res = simulatorEngine.simulate(problem, codeToSim);
      baselineSimulationCache.set(problem.id, res);
      return res;
    } catch {
      return null;
    }
  }, [problem?.id, problem?.solutionCode, problem?.starterCode]);

  const isCompilationError = Boolean(
    simulationResult &&
    !simulationResult.passed &&
    simulationResult.errorType === 'syntax' &&
    (!simulationResult.samples || simulationResult.samples.length === 0)
  );

  const rawSamples = useMemo<WaveformSample[]>(() => {
    // If user requested Reference waveform and fallbackResult is available, show it
    if (waveformSource === 'reference' && fallbackResult?.samples && fallbackResult.samples.length > 0) {
      return fallbackResult.samples;
    }

    // Live simulation samples (DUT) from latest Run / Submit action
    if (simulationResult?.samples && simulationResult.samples.length > 0) {
      return simulationResult.samples;
    }

    if (samplesProp && samplesProp.length > 0) {
      return samplesProp;
    }

    if (fallbackResult?.samples && fallbackResult.samples.length > 0) {
      return fallbackResult.samples;
    }

    if (problem) {
      const defCycles = simulatorEngine.determineCircuitCycles(problem, problem.testbenchConfig);
      return simulatorEngine.generateTestbenchStimulusSamples(problem, defCycles);
    }
    return [];
  }, [simulationResult, samplesProp, fallbackResult, problem, waveformSource]);

  const samples = useMemo<WaveformSample[]>(() => {
    if (!rawSamples || rawSamples.length === 0) return [];
    if (!isComb) return rawSamples;
    return rawSamples.map(sample => {
      const cleanSignals: Record<string, string> = {};
      Object.entries(sample.signals || {}).forEach(([k, v]) => {
        const lk = k.toLowerCase();
        if (!lk.includes('clk') && !lk.includes('clock') && !lk.includes('rst')) {
          cleanSignals[k] = v;
        }
      });
      return { ...sample, signals: cleanSignals };
    });
  }, [rawSamples, isComb]);

  const effectiveResult = simulationResult || fallbackResult || {
    passed: false,
    message: 'Reference Model Timing Waveform',
    samples,
    logs: []
  };

  const logs = simulationResult ? (simulationResult.logs || []) : (fallbackResult?.logs || []);
  const passed = simulationResult ? (simulationResult.passed || false) : false;
  const message = simulationResult
    ? (simulationResult.message || 'Simulation Complete')
    : 'Reference Timing Waveform • Click "Run" or "Submit" to Verify Solution';
  const cyclesCount = Math.max(samples.length, 4);

  // Test vector assertions
  const testVectors: TestVectorAssertion[] = effectiveResult.testVectors || [];
  const passedTestsCount = effectiveResult.passedTestsCount ?? testVectors.filter(v => v.passed).length;
  const totalTestsCount = effectiveResult.totalTestsCount ?? testVectors.length;
  const matchPercentage = totalTestsCount > 0 ? Math.round((passedTestsCount / totalTestsCount) * 100) : (passed ? 100 : 0);

  // Timing constants (10ns per stimulus vector / clock cycle)
  const CYCLE_NS = 10;
  const totalTimeNs = Math.max(cyclesCount * CYCLE_NS, 40);

  // Step width in px per 10ns cycle, scaled by zoom percentage
  const baseStepWidth = 64;
  const STEP_WIDTH = Math.round(baseStepWidth * (zoomPercent / 100));
  const pixelsPerNs = STEP_WIDTH / CYCLE_NS;
  const totalWaveformWidth = Math.max(totalTimeNs * pixelsPerNs, 600);

  // Keep cursor clamped within valid range
  useEffect(() => {
    if (cursorNs > totalTimeNs) {
      setCursorNs(totalTimeNs);
    }
  }, [totalTimeNs, cursorNs]);

  // Set default cursor to 38ns if 40ns total (matching user screenshot)
  useEffect(() => {
    if (totalTimeNs === 40 && cursorNs === 38) {
      return;
    }
    if (cursorNs === 38 && totalTimeNs > 40) {
      // keep 38ns
    } else if (cursorNs === 0) {
      setCursorNs(Math.min(38, totalTimeNs));
    }
  }, [totalTimeNs]);

  // Dynamically resolve active signal list from simulation samples or config
  const activeSignalConfigs = useMemo<SignalConfig[]>(() => {
    let resolved: SignalConfig[] = [];
    if (samples && samples.length > 0 && samples[0]?.signals) {
      const sampleKeys = Object.keys(samples[0].signals);
      const existingMap = new Map((effectiveSignals || []).map(s => [s.name, s]));
      resolved = sampleKeys.map(key => {
        if (existingMap.has(key)) return existingMap.get(key)!;
        const lower = key.toLowerCase();
        let type: 'clock' | 'input' | 'output' | 'internal' = 'input';
        if (lower.includes('clk') || lower.includes('clock') || lower.includes('sck') || lower.includes('scl')) type = 'clock';
        else if (lower.includes('out') || lower.includes('sum') || lower.includes('cout') || lower.includes('q') || lower.includes('y') || lower.includes('dout')) type = 'output';
        return {
          name: key,
          type,
          initialValue: samples[0]?.signals?.[key] || '0'
        };
      });
    } else {
      resolved = effectiveSignals || [];
    }

    if (isComb) {
      return resolved.filter(
        s => !s.name.toLowerCase().includes('clk') &&
             !s.name.toLowerCase().includes('clock') &&
             !s.name.toLowerCase().includes('rst')
      );
    }
    return resolved;
  }, [effectiveSignals, samples, isComb]);

  // Automatically reset to DUT simulated source whenever fresh simulationResult arrives
  useEffect(() => {
    if (simulationResult) {
      setWaveformSource('simulated');
    }
  }, [simulationResult]);

  // Group signals into buses and assign colors
  const groupedSignalItems = useMemo<SignalGroupItem[]>(() => {
    const sigList = activeSignalConfigs || [];
    let items: SignalGroupItem[] = [];

    if (!enableBusGrouping) {
      items = sigList.map((sig, idx) => {
        const busRangeMatch = sig.name.match(/^([a-zA-Z_]\w*)\[(\d+):(\d+)\]$/);
        const isMultiBit = Boolean(busRangeMatch || (sig.initialValue && sig.initialValue.length > 1));
        return {
          id: sig.name,
          displayName: sig.name,
          type: sig.type,
          isBusGroup: isMultiBit,
          memberSignals: [sig],
          color: SIGNAL_PALETTE[idx % SIGNAL_PALETTE.length].stroke,
          fillColor: SIGNAL_PALETTE[idx % SIGNAL_PALETTE.length].fill
        };
      });
    } else {
      const busMap = new Map<string, { baseName: string; type: 'input' | 'output' | 'clock' | 'internal'; signals: { sig: SignalConfig; index: number }[] }>();
      const standaloneSignals: SignalGroupItem[] = [];

      sigList.forEach(sig => {
        if (!sig || !sig.name) return;
        const busRangeMatch = sig.name.match(/^([a-zA-Z_]\w*)\[(\d+):(\d+)\]$/);
        const isMultiBit = Boolean(busRangeMatch || (sig.initialValue && sig.initialValue.length > 1));
        const bitMatch = sig.name.match(/^([a-zA-Z_]\w*)\[(\d+)\]$/) || sig.name.match(/^([a-zA-Z_]\w*)_(\d+)$/);

        if (isMultiBit) {
          standaloneSignals.push({
            id: sig.name,
            displayName: sig.name,
            type: sig.type,
            isBusGroup: true,
            memberSignals: [sig],
            color: '#38bdf8',
            fillColor: 'rgba(56, 189, 248, 0.18)'
          });
        } else if (bitMatch) {
          const baseName = bitMatch[1];
          const index = parseInt(bitMatch[2], 10);
          if (!busMap.has(baseName)) {
            busMap.set(baseName, { baseName, type: sig.type, signals: [] });
          }
          busMap.get(baseName)!.signals.push({ sig, index });
        } else {
          standaloneSignals.push({
            id: sig.name,
            displayName: sig.name,
            type: sig.type,
            isBusGroup: false,
            memberSignals: [sig],
            color: '#38bdf8',
            fillColor: 'rgba(56, 189, 248, 0.18)'
          });
        }
      });

      const busGroups: SignalGroupItem[] = [];
      busMap.forEach(({ baseName, type, signals: memberSigs }) => {
        if (memberSigs && memberSigs.length > 1) {
          memberSigs.sort((a, b) => b.index - a.index);
          const maxBit = memberSigs[0].index;
          const minBit = memberSigs[memberSigs.length - 1].index;
          const displayName = `${baseName}[${maxBit}:${minBit}]`;

          busGroups.push({
            id: displayName,
            displayName,
            type,
            isBusGroup: true,
            memberSignals: memberSigs.map(s => s.sig),
            color: '#38bdf8',
            fillColor: 'rgba(56, 189, 248, 0.18)'
          });
        } else if (memberSigs) {
          memberSigs.forEach(s => {
            if (s && s.sig) {
              standaloneSignals.push({
                id: s.sig.name,
                displayName: s.sig.name,
                type: s.sig.type,
                isBusGroup: false,
                memberSignals: [s.sig],
                color: '#38bdf8',
                fillColor: 'rgba(56, 189, 248, 0.18)'
              });
            }
          });
        }
      });

      items = [...standaloneSignals, ...busGroups];
    }

    // Assign colors from palette
    return items.map((item, idx) => ({
      ...item,
      color: SIGNAL_PALETTE[idx % SIGNAL_PALETTE.length].stroke,
      fillColor: SIGNAL_PALETTE[idx % SIGNAL_PALETTE.length].fill
    }));
  }, [activeSignalConfigs, enableBusGrouping]);

  // Radix formatting helper (supporting 4-state 0, 1, X, Z logic)
  const formatRadix = useCallback((rawBinaryStr: string, fmt: RadixFormat) => {
    if (!rawBinaryStr) return '0';
    if (/[xX]/.test(rawBinaryStr)) return rawBinaryStr.toUpperCase();
    if (/[zZ]/.test(rawBinaryStr)) return rawBinaryStr.toUpperCase();
    const cleanBin = rawBinaryStr.replace(/^(\d+'[bBhHdD])/, '').replace(/[^0-1]/g, '');
    if (!cleanBin) return rawBinaryStr;
    const num = parseInt(cleanBin, 2);
    if (isNaN(num)) return rawBinaryStr;

    if (fmt === 'hex') {
      const hexWidth = Math.max(1, Math.ceil(cleanBin.length / 4));
      return num.toString(16).toUpperCase().padStart(hexWidth, '0');
    } else if (fmt === 'dec') {
      return `${num}`;
    } else {
      return cleanBin;
    }
  }, []);

  // Compute active sample at cursorNs
  const activeCycleIndex = Math.min(
    Math.max(0, samples.length - 1),
    Math.floor(cursorNs / CYCLE_NS)
  );
  const activeSampleAtCursor = samples[activeCycleIndex] || samples[0];

  // Helper to get signal's instantaneous value at cursorNs
  const getSignalValueAtCursor = useCallback((signalName: string): string => {
    if (!activeSampleAtCursor) return '0';
    const raw = getSampleSignalVal(activeSampleAtCursor, signalName);
    if (raw.length <= 1 && !/^[0-9]+$/.test(raw)) return raw;
    return formatRadix(raw, radix);
  }, [activeSampleAtCursor, getSampleSignalVal, formatRadix, radix]);

  // Row heights and waveform coordinates matching screenshot
  const ROW_HEIGHT = 44;
  const Y_HIGH = 10;
  const Y_LOW = 34;
  const Y_MID = 22;

  // Multi-bit Bus Segments calculation for authentic EDA hexagonal crossover envelopes
  interface BusSegment {
    startIndex: number;
    endIndex: number;
    xStart: number;
    xEnd: number;
    value: string;
    formattedValue: string;
    isUnknown: boolean;
    isHighZ: boolean;
  }

  const getBusSegments = useCallback((signalName: string): BusSegment[] => {
    if (!samples || samples.length === 0) return [];
    const segments: BusSegment[] = [];
    let currentSegment: BusSegment | null = null;

    samples.forEach((sample, idx) => {
      const val = getSampleSignalVal(sample, signalName);
      const isUnknown = /[xX]/.test(val);
      const isHighZ = /[zZ]/.test(val);
      const xStart = idx * STEP_WIDTH;
      const xEnd = (idx + 1) * STEP_WIDTH;

      if (!currentSegment || currentSegment.value !== val) {
        if (currentSegment) {
          segments.push(currentSegment);
        }
        currentSegment = {
          startIndex: idx,
          endIndex: idx + 1,
          xStart,
          xEnd,
          value: val,
          formattedValue: formatRadix(val, radix),
          isUnknown,
          isHighZ
        };
      } else {
        currentSegment.endIndex = idx + 1;
        currentSegment.xEnd = xEnd;
      }
    });

    if (currentSegment) {
      segments.push(currentSegment);
    }
    return segments;
  }, [samples, getSampleSignalVal, STEP_WIDTH, formatRadix, radix]);

  // Build waveform path for single-bit signal with 4-state (0, 1, X, Z) support
  const getSignalWaveformPath = useCallback((signalName: string) => {
    if (!samples || samples.length === 0) {
      return {
        path: '',
        fillPath: '',
        unknownBoxes: [] as { xStart: number; xEnd: number }[],
        zLines: [] as { xStart: number; xEnd: number }[]
      };
    }

    let pathStr = '';
    let prevY: number | null = null;
    let fillPathStr = '';
    const unknownBoxes: { xStart: number; xEnd: number }[] = [];
    const zLines: { xStart: number; xEnd: number }[] = [];

    samples.forEach((sample, idx) => {
      const rawVal = getSampleSignalVal(sample, signalName);
      const isUnknown = /^[xX]$/.test(rawVal);
      const isHighZ = /^[zZ]$/.test(rawVal);
      const isHigh = rawVal === '1' || rawVal.endsWith('1') || (parseInt(rawVal, 10) > 0 && !isNaN(parseInt(rawVal, 10)) && !isUnknown && !isHighZ);

      const xStart = idx * STEP_WIDTH;
      const xEnd = (idx + 1) * STEP_WIDTH;

      if (isUnknown) {
        unknownBoxes.push({ xStart, xEnd });
        prevY = null;
        return;
      }

      if (isHighZ) {
        zLines.push({ xStart, xEnd });
        prevY = null;
        return;
      }

      const currY = isHigh ? Y_HIGH : Y_LOW;

      if (prevY === null) {
        pathStr += ` M ${xStart} ${currY}`;
      } else if (prevY !== currY) {
        pathStr += ` L ${xStart} ${currY}`;
      }

      pathStr += ` L ${xEnd} ${currY}`;
      prevY = currY;

      if (isHigh) {
        fillPathStr += ` M ${xStart} ${Y_LOW} L ${xStart} ${Y_HIGH} L ${xEnd} ${Y_HIGH} L ${xEnd} ${Y_LOW} Z`;
      }
    });

    return { path: pathStr, fillPath: fillPathStr, unknownBoxes, zLines };
  }, [samples, getSampleSignalVal, STEP_WIDTH]);

  // Handle click or drag on the waveform or timeline ruler to move cursor
  const handlePointerDownTimeline = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDraggingCursor(true);
    handlePointerMoveTimeline(e);
  };

  const handlePointerMoveTimeline = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const computedNs = Math.max(0, Math.min(totalTimeNs, Math.round(clickX / pixelsPerNs)));
    setCursorNs(computedNs);
  };

  const handlePointerUpTimeline = () => {
    setIsDraggingCursor(false);
  };

  // Zoom handlers
  const handleZoomIn = () => {
    setZoomPercent(prev => Math.min(200, prev + 25));
  };

  const handleZoomOut = () => {
    setZoomPercent(prev => Math.max(50, prev - 25));
  };

  const handleZoomFit = () => {
    if (waveformContainerRef.current) {
      const availableWidth = waveformContainerRef.current.clientWidth - 220;
      if (availableWidth > 100 && totalTimeNs > 0) {
        const calculatedStep = (availableWidth / (totalTimeNs / CYCLE_NS));
        const newPercent = Math.max(40, Math.min(250, Math.round((calculatedStep / baseStepWidth) * 100)));
        setZoomPercent(newPercent);
      }
    }
  };

  // Generate 5ns minor ticks and 10ns major ticks for timeline ruler
  const timelineTicks = useMemo(() => {
    const ticks: { ns: number; isMajor: boolean; x: number }[] = [];
    for (let ns = 0; ns <= totalTimeNs; ns += 5) {
      ticks.push({
        ns,
        isMajor: ns % 10 === 0,
        x: ns * pixelsPerNs
      });
    }
    return ticks;
  }, [totalTimeNs, pixelsPerNs]);

  const cursorX = cursorNs * pixelsPerNs;

  return (
    <div className="h-full flex flex-col bg-[#0b0e17] text-[#f1f3f7] font-mono text-xs overflow-hidden select-none">
      
      {/* =========================================================================
          TOP TOOLBAR (IDENTICAL TO SCREENSHOT SPECIFICATION)
          WAVEFORM ... 3 signals | [-] 100% [+] [⊡] | T=38ns | 40ns
      ========================================================================= */}
      <div className="h-11 px-4 bg-[#0d111e] border-b border-[#1c2236] flex items-center justify-between shrink-0 shadow-sm z-20">
        
        {/* Left Side: Title & Mode Switcher */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-[#38bdf8] font-bold text-xs font-mono tracking-[0.2em] uppercase">
              WAVEFORM
            </span>
          </div>

          {/* Quick Tabs: Waveform | Schematic | Truth Table | Text Trace */}
          <div className="flex items-center gap-0.5 bg-[#121727] p-0.5 rounded-lg border border-[#1e2538] text-[11px]">
            <button
              onClick={() => setViewMode('waveform')}
              className={`h-6 px-2.5 rounded-md font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                viewMode === 'waveform'
                  ? 'bg-[#38bdf8] text-[#080b12] shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Activity className="w-3 h-3" />
              <span>Waveform</span>
            </button>

            <button
              onClick={() => setViewMode('schematic')}
              className={`h-6 px-2.5 rounded-md font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                viewMode === 'schematic'
                  ? 'bg-[#38bdf8] text-[#080b12] shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Cpu className="w-3 h-3" />
              <span>Schematic</span>
            </button>

            <button
              onClick={() => setViewMode('assertions')}
              className={`h-6 px-2.5 rounded-md font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                viewMode === 'assertions'
                  ? 'bg-[#38bdf8] text-[#080b12] shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Table className="w-3 h-3" />
              <span>Truth Table</span>
              {totalTestsCount > 0 && (
                <span className={`text-[9px] px-1 rounded ${passed ? 'bg-emerald-950 text-emerald-400' : 'bg-rose-950 text-rose-400'}`}>
                  {passedTestsCount}/{totalTestsCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setViewMode('text_trace')}
              className={`h-6 px-2.5 rounded-md font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                viewMode === 'text_trace'
                  ? 'bg-[#38bdf8] text-[#080b12] shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <FileText className="w-3 h-3" />
              <span>Text Trace</span>
            </button>
          </div>
        </div>

        {/* Right Side: Signals Count | Zoom Controls | Time Readout | Lift */}
        <div className="flex items-center gap-3 text-xs font-mono">
          
          {/* Signal Count */}
          <span className="text-slate-400 text-[11px] font-medium hidden sm:inline">
            {groupedSignalItems.length} signals
          </span>

          {/* Radix Format Selector: HEX | DEC | BIN */}
          <div className="flex items-center gap-0.5 bg-[#121727] p-0.5 rounded-md border border-[#1e2538] text-[10px]">
            {(['hex', 'dec', 'bin'] as RadixFormat[]).map(fmt => (
              <button
                key={fmt}
                onClick={() => setRadix(fmt)}
                className={`px-1.5 py-0.5 rounded uppercase font-bold transition-all cursor-pointer ${
                  radix === fmt
                    ? 'bg-[#38bdf8] text-[#080b12]'
                    : 'text-slate-400 hover:text-white'
                }`}
                title={`Display multi-bit vectors in ${fmt.toUpperCase()}`}
              >
                {fmt}
              </button>
            ))}
          </div>

          <span className="text-slate-700 hidden sm:inline">|</span>

          {/* Zoom Controls: [-] 100% [+] [⊡] */}
          {viewMode === 'waveform' && (
            <div className="flex items-center gap-1">
              <button
                onClick={handleZoomOut}
                className="w-6 h-6 rounded bg-[#121727] hover:bg-[#1a2238] border border-[#1e2538] text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
                title="Zoom Out Waveform"
              >
                <span className="font-bold text-xs">-</span>
              </button>

              <span className="text-[11px] text-slate-300 font-mono w-10 text-center">
                {zoomPercent}%
              </span>

              <button
                onClick={handleZoomIn}
                className="w-6 h-6 rounded bg-[#121727] hover:bg-[#1a2238] border border-[#1e2538] text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
                title="Zoom In Waveform"
              >
                <span className="font-bold text-xs">+</span>
              </button>

              <button
                onClick={handleZoomFit}
                className="w-6 h-6 rounded bg-[#121727] hover:bg-[#1a2238] border border-[#1e2538] text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
                title="Fit to Screen"
              >
                <span className="text-xs">⊡</span>
              </button>
            </div>
          )}

          <span className="text-slate-700">|</span>

          {/* Cursor Time Indicator (T=38ns | 40ns with red highlight) */}
          <div className="flex items-center gap-1 text-[11px] font-mono">
            <span className="text-[#f43f5e] font-bold">
              T={cursorNs}ns
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">
              {totalTimeNs}ns
            </span>
          </div>

          {/* Golden Reference vs DUT Toggle */}
          {simulationResult && (
            <div className="hidden lg:flex items-center gap-0.5 bg-[#121727] p-0.5 rounded-lg border border-[#1e2538] text-[10px]">
              <button
                onClick={() => setWaveformSource('simulated')}
                className={`px-2 py-0.5 rounded font-semibold transition-all cursor-pointer ${
                  waveformSource === 'simulated'
                    ? passed ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                DUT Code
              </button>
              <button
                onClick={() => setWaveformSource('reference')}
                className={`px-2 py-0.5 rounded font-semibold transition-all cursor-pointer ${
                  waveformSource === 'reference'
                    ? 'bg-amber-600 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Reference
              </button>
            </div>
          )}

          {/* Download PNG Button */}
          {problem && viewMode === 'waveform' && (
            <button
              onClick={() => downloadWaveformAsPng(problem, simulationResult || effectiveResult, effectiveSignals)}
              className="w-6 h-6 rounded bg-[#121727] hover:bg-[#1a2238] border border-[#1e2538] text-slate-400 hover:text-white flex items-center justify-center transition-all cursor-pointer"
              title="Export Waveform as PNG"
            >
              <Download className="w-3 h-3 text-[#38bdf8]" />
            </button>
          )}

          {/* Window Mode Controls (Split / Lift / Full) */}
          {onToggleWindowMode && (
            <div className="flex items-center gap-0.5 bg-[#121727] p-0.5 rounded-md border border-[#1e2538]">
              <button
                onClick={() => onToggleWindowMode(windowMode === 'full' ? 'split' : 'full')}
                className="w-6 h-6 rounded hover:bg-[#1a2238] text-slate-400 hover:text-white flex items-center justify-center transition-all cursor-pointer"
                title={windowMode === 'full' ? 'Restore Split View' : 'Maximize Waveform Window'}
              >
                {windowMode === 'full' ? <Minimize2 className="w-3 h-3" /> : <Maximize2 className="w-3 h-3" />}
              </button>
            </div>
          )}

        </div>
      </div>

      {/* =========================================================================
          MAIN VIEW CONTAINER
      ========================================================================= */}
      {viewMode === 'waveform' ? (
        <div 
          ref={waveformContainerRef}
          className="flex-1 overflow-hidden flex flex-col bg-[#0b0e17] relative"
        >
          {isCompilationError && waveformSource === 'simulated' ? (
            /* =================================================================
               COMPILATION & SYNTAX ERROR DIAGNOSTIC VIEW
               Explicitly displays error location, snippet, message, and hint
            ================================================================= */
            <div className="flex-1 p-6 flex flex-col items-center justify-center bg-[#0b0e17] text-center space-y-4 overflow-y-auto">
              <div className="w-14 h-14 rounded-2xl bg-rose-950/60 border border-rose-500/50 flex items-center justify-center text-rose-400 shadow-2xl">
                <AlertTriangle className="w-7 h-7" />
              </div>

              <div className="max-w-lg space-y-2.5">
                <div className="flex items-center justify-center gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-rose-500/20 text-rose-300 font-mono text-xs font-bold border border-rose-500/30">
                    {effectiveResult.errorType === 'syntax' ? 'COMPILATION / SYNTAX ERROR' : 'SIMULATION ERROR'}
                  </span>
                  {effectiveResult.errorLine && (
                    <span className="px-2.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-xs font-semibold">
                      Line {effectiveResult.errorLine}
                    </span>
                  )}
                </div>

                <h3 className="text-sm font-bold text-white">
                  {effectiveResult.message}
                </h3>

                {effectiveResult.errorSnippet && (
                  <div className="p-3 rounded-lg bg-black/80 border border-rose-500/40 font-mono text-xs text-left text-amber-200 overflow-x-auto shadow-inner">
                    <span className="text-rose-400 font-bold select-none mr-2">{effectiveResult.errorLine || 1} |</span>
                    <code>{effectiveResult.errorSnippet}</code>
                  </div>
                )}

                {effectiveResult.errorHint && (
                  <p className="text-xs text-amber-300/90 leading-relaxed flex items-center justify-center gap-1.5 pt-1">
                    <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{effectiveResult.errorHint}</span>
                  </p>
                )}
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
                <button
                  onClick={() => setWaveformSource('reference')}
                  className="px-4 py-2 rounded-xl bg-[#182035] hover:bg-[#222d4a] border border-[#2e3e68] text-cyan-300 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer shadow-md"
                >
                  <Activity className="w-4 h-4 text-cyan-400" />
                  <span>View Expected Reference Timing Waveform</span>
                </button>
                {onRunCode && (
                  <button
                    onClick={onRunCode}
                    disabled={isSimulating}
                    className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-md shadow-rose-600/30"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    <span>Re-run Code (Ctrl+Enter)</span>
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* =================================================================
               SYNCHRONIZED DIGITAL TIMING WAVEFORM CANVAS
               Pixel-perfect implementation matching oscilloscope & logic analyzer
            ================================================================= */
            <div className="flex-1 overflow-x-auto overflow-y-auto">
              {waveformSource === 'reference' && isCompilationError && (
                <div className="p-2 bg-amber-950/60 border-b border-amber-500/30 text-xs text-amber-300 flex items-center justify-between px-4 sticky left-0 z-20">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    <span>
                      <strong>Reference Waveform Model:</strong> Showing expected golden timing. Your DUT code has compilation errors.
                    </span>
                  </div>
                  <button
                    onClick={() => setWaveformSource('simulated')}
                    className="px-2 py-0.5 rounded bg-rose-600 hover:bg-rose-500 text-white font-bold text-[10px] cursor-pointer"
                  >
                    View Compilation Error
                  </button>
                </div>
              )}

              <div 
                style={{ minWidth: totalWaveformWidth + 210 }}
                className="flex flex-col min-h-full"
              >
                {/* -------------------------------------------------------------
                    TOP TIME RULER AXIS (0ns, 5ns, 10ns, 15ns, 20ns, ..., 40ns)
                ------------------------------------------------------------- */}
                <div className="flex items-center h-9 border-b border-[#1c2236] bg-[#0d111e] sticky top-0 z-10 select-none">
                  
                  {/* Left Header Spacer */}
                  <div className="w-48 shrink-0 px-4 flex items-center justify-between border-r border-[#1c2236] text-[10px] text-slate-500 font-mono tracking-wider font-semibold">
                    <span>SIGNAL</span>
                    <span>VALUE</span>
                  </div>

                  {/* Ruler Axis Area with Clickable / Draggable Red Cursor Badge */}
                  <div 
                    className="flex-1 h-full relative cursor-crosshair"
                    onMouseDown={handlePointerDownTimeline}
                    onMouseMove={isDraggingCursor ? handlePointerMoveTimeline : undefined}
                    onMouseUp={handlePointerUpTimeline}
                  >
                    <svg width={totalWaveformWidth} height={36} className="block overflow-visible">
                      {/* Minor (5ns) and Major (10ns) Ticks */}
                      {timelineTicks.map(tick => (
                        <g key={tick.ns}>
                          <line
                            x1={tick.x}
                            y1={tick.isMajor ? 14 : 20}
                            x2={tick.x}
                            y2={36}
                            stroke={tick.isMajor ? '#475569' : '#1e293b'}
                            strokeWidth={1}
                          />
                          {tick.isMajor && (
                            <text
                              x={tick.x}
                              y={11}
                              fill="#64748b"
                              fontSize={10}
                              fontFamily="monospace"
                              textAnchor="middle"
                              fontWeight="500"
                            >
                              {tick.ns}ns
                            </text>
                          )}
                          {!tick.isMajor && tick.ns <= 45 && (
                            <text
                              x={tick.x}
                              y={11}
                              fill="#475569"
                              fontSize={9}
                              fontFamily="monospace"
                              textAnchor="middle"
                            >
                              {tick.ns}ns
                            </text>
                          )}
                        </g>
                      ))}
                    </svg>

                    {/* Red/Rose Cursor Badge (38ns) positioned directly above vertical cursor */}
                    <div 
                      style={{ left: `${cursorX}px` }}
                      className="absolute -top-0.5 -translate-x-1/2 z-20 pointer-events-none transition-all duration-75"
                    >
                      <div className="bg-[#ef4444] text-white text-[10px] font-bold font-mono px-1.5 py-0.5 rounded shadow-lg flex items-center justify-center">
                        {cursorNs}ns
                      </div>
                    </div>
                  </div>

                </div>

                {/* -------------------------------------------------------------
                    SIGNAL ROWS CONTAINER
                    Left column: signal name + live value + colored dot
                    Right column: digital waveform trace with shaded high fill
                ------------------------------------------------------------- */}
                <div className="flex-1 relative">
                  
                  {groupedSignalItems.map((group, rowIdx) => {
                    const signalVal = getSignalValueAtCursor(group.displayName);
                    const waveData = getSignalWaveformPath(group.displayName);
                    const isOutput = group.type === 'output' || group.displayName.toLowerCase().includes('out') || group.displayName.toLowerCase() === 'y';

                    return (
                      <div 
                        key={group.id}
                        className="flex items-center h-11 border-b border-[#141927] hover:bg-[#0f1422] transition-colors relative group"
                      >
                        {/* Left Signal Column: Name + Live Value + Color Dot */}
                        <div className="w-48 shrink-0 h-full px-4 flex items-center justify-between border-r border-[#1c2236] bg-[#0b0e17] group-hover:bg-[#0f1422] transition-colors z-10">
                          {/* Signal Name */}
                          <div className="flex items-center gap-1.5 truncate">
                            <span className="font-mono text-xs text-slate-300 font-medium truncate">
                              {group.displayName}
                            </span>
                            {isOutput && (
                              <span className="text-[10px] text-slate-500 font-normal">
                                (out)
                              </span>
                            )}
                          </div>

                          {/* Signal Value at Cursor + Colored Dot */}
                          <div className="flex items-center gap-1.5 shrink-0 pl-2">
                            <span 
                              style={{ color: group.color }}
                              className="font-mono text-xs font-bold"
                            >
                              {signalVal}
                            </span>
                            {/* Dot matching signal trace color */}
                            <span 
                              style={{ backgroundColor: group.color }}
                              className="w-2 h-2 rounded-full inline-block shadow-sm"
                            />
                          </div>
                        </div>

                        {/* Right Waveform Trace Area */}
                        <div 
                          className="flex-1 h-full relative cursor-crosshair"
                          onMouseDown={handlePointerDownTimeline}
                          onMouseMove={isDraggingCursor ? handlePointerMoveTimeline : undefined}
                          onMouseUp={handlePointerUpTimeline}
                        >
                          <svg width={totalWaveformWidth} height={ROW_HEIGHT} className="block overflow-visible">
                            
                            {/* Vertical guide lines at each 5ns step */}
                            {timelineTicks.map(tick => (
                              <line
                                key={tick.ns}
                                x1={tick.x}
                                y1={0}
                                x2={tick.x}
                                y2={ROW_HEIGHT}
                                stroke="#141926"
                                strokeDasharray="2,3"
                                strokeWidth={1}
                              />
                            ))}

                            {group.isBusGroup ? (
                              /* Multi-Bit Vector Signal (Bus Envelope with centered radix-formatted value) */
                              <g>
                                {getBusSegments(group.displayName).map((seg, sIdx) => {
                                  const segWidth = seg.xEnd - seg.xStart;
                                  const crossW = Math.min(5, Math.max(2, segWidth / 5));

                                  if (seg.isHighZ) {
                                    return (
                                      <g key={sIdx}>
                                        <line
                                          x1={seg.xStart}
                                          y1={Y_MID}
                                          x2={seg.xEnd}
                                          y2={Y_MID}
                                          stroke="#94a3b8"
                                          strokeDasharray="3,2"
                                          strokeWidth={1.5}
                                        />
                                        {segWidth >= 20 && (
                                          <text
                                            x={(seg.xStart + seg.xEnd) / 2}
                                            y={Y_MID - 4}
                                            fill="#94a3b8"
                                            fontSize={9}
                                            fontFamily="monospace"
                                            textAnchor="middle"
                                          >
                                            Hi-Z
                                          </text>
                                        )}
                                      </g>
                                    );
                                  }

                                  const isUnknown = seg.isUnknown;
                                  const strokeColor = isUnknown ? '#ef4444' : group.color;
                                  const fillColor = isUnknown ? 'rgba(239, 68, 68, 0.28)' : group.fillColor;

                                  const leftX = seg.startIndex === 0 ? seg.xStart : seg.xStart + crossW;
                                  const rightX = seg.endIndex >= samples.length ? seg.xEnd : seg.xEnd - crossW;

                                  let hexPath = '';
                                  if (seg.startIndex === 0) {
                                    hexPath = `M ${seg.xStart} ${Y_HIGH} L ${rightX} ${Y_HIGH}`;
                                  } else {
                                    hexPath = `M ${seg.xStart} ${Y_MID} L ${leftX} ${Y_HIGH} L ${rightX} ${Y_HIGH}`;
                                  }

                                  if (seg.endIndex >= samples.length) {
                                    hexPath += ` L ${seg.xEnd} ${Y_LOW} L ${leftX} ${Y_LOW}`;
                                  } else {
                                    hexPath += ` L ${seg.xEnd} ${Y_MID} L ${rightX} ${Y_LOW} L ${leftX} ${Y_LOW}`;
                                  }

                                  if (seg.startIndex === 0) {
                                    hexPath += ` L ${seg.xStart} ${Y_LOW} Z`;
                                  } else {
                                    hexPath += ` L ${seg.xStart} ${Y_MID} Z`;
                                  }

                                  return (
                                    <g key={sIdx}>
                                      {/* Shaded Bus Envelope Fill */}
                                      <path d={hexPath} fill={fillColor} />
                                      {/* Bus Envelope Dual-Line Borders */}
                                      <path d={hexPath} fill="none" stroke={strokeColor} strokeWidth={1.5} strokeLinejoin="round" />
                                      {/* Formatted Bus Value centered inside cell */}
                                      {segWidth >= 22 && (
                                        <text
                                          x={(seg.xStart + seg.xEnd) / 2}
                                          y={26}
                                          fill={isUnknown ? '#fca5a5' : '#f1f5f9'}
                                          fontSize={10}
                                          fontWeight="600"
                                          fontFamily="monospace"
                                          textAnchor="middle"
                                        >
                                          {seg.formattedValue}
                                        </text>
                                      )}
                                    </g>
                                  );
                                })}
                              </g>
                            ) : (
                              /* Single-Bit Digital Trace with 4-state (0, 1, X, Z) */
                              <g>
                                {waveData.fillPath && (
                                  <path 
                                    d={waveData.fillPath} 
                                    fill={group.fillColor} 
                                  />
                                )}

                                {waveData.unknownBoxes && waveData.unknownBoxes.map((box, bIdx) => (
                                  <g key={`unk-${bIdx}`}>
                                    <rect
                                      x={box.xStart}
                                      y={Y_HIGH}
                                      width={box.xEnd - box.xStart}
                                      height={Y_LOW - Y_HIGH}
                                      fill="rgba(239, 68, 68, 0.25)"
                                      stroke="#ef4444"
                                      strokeWidth={1.5}
                                    />
                                    <text
                                      x={(box.xStart + box.xEnd) / 2}
                                      y={26}
                                      fill="#fca5a5"
                                      fontSize={10}
                                      fontWeight="bold"
                                      fontFamily="monospace"
                                      textAnchor="middle"
                                    >
                                      X
                                    </text>
                                  </g>
                                ))}

                                {waveData.zLines && waveData.zLines.map((z, zIdx) => (
                                  <line
                                    key={`z-${zIdx}`}
                                    x1={z.xStart}
                                    y1={Y_MID}
                                    x2={z.xEnd}
                                    y2={Y_MID}
                                    stroke="#94a3b8"
                                    strokeDasharray="3,2"
                                    strokeWidth={1.5}
                                  />
                                ))}

                                <path
                                  d={waveData.path}
                                  fill="none"
                                  stroke={group.color}
                                  strokeWidth={2}
                                  strokeLinecap="square"
                                  strokeLinejoin="miter"
                                />
                              </g>
                            )}
                          </svg>
                        </div>
                      </div>
                    );
                  })}

                  {/* -------------------------------------------------------------
                      VERTICAL RED DASHED CURSOR LINE
                      Spanning the entire height through all signal rows
                  ------------------------------------------------------------- */}
                  <div 
                    style={{ 
                      left: `${cursorX + 192}px`, // 192px = w-48 left label column width
                      top: 0,
                      bottom: 0
                    }}
                    className="absolute w-px pointer-events-none z-10 transition-all duration-75"
                  >
                    <div className="w-full h-full border-l border-dashed border-[#ef4444] opacity-90" />
                  </div>

                </div>

              </div>
            </div>
          )}

          {/* Verification Mismatch Banner (when simulated with logic mismatches) */}
          {simulationResult && !simulationResult.passed && !isCompilationError && (
            <div className="p-2.5 bg-rose-950/70 border-t border-rose-500/40 flex items-center justify-between text-xs text-rose-200 px-4">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                <span>
                  <strong>Output Mismatch:</strong> {effectiveResult.totalTestsCount - effectiveResult.passedTestsCount} test vector(s) did not match expected specification. Click <strong>Truth Table</strong> tab to view stimulus assertions.
                </span>
              </div>
              <button
                onClick={() => setViewMode('assertions')}
                className="px-2.5 py-1 rounded bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs shrink-0 cursor-pointer shadow transition-all"
              >
                Inspect Truth Table
              </button>
            </div>
          )}

          {/* Reference Banner if code not run yet */}
          {!simulationResult && (
            <div className="p-2.5 bg-[#0f1424] border-t border-[#1c2236] flex items-center justify-between text-xs text-amber-300 px-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span>
                  <strong>Reference Waveform:</strong> Displaying standard expected digital transitions for {problem?.title || 'this circuit'}. Click <strong>Run Code (Ctrl+Enter)</strong> to verify your DUT implementation.
                </span>
              </div>
              {onRunCode && (
                <button
                  onClick={onRunCode}
                  disabled={isSimulating}
                  className="px-3 py-1 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>Run Code</span>
                </button>
              )}
            </div>
          )}

          {/* Floating Action Buttons at Bottom-Right (as seen in screenshot) */}
          <div className="absolute right-4 bottom-4 flex flex-col items-center gap-2 z-30">
            {/* Documentation / Problem Spec Button */}
            <button
              onClick={() => setShowSpecModal(true)}
              className="w-9 h-9 rounded-full bg-[#161c2e] hover:bg-[#202942] border border-[#2b3552] text-slate-300 hover:text-white flex items-center justify-center shadow-xl transition-all cursor-pointer"
              title="View Problem Hardware Specification & Register Map"
            >
              <BookOpen className="w-4 h-4 text-[#38bdf8]" />
            </button>

            {/* Simulation Wire Status Button */}
            <button
              onClick={() => setShowLiveStatusModal(true)}
              className="w-9 h-9 rounded-full bg-[#161c2e] hover:bg-[#202942] border border-[#2b3552] text-slate-300 hover:text-white flex items-center justify-center shadow-xl transition-all cursor-pointer"
              title="Simulation Wire & Engine Telemetry"
            >
              <Radio className="w-4 h-4 text-emerald-400" />
            </button>
          </div>

        </div>
      ) : viewMode === 'schematic' ? (
        /* =========================================================================
            SCHEMATIC & FSM VIEW
        ========================================================================= */
        <div className="flex-1 overflow-auto bg-[#0b0e17] p-4">
          <VivadoSchematicViewer
            problem={problem}
            currentSample={activeSampleAtCursor}
            signalConfigs={effectiveSignals}
            forcedValues={forcedValues}
            onForceSignal={onForceSignal}
            selectedCycle={activeCycleIndex}
            totalCycles={samples.length}
            onSelectCycle={(cycle) => setCursorNs(cycle * CYCLE_NS)}
            onDownloadSvg={() => {
              if (problem) {
                downloadCircuitAsSvg(problem, activeSampleAtCursor, effectiveSignals);
              }
            }}
          />
        </div>
      ) : viewMode === 'assertions' ? (
        /* =========================================================================
            TRUTH TABLE & ASSERTION CHECK VIEW
        ========================================================================= */
        <div className="flex-1 overflow-y-auto bg-[#0b0e17] p-4 space-y-4">
          {/* Output Match Summary Banner */}
          <div className={`p-4 rounded-xl border flex flex-col md:flex-row md:items-center justify-between gap-4 ${
            passed
              ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-300'
              : 'bg-rose-950/30 border-rose-500/40 text-rose-300'
          }`}>
            <div className="flex items-start gap-3">
              <div className={`p-2 rounded-lg shrink-0 ${passed ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'}`}>
                {passed ? <CheckCircle2 className="w-5 h-5" /> : <AlertTriangle className="w-5 h-5" />}
              </div>
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <span>{passed ? '100% Truth Table Verification Passed' : `${totalTestsCount - passedTestsCount} Vector Mismatch(es) Detected`}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-mono font-bold ${
                    passed ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                  }`}>
                    {matchPercentage}% Match ({passedTestsCount}/{totalTestsCount} Vectors)
                  </span>
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  {passed
                    ? 'All output transitions precisely equal the golden reference specification across all evaluation cycles.'
                    : 'Discrepancies found between simulated outputs and golden reference targets. Review failing input vectors below.'}
                </p>
              </div>
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center gap-1 bg-[#121727] p-1 rounded-lg border border-[#1e2538] shrink-0">
              <button
                onClick={() => setMatchFilter('all')}
                className={`px-2.5 py-1 rounded text-xs font-semibold transition-all cursor-pointer ${
                  matchFilter === 'all' ? 'bg-[#38bdf8] text-[#080b12]' : 'text-slate-400 hover:text-white'
                }`}
              >
                All ({totalTestsCount})
              </button>
              <button
                onClick={() => setMatchFilter('passed')}
                className={`px-2.5 py-1 rounded text-xs font-semibold transition-all cursor-pointer ${
                  matchFilter === 'passed' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Passed ({passedTestsCount})
              </button>
              <button
                onClick={() => setMatchFilter('failed')}
                className={`px-2.5 py-1 rounded text-xs font-semibold transition-all cursor-pointer ${
                  matchFilter === 'failed' ? 'bg-rose-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Failed ({totalTestsCount - passedTestsCount})
              </button>
            </div>
          </div>

          {/* Test Vectors Truth Table */}
          <div className="rounded-xl border border-[#1c2236] overflow-hidden bg-[#0d111e] shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#121727] border-b border-[#1c2236] text-slate-400 text-[11px] font-mono">
                    <th className="py-2.5 px-3">Vector</th>
                    <th className="py-2.5 px-3">Time</th>
                    <th className="py-2.5 px-3">Inputs</th>
                    <th className="py-2.5 px-3">DUT Output</th>
                    <th className="py-2.5 px-3">Golden Target</th>
                    <th className="py-2.5 px-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1c2236] font-mono">
                  {testVectors
                    .filter(v => matchFilter === 'all' || (matchFilter === 'passed' ? v.passed : !v.passed))
                    .map((vec, idx) => (
                      <tr 
                        key={idx}
                        onClick={() => {
                          setCursorNs(vec.cycle * CYCLE_NS);
                          setViewMode('waveform');
                        }}
                        className="hover:bg-[#151c2e] cursor-pointer transition-colors"
                      >
                        <td className="py-2 px-3 text-slate-400">#{vec.cycle}</td>
                        <td className="py-2 px-3 text-slate-500">{vec.cycle * CYCLE_NS}ns</td>
                        <td className="py-2 px-3 text-slate-300">
                          {Object.entries(vec.inputs || {}).map(([k, v]) => `${k}=${v}`).join(', ') || '-'}
                        </td>
                        <td className="py-2 px-3 text-white font-bold">
                          {Object.entries(vec.actualOutputs || {}).map(([k, v]) => `${k}=${v}`).join(', ') || '-'}
                        </td>
                        <td className="py-2 px-3 text-amber-400 font-semibold">
                          {Object.entries(vec.expectedOutputs || {}).map(([k, v]) => `${k}=${v}`).join(', ') || '-'}
                        </td>
                        <td className="py-2 px-3">
                          {vec.passed ? (
                            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold text-[10px] border border-emerald-500/30">
                              PASS
                            </span>
                          ) : (
                            <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-400 font-bold text-[10px] border border-rose-500/30">
                              MISMATCH
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        /* =========================================================================
            ASCII TEXT TRACE VIEW
        ========================================================================= */
        <div className="flex-1 overflow-y-auto bg-[#0b0e17] p-4 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400">ASCII Digital Timing Diagram & Trace Table:</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  if (problem) {
                    const tableStr = generateAsciiTimingTable(problem, effectiveResult);
                    navigator.clipboard.writeText(tableStr);
                    setCopiedAscii(true);
                    setTimeout(() => setCopiedAscii(false), 2000);
                  }
                }}
                className="px-3 py-1 rounded bg-[#121727] hover:bg-[#1a2238] border border-[#1e2538] text-xs font-semibold text-slate-300 hover:text-white transition-all cursor-pointer"
              >
                {copiedAscii ? 'Copied!' : 'Copy ASCII Table'}
              </button>
              <button
                onClick={() => {
                  if (problem) {
                    const vcdStr = generateVcdText(problem, effectiveResult);
                    navigator.clipboard.writeText(vcdStr);
                    setCopiedVcd(true);
                    setTimeout(() => setCopiedVcd(false), 2000);
                  }
                }}
                className="px-3 py-1 rounded bg-[#121727] hover:bg-[#1a2238] border border-[#1e2538] text-xs font-semibold text-slate-300 hover:text-white transition-all cursor-pointer"
              >
                {copiedVcd ? 'Copied!' : 'Copy VCD Text'}
              </button>
            </div>
          </div>

          <pre className="p-4 rounded-xl bg-[#080b12] border border-[#1c2236] font-mono text-xs text-slate-300 overflow-x-auto leading-relaxed select-text">
            {problem ? generateAsciiTimingTable(problem, effectiveResult) : 'No problem loaded'}
          </pre>
        </div>
      )}

      {/* =========================================================================
          SPEC MODAL (POPUP WHEN CLICKING BOOK FLOATING ICON)
      ========================================================================= */}
      {showSpecModal && problem && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#0d111e] border border-[#26314d] rounded-2xl max-w-xl w-full p-6 space-y-4 shadow-2xl animate-in fade-in duration-200">
            <div className="flex items-center justify-between border-b border-[#1c2236] pb-3">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#38bdf8]" />
                <h3 className="font-bold text-white text-sm">{problem.title} Specification</h3>
              </div>
              <button 
                onClick={() => setShowSpecModal(false)}
                className="p-1 rounded hover:bg-[#1c2236] text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-slate-300 leading-relaxed max-h-96 overflow-y-auto pr-2">
              <p>{problem.description}</p>
              
              <div className="p-3 rounded-lg bg-[#121727] border border-[#1e2538] space-y-2">
                <div className="font-bold text-[#38bdf8] text-[11px] uppercase tracking-wider">
                  Interface Ports:
                </div>
                <div className="space-y-1 font-mono text-[11px]">
                  {groupedSignalItems.map(s => (
                    <div key={s.id} className="flex items-center justify-between">
                      <span className="text-white font-semibold">{s.displayName}</span>
                      <span className="text-slate-400 capitalize">{s.type}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-2 border-t border-[#1c2236]">
              <button
                onClick={() => setShowSpecModal(false)}
                className="px-4 py-1.5 rounded-lg bg-[#38bdf8] hover:bg-[#0284c7] text-[#080b12] font-bold text-xs cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          LIVE ENGINE STATUS MODAL (POPUP WHEN CLICKING RADIO ICON)
      ========================================================================= */}
      {showLiveStatusModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#0d111e] border border-[#26314d] rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl animate-in fade-in duration-200">
            <div className="flex items-center justify-between border-b border-[#1c2236] pb-3">
              <div className="flex items-center gap-2">
                <Radio className="w-5 h-5 text-emerald-400" />
                <h3 className="font-bold text-white text-sm">Simulation Engine Telemetry</h3>
              </div>
              <button 
                onClick={() => setShowLiveStatusModal(false)}
                className="p-1 rounded hover:bg-[#1c2236] text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2 text-xs font-mono text-slate-300">
              <div className="flex justify-between py-1 border-b border-[#161c2e]">
                <span className="text-slate-400">Circuit Domain:</span>
                <span className="text-[#38bdf8] font-bold">{isComb ? 'Combinational Logic' : 'Clocked Sequential Logic'}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#161c2e]">
                <span className="text-slate-400">Time Resolution:</span>
                <span className="text-emerald-400 font-bold">{CYCLE_NS}ns per vector (100MHz equivalent)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#161c2e]">
                <span className="text-slate-400">Total Simulation Window:</span>
                <span className="text-white font-bold">{totalTimeNs}ns ({cyclesCount} cycles)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#161c2e]">
                <span className="text-slate-400">Signals Monitored:</span>
                <span className="text-white font-bold">{groupedSignalItems.length} ports</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#161c2e]">
                <span className="text-slate-400">Cursor Position:</span>
                <span className="text-[#f43f5e] font-bold">T={cursorNs}ns</span>
              </div>
            </div>

            <div className="flex justify-end pt-2 border-t border-[#1c2236]">
              <button
                onClick={() => setShowLiveStatusModal(false)}
                className="px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
});

WaveformViewer.displayName = 'WaveformViewer';
