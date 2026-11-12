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
  { stroke: '#e5a93c', fill: 'rgba(229, 169, 60, 0.18)' },  // Yellow/Gold (Primary Theme Accent)
  { stroke: '#10b981', fill: 'rgba(16, 185, 129, 0.18)' },  // Emerald Green
  { stroke: '#f59e0b', fill: 'rgba(245, 158, 11, 0.18)' },  // Amber
  { stroke: '#38bdf8', fill: 'rgba(56, 189, 248, 0.18)' },  // Sky
  { stroke: '#c084fc', fill: 'rgba(192, 132, 252, 0.18)' }, // Purple
  { stroke: '#fb7185', fill: 'rgba(251, 113, 133, 0.18)' }, // Rose
  { stroke: '#2dd4bf', fill: 'rgba(45, 212, 191, 0.18)' },  // Teal
  { stroke: '#fde047', fill: 'rgba(253, 224, 71, 0.18)' },  // Bright Yellow
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
  const [radix, setRadix] = useState<RadixFormat>('bin');
  const [enableBusGrouping, setEnableBusGrouping] = useState<boolean>(true);
  const [expandedBuses, setExpandedBuses] = useState<Record<string, boolean>>({});
  const [selectedSignalId, setSelectedSignalId] = useState<string | null>(null);
  const [showSpecModal, setShowSpecModal] = useState<boolean>(false);
  const [showLiveStatusModal, setShowLiveStatusModal] = useState<boolean>(false);
  const [copiedAscii, setCopiedAscii] = useState<boolean>(false);
  const [copiedVcd, setCopiedVcd] = useState<boolean>(false);
  const [matchFilter, setMatchFilter] = useState<'all' | 'passed' | 'failed'>('all');

  // Zoom control: zoom level in percentage (50%, 75%, 100%, 125%, 150%, 200%)
  const [zoomPercent, setZoomPercent] = useState<number>(100);

  // Dual time cursors state (Cursor A in red, Cursor B in cyan/amber for delta measurement)
  const [activeCursor, setActiveCursor] = useState<'A' | 'B'>('A');
  const [cursorANs, setCursorANs] = useState<number>(10);
  const [cursorBNs, setCursorBNs] = useState<number>(30);
  const [isDraggingCursor, setIsDraggingCursor] = useState<boolean>(false);

  const toggleExpandBus = useCallback((busId: string) => {
    setExpandedBuses(prev => ({ ...prev, [busId]: !prev[busId] }));
  }, []);

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

  // Keep dual cursors clamped within valid range
  useEffect(() => {
    if (cursorANs > totalTimeNs) {
      setCursorANs(Math.min(10, totalTimeNs));
    }
    if (cursorBNs > totalTimeNs) {
      setCursorBNs(Math.min(totalTimeNs, 30));
    }
  }, [totalTimeNs, cursorANs, cursorBNs]);

  // Dynamically resolve active signal list from simulation samples or config with STRICT DEDUPLICATION
  const activeSignalConfigs = useMemo<SignalConfig[]>(() => {
    let rawKeys: string[] = [];

    // 1. Gather all observed signal keys
    if (samples && samples.length > 0 && samples[0]?.signals) {
      Object.keys(samples[0].signals).forEach(k => {
        if (!rawKeys.includes(k)) rawKeys.push(k);
      });
    }

    if (effectiveSignals && effectiveSignals.length > 0) {
      effectiveSignals.forEach(s => {
        if (!rawKeys.includes(s.name)) rawKeys.push(s.name);
      });
    }

    if (rawKeys.length === 0) {
      rawKeys = ['clk', 'in', 'out'];
    }

    // 2. Identify all multi-bit buses, e.g. "out[1:0]" or "din[3:0]"
    const busEntries = rawKeys.filter(k => /\[\d+:\d+\]/.test(k));
    const busBaseNames = new Set(busEntries.map(b => b.replace(/\[.*\]/, '').toLowerCase()));

    // 3. Strict Deduplication:
    // Drop unindexed aliases (e.g. drop bare "out" if "out[1:0]" exists, drop "in" if "in[3:0]" exists)
    // Drop single bit aliases if the bus already exists (e.g. drop "out[0]" if "out[1:0]" exists)
    const filteredKeys = rawKeys.filter(key => {
      const isBare = /^[a-zA-Z_]\w*$/.test(key);
      const isBitIndex = /^([a-zA-Z_]\w*)\[\d+\]$/.test(key);
      const base = key.replace(/\[.*\]/, '').toLowerCase();

      if (isBare && busBaseNames.has(base)) {
        return false; // Redundant unindexed alias!
      }
      if (isBitIndex && busBaseNames.has(base)) {
        return false; // Redundant individual bit already captured in bus!
      }
      return true;
    });

    // 4. Drop case-insensitive duplicate entries (e.g. keep "clk", drop "CLK")
    const seenLower = new Set<string>();
    const deduplicatedKeys = filteredKeys.filter(k => {
      const lk = k.toLowerCase();
      if (seenLower.has(lk)) return false;
      seenLower.add(lk);
      return true;
    });

    const existingMap = new Map((effectiveSignals || []).map(s => [s.name.toLowerCase(), s]));

    let resolved: SignalConfig[] = deduplicatedKeys.map(key => {
      const lower = key.toLowerCase();
      if (existingMap.has(lower)) {
        const existing = existingMap.get(lower)!;
        return { ...existing, name: key };
      }
      let type: 'clock' | 'input' | 'output' | 'internal' = 'input';
      if (lower.includes('clk') || lower.includes('clock') || lower.includes('sck') || lower.includes('scl')) type = 'clock';
      else if (lower.includes('out') || lower.includes('sum') || lower.includes('cout') || lower.includes('q') || lower.includes('y') || lower.includes('dout')) type = 'output';
      return {
        name: key,
        type,
        initialValue: samples?.[0]?.signals?.[key] || '0'
      };
    });

    // 5. Logical grouping order: Clocks -> Inputs -> Outputs -> Internal
    const typeOrder = { clock: 0, input: 1, output: 2, internal: 3 };
    resolved.sort((a, b) => {
      const orderA = typeOrder[a.type] ?? 4;
      const orderB = typeOrder[b.type] ?? 4;
      if (orderA !== orderB) return orderA - orderB;
      return a.name.localeCompare(b.name);
    });

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

  // Group signals into buses and assign colors with expandable member bits
  const groupedSignalItems = useMemo<SignalGroupItem[]>(() => {
    const sigList = activeSignalConfigs || [];
    const items: SignalGroupItem[] = [];

    sigList.forEach((sig, idx) => {
      if (!sig || !sig.name) return;
      const busRangeMatch = sig.name.match(/^([a-zA-Z_]\w*)\[(\d+):(\d+)\]$/);
      const isMultiBit = Boolean(busRangeMatch || (sig.initialValue && sig.initialValue.length > 1));

      const memberSignals: SignalConfig[] = [];
      if (busRangeMatch) {
        const baseName = busRangeMatch[1];
        const msb = parseInt(busRangeMatch[2], 10);
        const lsb = parseInt(busRangeMatch[3], 10);
        const step = msb >= lsb ? -1 : 1;
        for (let bit = msb; msb >= lsb ? bit >= lsb : bit <= lsb; bit += step) {
          memberSignals.push({
            name: `${baseName}[${bit}]`,
            type: sig.type,
            initialValue: '0'
          });
        }
      } else {
        memberSignals.push(sig);
      }

      items.push({
        id: sig.name,
        displayName: sig.name,
        type: sig.type,
        isBusGroup: isMultiBit,
        memberSignals,
        color: SIGNAL_PALETTE[idx % SIGNAL_PALETTE.length].stroke,
        fillColor: SIGNAL_PALETTE[idx % SIGNAL_PALETTE.length].fill
      });
    });

    return items;
  }, [activeSignalConfigs]);

  // Helper to extract bit width of a signal name (e.g. q[7:0] -> 8, data[3:0] -> 4, or scalar 1)
  const getSignalBitWidth = useCallback((signalName: string): number => {
    const busRangeMatch = signalName.match(/\[(\d+):(\d+)\]/);
    if (busRangeMatch) {
      return Math.abs(parseInt(busRangeMatch[1], 10) - parseInt(busRangeMatch[2], 10)) + 1;
    }
    const sigCfg = (activeSignalConfigs || []).find(s => s.name === signalName || s.name.replace(/\[.*\]/, '') === signalName);
    if (sigCfg?.initialValue && sigCfg.initialValue.length > 1) {
      return sigCfg.initialValue.length;
    }
    return 1;
  }, [activeSignalConfigs]);

  // Radix formatting helper (supporting 4-state 0, 1, X, Z logic with explicit binary conversion)
  const formatRadix = useCallback((rawVal: string, fmt: RadixFormat, bitWidth: number = 1): string => {
    if (!rawVal && rawVal !== '0') return bitWidth > 1 ? '0'.repeat(bitWidth) : '0';
    const strVal = String(rawVal).trim();
    if (/[xX]/.test(strVal)) return strVal.toUpperCase();
    if (/[zZ]/.test(strVal)) return strVal.toUpperCase();

    // Check if rawVal is a Verilog literal like 4'b1010, 8'hFF, 8'd42
    let cleanBin = '';
    const vMatch = strVal.match(/^(\d+)'([bBhHdD])([0-9a-fA-F_xXzZ]+)$/);
    if (vMatch) {
      const explicitWidth = parseInt(vMatch[1], 10) || bitWidth;
      const base = vMatch[2].toLowerCase();
      const numStr = vMatch[3].replace(/_/g, '');
      if (base === 'b') {
        cleanBin = numStr.padStart(explicitWidth, '0');
      } else if (base === 'h') {
        const n = parseInt(numStr, 16);
        cleanBin = !isNaN(n) ? n.toString(2).padStart(explicitWidth, '0') : numStr;
      } else if (base === 'd') {
        const n = parseInt(numStr, 10);
        cleanBin = !isNaN(n) ? n.toString(2).padStart(explicitWidth, '0') : numStr;
      }
    } else if (/^[01]+$/.test(strVal)) {
      cleanBin = strVal;
      if (bitWidth > 1 && cleanBin.length < bitWidth) {
        cleanBin = cleanBin.padStart(bitWidth, '0');
      }
    } else if (/^\d+$/.test(strVal)) {
      // Decimal integer string
      const n = parseInt(strVal, 10);
      cleanBin = n.toString(2);
      if (bitWidth > 1) {
        cleanBin = cleanBin.padStart(bitWidth, '0');
      }
    } else {
      cleanBin = strVal;
    }

    if (fmt === 'bin') {
      // Clean binary representation formatted to width
      if (bitWidth === 1 && cleanBin.length > 1) {
        return cleanBin.slice(-1);
      }
      return cleanBin;
    } else if (fmt === 'hex') {
      const n = parseInt(cleanBin, 2);
      if (isNaN(n)) return cleanBin;
      const hexWidth = Math.max(1, Math.ceil(cleanBin.length / 4));
      return n.toString(16).toUpperCase().padStart(hexWidth, '0');
    } else if (fmt === 'dec') {
      const n = parseInt(cleanBin, 2);
      if (isNaN(n)) return cleanBin;
      return `${n}`;
    }
    return cleanBin;
  }, []);

  // Primary active cursor in nanoseconds
  const primaryCursorNs = activeCursor === 'A' ? cursorANs : cursorBNs;

  // Compute active sample at primary cursor
  const activeCycleIndex = Math.min(
    Math.max(0, samples.length - 1),
    Math.floor(primaryCursorNs / CYCLE_NS)
  );
  const activeSampleAtCursor = samples[activeCycleIndex] || samples[0];

  // Helper to get signal's instantaneous value at a specified timestamp
  const getSignalValueAtNs = useCallback((signalName: string, nsTime: number): string => {
    if (!samples || samples.length === 0) return '0';
    const cycleIndex = Math.min(
      Math.max(0, samples.length - 1),
      Math.floor(nsTime / CYCLE_NS)
    );
    const sample = samples[cycleIndex] || samples[0];
    if (!sample) return '0';
    const raw = getSampleSignalVal(sample, signalName);
    const bitWidth = getSignalBitWidth(signalName);
    return formatRadix(raw, radix, bitWidth);
  }, [samples, getSampleSignalVal, formatRadix, radix, getSignalBitWidth]);

  // Helper to get signal value at the primary active cursor
  const getSignalValueAtCursor = useCallback((signalName: string): string => {
    return getSignalValueAtNs(signalName, activeCursor === 'A' ? cursorANs : cursorBNs);
  }, [getSignalValueAtNs, activeCursor, cursorANs, cursorBNs]);

  // Row heights and waveform coordinates matching authentic EDA layout
  const ROW_HEIGHT = 42;
  const Y_HIGH = 9;
  const Y_LOW = 33;
  const Y_MID = 21;

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
    const bitWidth = getSignalBitWidth(signalName);
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
          formattedValue: formatRadix(val, radix, bitWidth),
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
  }, [samples, getSampleSignalVal, STEP_WIDTH, formatRadix, radix, getSignalBitWidth]);

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

  // Handle click or drag on the waveform or timeline ruler to move active cursor (Cursor A or Cursor B)
  const updateCursorFromEvent = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const computedNs = Math.max(0, Math.min(totalTimeNs, Math.round(clickX / pixelsPerNs)));
    if (e.shiftKey || activeCursor === 'B') {
      setCursorBNs(computedNs);
    } else {
      setCursorANs(computedNs);
    }
  }, [totalTimeNs, pixelsPerNs, activeCursor]);

  const handlePointerDownTimeline = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDraggingCursor(true);
    updateCursorFromEvent(e);
  };

  const handlePointerMoveTimeline = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDraggingCursor) {
      updateCursorFromEvent(e);
    }
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

  const cursorAX = cursorANs * pixelsPerNs;
  const cursorBX = cursorBNs * pixelsPerNs;
  const deltaTNs = Math.abs(cursorBNs - cursorANs);
  const freqMHz = deltaTNs > 0 ? (1000 / deltaTNs).toFixed(1) : '---';

  return (
    <div className="h-full flex flex-col bg-[#0a0b0e] text-[#eff1f6] font-mono text-xs overflow-hidden select-none">
      
      {/* =========================================================================
          TOP TOOLBAR (BLACK & YELLOW THEME)
          WAVEFORM ... 3 signals | BIN | HEX | DEC | [-] 100% [+] [⊡] | T=38ns | 40ns
      ========================================================================= */}
      <div className="h-11 px-4 bg-[#111217] border-b border-[#22242f] flex items-center justify-between shrink-0 shadow-sm z-20">
        
        {/* Left Side: Title & Mode Switcher */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-[#e5a93c] font-black text-xs font-mono tracking-[0.2em] uppercase">
              WAVEFORM
            </span>
          </div>

          {/* Quick Tabs: Waveform | Schematic | Truth Table | Text Trace */}
          <div className="flex items-center gap-0.5 bg-[#14151b] p-0.5 rounded-lg border border-[#22242f] text-[11px]">
            <button
              onClick={() => setViewMode('waveform')}
              className={`h-6 px-2.5 rounded-md font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                viewMode === 'waveform'
                  ? 'bg-[#e5a93c] text-black font-black shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Activity className="w-3 h-3" />
              <span>Waveform</span>
            </button>

            <button
              onClick={() => setViewMode('schematic')}
              className={`h-6 px-2.5 rounded-md font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                viewMode === 'schematic'
                  ? 'bg-[#e5a93c] text-black font-black shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Cpu className="w-3 h-3" />
              <span>Schematic</span>
            </button>

            <button
              onClick={() => setViewMode('assertions')}
              className={`h-6 px-2.5 rounded-md font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                viewMode === 'assertions'
                  ? 'bg-[#e5a93c] text-black font-black shadow-sm'
                  : 'text-zinc-400 hover:text-white'
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
                  ? 'bg-[#e5a93c] text-black font-black shadow-sm'
                  : 'text-zinc-400 hover:text-white'
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
          <span className="text-zinc-400 text-[11px] font-medium hidden sm:inline">
            {groupedSignalItems.length} signals
          </span>

          {/* Radix Format Selector: BIN | HEX | DEC */}
          <div className="flex items-center gap-0.5 bg-[#14151b] p-0.5 rounded-md border border-[#22242f] text-[10px]">
            {(['bin', 'hex', 'dec'] as RadixFormat[]).map(fmt => (
              <button
                key={fmt}
                onClick={() => setRadix(fmt)}
                className={`px-1.5 py-0.5 rounded uppercase font-bold transition-all cursor-pointer ${
                  radix === fmt
                    ? 'bg-[#e5a93c] text-black font-black shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
                title={`Display multi-bit vectors in ${fmt.toUpperCase()}`}
              >
                {fmt}
              </button>
            ))}
          </div>

          <span className="text-zinc-600 hidden sm:inline">|</span>

          {/* Zoom Controls: [-] 100% [+] [⊡] */}
          {viewMode === 'waveform' && (
            <div className="flex items-center gap-1">
              <button
                onClick={handleZoomOut}
                className="w-6 h-6 rounded bg-[#14151b] hover:bg-[#181920] border border-[#22242f] text-zinc-300 hover:text-[#e5a93c] flex items-center justify-center transition-all cursor-pointer"
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

          <span className="text-zinc-600 hidden md:inline">|</span>

          {/* Dual Cursor Measurement Bar: Cursor A (Red), Cursor B (Cyan), Delta T (Amber) & Frequency */}
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-lg bg-[#14151b] border border-[#22242f] text-[11px] font-mono">
            <button
              onClick={() => setActiveCursor('A')}
              className={`px-1.5 py-0.5 rounded text-[10px] font-bold transition-all cursor-pointer ${
                activeCursor === 'A'
                  ? 'bg-[#ef4444] text-white shadow-sm ring-1 ring-[#ef4444]'
                  : 'text-[#ef4444] hover:bg-[#ef4444]/15'
              }`}
              title="Select Cursor A (Click timeline to reposition)"
            >
              A: {cursorANs}ns
            </button>
            <button
              onClick={() => setActiveCursor('B')}
              className={`px-1.5 py-0.5 rounded text-[10px] font-bold transition-all cursor-pointer ${
                activeCursor === 'B'
                  ? 'bg-[#38bdf8] text-black shadow-sm ring-1 ring-[#38bdf8]'
                  : 'text-[#38bdf8] hover:bg-[#38bdf8]/15'
              }`}
              title="Select Cursor B (Shift+Click or Click to reposition)"
            >
              B: {cursorBNs}ns
            </button>
            <span className="text-zinc-600">|</span>
            <span className="text-[#e5a93c] font-bold">
              ΔT={deltaTNs}ns
            </span>
            {deltaTNs > 0 && (
              <span className="text-zinc-400 hidden xl:inline text-[10px]">
                ({freqMHz} MHz)
              </span>
            )}
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
            <div className="flex items-center gap-1 bg-[#14151b] p-0.5 rounded-lg border border-[#22242f]">
              <button
                onClick={() => onToggleWindowMode(windowMode === 'full' ? 'split' : 'full')}
                className={`h-6 px-2 rounded text-[11px] font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  windowMode === 'full'
                    ? 'bg-[#e5a93c] text-black font-black shadow-sm'
                    : 'text-zinc-300 hover:text-white hover:bg-[#1a1b22]'
                }`}
                title={windowMode === 'full' ? 'Restore Split View' : 'Maximize Waveform Window (Full Canvas)'}
              >
                {windowMode === 'full' ? (
                  <>
                    <Minimize2 className="w-3 h-3 text-black" />
                    <span className="hidden sm:inline">Restore</span>
                  </>
                ) : (
                  <>
                    <Maximize2 className="w-3 h-3 text-[#e5a93c]" />
                    <span className="hidden sm:inline">Maximize</span>
                  </>
                )}
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
                <div className="flex items-center h-9 border-b border-[#22242f] bg-[#111217] sticky top-0 z-10 select-none">
                  
                  {/* Left Header Spacer */}
                  <div className="w-48 shrink-0 px-4 flex items-center justify-between border-r border-[#22242f] text-[10px] text-zinc-400 font-mono tracking-wider font-semibold">
                    <span>SIGNAL</span>
                    <span className="text-[#e5a93c]">VALUE (BIN)</span>
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
                            stroke={tick.isMajor ? '#e5a93c' : '#22242f'}
                            strokeWidth={1}
                          />
                          {tick.isMajor && (
                            <text
                              x={tick.x}
                              y={11}
                              fill="#e5a93c"
                              fontSize={10}
                              fontFamily="monospace"
                              textAnchor="middle"
                              fontWeight="600"
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

                    {/* Dual Cursor Badges on Timeline Ruler */}
                    {/* Cursor A Badge (Red) */}
                    <div 
                      style={{ left: `${cursorAX}px` }}
                      className="absolute -top-0.5 -translate-x-1/2 z-20 pointer-events-none transition-all duration-75"
                    >
                      <div className="bg-[#ef4444] text-white text-[10px] font-bold font-mono px-1.5 py-0.5 rounded shadow-lg flex items-center justify-center">
                        A: {cursorANs}ns
                      </div>
                    </div>

                    {/* Cursor B Badge (Cyan) */}
                    <div 
                      style={{ left: `${cursorBX}px` }}
                      className="absolute -top-0.5 -translate-x-1/2 z-20 pointer-events-none transition-all duration-75"
                    >
                      <div className="bg-[#38bdf8] text-black text-[10px] font-bold font-mono px-1.5 py-0.5 rounded shadow-lg flex items-center justify-center">
                        B: {cursorBNs}ns
                      </div>
                    </div>
                  </div>

                </div>

                {/* -------------------------------------------------------------
                    SIGNAL ROWS CONTAINER
                    Left column: expand button + signal name + tag + live value
                    Right column: digital waveform trace with shaded high fill
                ------------------------------------------------------------- */}
                <div className="flex-1 relative">
                  
                  {groupedSignalItems.map((group) => {
                    const signalValA = getSignalValueAtNs(group.displayName, cursorANs);
                    const signalValB = getSignalValueAtNs(group.displayName, cursorBNs);
                    const waveData = getSignalWaveformPath(group.displayName);
                    const isExpanded = Boolean(expandedBuses[group.id]);
                    const isSelected = selectedSignalId === group.id;

                    return (
                      <React.Fragment key={group.id}>
                        {/* Main Signal Row */}
                        <div 
                          onClick={() => setSelectedSignalId(isSelected ? null : group.id)}
                          className={`flex items-center h-11 border-b border-[#22242f] transition-colors relative group cursor-pointer ${
                            isSelected ? 'bg-[#181922] border-l-2 border-l-[#e5a93c]' : 'hover:bg-[#14151b]'
                          }`}
                        >
                          {/* Left Signal Column: Name + Live Value + Color Dot */}
                          <div className="w-48 shrink-0 h-full px-3 flex items-center justify-between border-r border-[#22242f] bg-[#0a0b0e] group-hover:bg-[#121319] transition-colors z-10">
                            
                            {/* Expand Chevron + Signal Name + Pill Badge */}
                            <div className="flex items-center gap-1.5 min-w-0">
                              {group.isBusGroup ? (
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleExpandBus(group.id);
                                  }}
                                  className="p-0.5 rounded hover:bg-[#22242f] text-zinc-400 hover:text-[#e5a93c] transition-colors cursor-pointer shrink-0"
                                  title={isExpanded ? 'Collapse bus' : 'Expand bus bits'}
                                >
                                  <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-150 ${isExpanded ? 'rotate-90 text-[#e5a93c]' : ''}`} />
                                </button>
                              ) : (
                                <span className="w-4 shrink-0" />
                              )}

                              <span className="font-mono text-xs text-zinc-200 font-medium truncate" title={group.displayName}>
                                {group.displayName}
                              </span>

                              {/* Authentic Clean EDA Port Pill Tag */}
                              {group.type === 'output' ? (
                                <span className="text-[9px] font-mono px-1 py-0.2 rounded bg-amber-500/15 text-[#e5a93c] border border-[#e5a93c]/30 font-bold uppercase shrink-0">
                                  OUT
                                </span>
                              ) : group.type === 'clock' ? (
                                <span className="text-[9px] font-mono px-1 py-0.2 rounded bg-sky-500/15 text-sky-400 border border-sky-500/30 font-bold uppercase shrink-0">
                                  CLK
                                </span>
                              ) : (
                                <span className="text-[9px] font-mono px-1 py-0.2 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-bold uppercase shrink-0">
                                  IN
                                </span>
                              )}
                            </div>

                            {/* Dual Cursor Signal Values + Color Dot */}
                            <div className="flex items-center gap-1.5 shrink-0 pl-1 font-mono text-xs">
                              <span 
                                style={{ color: group.color }}
                                className="font-bold"
                                title={`Value at Cursor A (${cursorANs}ns)`}
                              >
                                {signalValA}
                              </span>
                              <span className="text-zinc-600 text-[10px]">|</span>
                              <span 
                                className="text-sky-400 font-semibold text-[11px]"
                                title={`Value at Cursor B (${cursorBNs}ns)`}
                              >
                                {signalValB}
                              </span>
                              <span 
                                style={{ backgroundColor: group.color }}
                                className="w-2 h-2 rounded-full inline-block shadow-sm ml-0.5 shrink-0"
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
                                  stroke="#181920"
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

                        {/* Expanded Individual Bit Sub-Rows */}
                        {group.isBusGroup && isExpanded && group.memberSignals.map((subSig) => {
                          const subValA = getSignalValueAtNs(subSig.name, cursorANs);
                          const subValB = getSignalValueAtNs(subSig.name, cursorBNs);
                          const subWave = getSignalWaveformPath(subSig.name);

                          return (
                            <div 
                              key={subSig.name}
                              className="flex items-center h-8 border-b border-[#1c1d26] bg-[#07080b] hover:bg-[#121319] transition-colors relative"
                            >
                              <div className="w-48 shrink-0 h-full pl-7 pr-3 flex items-center justify-between border-r border-[#22242f]">
                                <span className="font-mono text-[11px] text-zinc-400 font-medium truncate">
                                  ↳ {subSig.name}
                                </span>
                                <div className="flex items-center gap-1 font-mono text-[11px]">
                                  <span style={{ color: group.color }} className="font-bold">
                                    {subValA}
                                  </span>
                                  <span className="text-zinc-600 text-[9px]">|</span>
                                  <span className="text-sky-400 text-[10px]">
                                    {subValB}
                                  </span>
                                </div>
                              </div>

                              <div 
                                className="flex-1 h-full relative cursor-crosshair"
                                onMouseDown={handlePointerDownTimeline}
                                onMouseMove={isDraggingCursor ? handlePointerMoveTimeline : undefined}
                                onMouseUp={handlePointerUpTimeline}
                              >
                                <svg width={totalWaveformWidth} height={32} className="block overflow-visible">
                                  {timelineTicks.map(tick => (
                                    <line
                                      key={tick.ns}
                                      x1={tick.x}
                                      y1={0}
                                      x2={tick.x}
                                      y2={32}
                                      stroke="#14151b"
                                      strokeDasharray="2,3"
                                      strokeWidth={1}
                                    />
                                  ))}
                                  {subWave.fillPath && (
                                    <path d={subWave.fillPath} fill={group.fillColor} />
                                  )}
                                  <path
                                    d={subWave.path}
                                    fill="none"
                                    stroke={group.color}
                                    strokeWidth={1.5}
                                    strokeLinecap="square"
                                  />
                                </svg>
                              </div>
                            </div>
                          );
                        })}
                      </React.Fragment>
                    );
                  })}

                  {/* -------------------------------------------------------------
                      TRANSLUCENT DELTA MEASUREMENT REGION
                      Between Cursor A and Cursor B
                  ------------------------------------------------------------- */}
                  <div 
                    style={{ 
                      left: `${Math.min(cursorAX, cursorBX) + 192}px`,
                      width: `${Math.abs(cursorBX - cursorAX)}px`,
                      top: 0,
                      bottom: 0
                    }}
                    className="absolute pointer-events-none z-10 bg-[#e5a93c]/5 border-x border-[#e5a93c]/20"
                  />

                  {/* -------------------------------------------------------------
                      VERTICAL CURSOR A LINE (RED)
                  ------------------------------------------------------------- */}
                  <div 
                    style={{ 
                      left: `${cursorAX + 192}px`,
                      top: 0,
                      bottom: 0
                    }}
                    className="absolute w-px pointer-events-none z-20 transition-all duration-75"
                  >
                    <div className="w-full h-full border-l border-dashed border-[#ef4444] opacity-90" />
                  </div>

                  {/* -------------------------------------------------------------
                      VERTICAL CURSOR B LINE (CYAN)
                  ------------------------------------------------------------- */}
                  <div 
                    style={{ 
                      left: `${cursorBX + 192}px`,
                      top: 0,
                      bottom: 0
                    }}
                    className="absolute w-px pointer-events-none z-20 transition-all duration-75"
                  >
                    <div className="w-full h-full border-l border-dashed border-[#38bdf8] opacity-90" />
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
            onSelectCycle={(cycle) => setCursorANs(cycle * CYCLE_NS)}
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
                          setCursorANs(vec.cycle * CYCLE_NS);
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
                <span className="text-slate-400">Cursor Positions:</span>
                <span className="text-[#f43f5e] font-bold">A={cursorANs}ns, B={cursorBNs}ns (ΔT={deltaTNs}ns)</span>
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
