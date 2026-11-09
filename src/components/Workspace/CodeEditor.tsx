import React, { useState, useRef, useEffect, useMemo } from 'react';
import { 
  RotateCcw, CheckCircle2, Download, FileCode, TestTube,
  Cpu, Terminal, AlertTriangle, Info, Sparkles, BookOpen, Code2, 
  ChevronRight, ChevronDown, CornerDownLeft, X, Layers, Lightbulb, MoreVertical, Maximize2, Minimize2,
  Wand2, Check, Activity, Save
} from 'lucide-react';
import { Problem, Topic } from '../../types';
import { getExtensionForTopic, sanitizeFilename } from '../../utils/exportUtils';
import { lintVerilogCode } from '../../utils/vlsiLinter';
import { TOPIC_SYNTAX_GUIDES, getSyntaxSuggestions, SyntaxSnippet } from '../../utils/syntaxAssist';
import { isCombinationalCircuit, isVlsiHdlTopic, isHdlTopic } from '../../utils/circuitClassification';
import { formatCodeByLanguage, cleanSnippetForInsertion } from '../../utils/codeFormatter';
import { getCleanTestbenchCode } from '../../utils/codeTemplateService';
import { ModelingStyle } from '../../utils/modelingStylesService';
import { storageService } from '../../services/storageService';

interface CodeEditorProps {
  code: string;
  onChange: (newCode: string) => void;
  onReset: () => void;
  onRunSimulation: () => void;
  onSubmitSolution?: () => void;
  onGenerateCode?: () => void;
  onDownloadCode?: () => void;
  onSaveCode?: () => void;
  isSaved?: boolean;
  topic: string;
  isSimulating: boolean;
  problem?: Problem;
  isSolved?: boolean;
  savedAnswerCode?: string;
  onRestoreSavedAnswer?: () => void;
  hasStartedCoding?: boolean;
  onStartCoding?: () => void;
  onStartBlank?: () => void;
  panelLayout?: 'default' | 'code-expanded' | 'vis-expanded';
  onTogglePanelLayout?: (layout: 'default' | 'code-expanded' | 'vis-expanded') => void;
  activeEditorTab?: 'dut' | 'tb' | 'combined';
  onSelectEditorTab?: (tab: 'dut' | 'tb' | 'combined') => void;
  isOutputOpen?: boolean;
  onToggleOutput?: () => void;
  errorLine?: number;
  activeModelingStyle?: ModelingStyle;
  onSelectModelingStyle?: (style: ModelingStyle) => void;
  onLoadModelingTemplate?: (style: ModelingStyle) => void;
  onLoadModelingSolution?: (style: ModelingStyle) => void;
}

export const CodeEditor: React.FC<CodeEditorProps> = React.memo(({
  code,
  onChange,
  onReset,
  onRunSimulation,
  onSubmitSolution,
  onGenerateCode,
  onDownloadCode,
  onSaveCode,
  isSaved = false,
  topic,
  isSimulating,
  problem,
  isSolved = false,
  savedAnswerCode,
  onRestoreSavedAnswer,
  hasStartedCoding = true,
  onStartCoding,
  onStartBlank,
  panelLayout = 'default',
  onTogglePanelLayout,
  activeEditorTab,
  onSelectEditorTab,
  isOutputOpen = false,
  onToggleOutput,
  errorLine,
  activeModelingStyle = 'dataflow',
  onSelectModelingStyle,
  onLoadModelingTemplate,
  onLoadModelingSolution
}) => {
  const [internalActiveTab, setInternalActiveTab] = useState<'dut' | 'tb'>('dut');
  const [customTbCode, setCustomTbCode] = useState<string | null>(null);
  const [showLintDrawer, setShowLintDrawer] = useState<boolean>(false);
  const [showSyntaxGuide, setShowSyntaxGuide] = useState<boolean>(false);
  const [showMoreMenu, setShowMoreMenu] = useState<boolean>(false);
  const [showQuickSnippets, setShowQuickSnippets] = useState<boolean>(false);
  const [showFormatSuccess, setShowFormatSuccess] = useState<boolean>(false);
  const [manualSaveSuccess, setManualSaveSuccess] = useState<boolean>(false);

  // Sync external tab if provided
  const activeTab = activeEditorTab === 'tb' ? 'tb' : (activeEditorTab === 'dut' ? 'dut' : internalActiveTab);
  const setActiveTab = (tab: 'dut' | 'tb') => {
    setInternalActiveTab(tab);
    onSelectEditorTab?.(tab);
  };

  // Live typing syntax autocomplete state
  const [activeQuery, setActiveQuery] = useState<string>('');
  const [cursorPos, setCursorPos] = useState<number>(0);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState<number>(0);
  const [lastInsertedSyntax, setLastInsertedSyntax] = useState<string | null>(null);

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const lineNumbersRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (e: React.UIEvent<HTMLTextAreaElement>) => {
    if (lineNumbersRef.current) {
      lineNumbersRef.current.scrollTop = e.currentTarget.scrollTop;
    }
  };

  const cursorPosInfo = React.useMemo(() => {
    const textBefore = code.slice(0, cursorPos);
    const lines = textBefore.split('\n');
    return {
      line: lines.length,
      col: (lines[lines.length - 1] || '').length + 1
    };
  }, [code, cursorPos]);

  const activeTopic = (problem?.topic || topic || 'verilog') as Topic;
  const isVlsi = isVlsiHdlTopic(activeTopic);
  const isHdl = isHdlTopic(activeTopic);
  const syntaxGuide = TOPIC_SYNTAX_GUIDES[activeTopic] || TOPIC_SYNTAX_GUIDES.verilog;

  const isLinux = topic === 'linux';
  const isComb = isCombinationalCircuit(problem);
  const ext = problem ? getExtensionForTopic(problem.topic) : 'v';
  const cleanName = problem ? sanitizeFilename(problem.title) : 'design';

  const sourceFileName = isLinux ? 'script.sh' : `${cleanName}.${ext}`;
  const dutFileName = `${cleanName}.${ext}`;
  const tbFileName = `tb_${cleanName}.${ext}`;

  // Clean testbench template (strictly no code inside it)
  const cleanTbCode = useMemo(() => {
    if (!problem || !isVlsi) return '';
    return getCleanTestbenchCode(problem);
  }, [problem, isVlsi]);

  const currentTbCode = customTbCode !== null ? customTbCode : cleanTbCode;

  // Auto-Format logic
  const handleAutoFormat = () => {
    const formatted = formatCodeByLanguage(code, activeTopic);
    onChange(formatted);
    setShowFormatSuccess(true);
    setTimeout(() => setShowFormatSuccess(false), 2200);
  };

  const getSourceIcon = (t: Topic) => {
    switch (t) {
      case 'linux':
        return <Terminal className="w-3.5 h-3.5 text-emerald-400" />;
      case 'python_hw':
      case 'cv_robotics':
        return <Code2 className="w-3.5 h-3.5 text-amber-400" />;
      case 'arduino':
      case 'embedded_c':
      case 'rtos_problems':
        return <Cpu className="w-3.5 h-3.5 text-cyan-400" />;
      case 'mnemonics':
        return <Layers className="w-3.5 h-3.5 text-purple-400" />;
      default:
        return <FileCode className="w-3.5 h-3.5 text-blue-400" />;
    }
  };

  const getSourceBadgeLabel = (t: Topic) => {
    switch (t) {
      case 'python_hw':
        return 'PYTHON 3';
      case 'cv_robotics':
        return 'OPENCV';
      case 'arduino':
        return 'ARDUINO';
      case 'embedded_c':
        return 'EMBEDDED C';
      case 'rtos_problems':
        return 'FREERTOS';
      case 'mnemonics':
        return '8051 ASM';
      case 'linux':
        return 'BASH';
      case 'soc_design':
        return 'SOC';
      default:
        return 'SOURCE';
    }
  };

  // Performance-optimized lazy Lint Warnings (only computed when drawer is opened)
  const lintWarnings = useMemo(() => {
    if (!isVlsi || !showLintDrawer) return [];
    return lintVerilogCode(code, topic);
  }, [code, topic, isVlsi, showLintDrawer]);

  // Line numbers calculation
  const dutLineNumbers = useMemo(() => code.split('\n').map((_, index) => index + 1), [code]);
  const tbLineNumbers = useMemo(() => currentTbCode.split('\n').map((_, index) => index + 1), [currentTbCode]);

  // Filter syntax suggestions live as the student types
  const suggestions = useMemo(() => getSyntaxSuggestions(activeQuery, activeTopic), [activeQuery, activeTopic]);

  // Detect word typed right before the cursor in the active textarea
  const handleCodeTyping = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    const pos = e.target.selectionStart;
    setCursorPos(pos);

    // Smart auto-unindent on typing closing keywords (e.g. end, endmodule, endcase, }, fi, done)
    const currentLineStart = newText.lastIndexOf('\n', pos - 1) + 1;
    const currentLine = newText.slice(currentLineStart, pos);
    const indentMatch = currentLine.match(/^(\s+)(end|endmodule|endcase|endfunction|endtask|endgenerate|endpackage|endinterface|\}|fi|done|esac)$/i);
    
    if (indentMatch) {
      const leadingSpaces = indentMatch[1];
      const keyword = indentMatch[2].toLowerCase();
      if (leadingSpaces.length >= 2) {
        const newLeading = keyword === 'endmodule' ? '' : leadingSpaces.slice(2);
        const diff = leadingSpaces.length - newLeading.length;
        const adjustedText = newText.slice(0, currentLineStart) + newLeading + indentMatch[2] + newText.slice(pos);
        onChange(adjustedText);
        setCursorPos(pos - diff);
        setTimeout(() => {
          if (textareaRef.current) {
            textareaRef.current.setSelectionRange(pos - diff, pos - diff);
          }
        }, 0);
        setShowSuggestions(false);
        setActiveQuery('');
        return;
      }
    }

    onChange(newText);

    // Extract word preceding cursor
    const textBeforeCursor = newText.slice(0, pos);
    const match = textBeforeCursor.match(/([a-zA-Z0-9_`#]+)$/);
    if (match && match[1].length >= 1) {
      setActiveQuery(match[1]);
      setShowSuggestions(true);
      setSelectedSuggestionIndex(0);
    } else {
      setShowSuggestions(false);
      setActiveQuery('');
    }
  };

  const insertSyntaxSnippet = (snippetText: string) => {
    const textarea = textareaRef.current;
    const cleanSnippet = cleanSnippetForInsertion(snippetText, activeTopic, problem?.title);

    if (!textarea) {
      onChange(code + '\n' + cleanSnippet);
      return;
    }

    const pos = textarea.selectionStart || code.length;
    const textBeforeCursor = code.slice(0, pos);
    const textAfterCursor = code.slice(pos);

    let newText = '';
    let targetPos = pos;
    const match = textBeforeCursor.match(/([a-zA-Z0-9_`#]+)$/);

    if (match && showSuggestions) {
      const prefixLength = match[1].length;
      const baseBefore = textBeforeCursor.slice(0, textBeforeCursor.length - prefixLength);
      newText = baseBefore + cleanSnippet + textAfterCursor;
      targetPos = baseBefore.length + cleanSnippet.length;
    } else {
      newText = textBeforeCursor + cleanSnippet + textAfterCursor;
      targetPos = pos + cleanSnippet.length;
    }

    onChange(newText);
    setShowSuggestions(false);
    setActiveQuery('');
    setLastInsertedSyntax(cleanSnippet.slice(0, 30));
    setTimeout(() => setLastInsertedSyntax(null), 3000);

    setTimeout(() => {
      if (textareaRef.current) {
        textareaRef.current.focus();
        textareaRef.current.setSelectionRange(targetPos, targetPos);
      }
    }, 50);
  };

  // Keyboard navigation for suggestions & syntax auto-alignment
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // 0. Quick Format Shortcut: Alt+Shift+F or Ctrl+Shift+F or Cmd+Shift+F
    if ((e.altKey || e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'F' || e.key === 'f')) {
      e.preventDefault();
      handleAutoFormat();
      return;
    }

    // Run / Submit Shortcut: Ctrl+Enter (Run) or Ctrl+Shift+Enter (Submit)
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      if (!hasStartedCoding) onStartCoding?.();
      if (e.shiftKey && onSubmitSolution) {
        onSubmitSolution();
      } else {
        onRunSimulation();
      }
      return;
    }

    // 1. Suggestion popup keys
    if (showSuggestions && suggestions.length > 0) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedSuggestionIndex(prev => (prev + 1) % suggestions.length);
        return;
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedSuggestionIndex(prev => (prev - 1 + suggestions.length) % suggestions.length);
        return;
      }
      // Both Tab and Enter accept the selected autocomplete snippet
      if (e.key === 'Tab' || e.key === 'Enter') {
        e.preventDefault();
        const selected = suggestions[selectedSuggestionIndex] || suggestions[0];
        if (selected) {
          insertSyntaxSnippet(selected.insertText);
        }
        return;
      }
      if (e.key === 'Escape') {
        setShowSuggestions(false);
        return;
      }
    }

    const textarea = textareaRef.current;
    if (!textarea) return;
    const { selectionStart: start, selectionEnd: end, value } = textarea;

    // Fast Run / Submit hotkeys: Ctrl+Enter or Cmd+Enter
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      if (e.shiftKey) {
        onSubmitSolution?.();
      } else {
        onRunSimulation();
      }
      return;
    }

    // 2. Tab & Shift+Tab indentation alignment
    if (e.key === 'Tab') {
      e.preventDefault();
      if (e.shiftKey) {
        // Unindent current line or selected block
        const beforeSelection = value.slice(0, start);
        const lineStartIndex = beforeSelection.lastIndexOf('\n') + 1;
        const selectedText = value.slice(lineStartIndex, end);
        const unindented = selectedText.replace(/^(  |\t| )/gm, '');
        const diff = selectedText.length - unindented.length;
        const newCode = value.slice(0, lineStartIndex) + unindented + value.slice(end);
        onChange(newCode);
        setTimeout(() => {
          if (textareaRef.current) {
            textareaRef.current.setSelectionRange(Math.max(lineStartIndex, start - 2), Math.max(lineStartIndex, end - diff));
          }
        }, 0);
      } else {
        if (start !== end) {
          // Multi-line selection indent
          const beforeSelection = value.slice(0, start);
          const lineStartIndex = beforeSelection.lastIndexOf('\n') + 1;
          const selectedText = value.slice(lineStartIndex, end);
          const indented = selectedText.replace(/^/gm, '  ');
          const diff = indented.length - selectedText.length;
          const newCode = value.slice(0, lineStartIndex) + indented + value.slice(end);
          onChange(newCode);
          setTimeout(() => {
            if (textareaRef.current) {
              textareaRef.current.setSelectionRange(start + 2, end + diff);
            }
          }, 0);
        } else {
          // Single cursor insert 2 spaces
          const newCode = value.slice(0, start) + '  ' + value.slice(end);
          onChange(newCode);
          setTimeout(() => {
            if (textareaRef.current) {
              textareaRef.current.setSelectionRange(start + 2, start + 2);
            }
          }, 0);
        }
      }
      return;
    }

    // 3. Enter key: Auto-alignment & block indentation
    if (e.key === 'Enter') {
      e.preventDefault();
      const beforeCursor = value.slice(0, start);
      const afterCursor = value.slice(end);
      const lastLine = beforeCursor.split('\n').pop() || '';
      
      // Determine leading spaces of current line
      const indentMatch = lastLine.match(/^(\s*)/);
      let indent = indentMatch ? indentMatch[1] : '';

      // Check if line ends with block opening token
      const trimmed = lastLine.trim();
      const isBlockOpen = 
        trimmed.endsWith('{') || 
        trimmed.endsWith(':') || 
        trimmed.endsWith('(') || 
        trimmed.endsWith('[') || 
        /\bbegin\b$/.test(trimmed) ||
        /\bcase\b/.test(trimmed) ||
        /\bfork\b$/.test(trimmed) ||
        /\bthen\b$/.test(trimmed) ||
        /\bis\b$/.test(trimmed);

      // Check if cursor is directly between opening and closing braces: {|} or (|) or [|]
      const charBefore = value[start - 1];
      const charAfter = value[end];
      const isBetweenPair = 
        (charBefore === '{' && charAfter === '}') ||
        (charBefore === '(' && charAfter === ')') ||
        (charBefore === '[' && charAfter === ']');

      if (isBetweenPair) {
        const extraIndent = indent + '  ';
        const newCode = beforeCursor + '\n' + extraIndent + '\n' + indent + afterCursor;
        const targetPos = start + 1 + extraIndent.length;
        onChange(newCode);
        setTimeout(() => {
          if (textareaRef.current) {
            textareaRef.current.setSelectionRange(targetPos, targetPos);
          }
        }, 0);
        return;
      }

      if (isBlockOpen) {
        indent += '  ';
      }

      const newCode = beforeCursor + '\n' + indent + afterCursor;
      const targetPos = start + 1 + indent.length;
      onChange(newCode);
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.setSelectionRange(targetPos, targetPos);
        }
      }, 0);
      return;
    }

    // 4. Auto-closing pairs: (), [], {}, "", ''
    // In Verilog/SystemVerilog, ' is used for bit literals (1'b0, 8'hFF, '0), NOT quotes!
    const isHdl = isVlsi || topic === 'vhdl';
    const pairs: Record<string, string> = {
      '(': ')',
      '[': ']',
      '{': '}',
      '"': '"',
      ...(isHdl ? {} : { "'": "'" })
    };

    if (pairs[e.key] && start === end) {
      const closing = pairs[e.key];
      if ((e.key === '"' || e.key === "'") && value[start] === e.key) {
        e.preventDefault();
        textarea.setSelectionRange(start + 1, start + 1);
        return;
      }
      e.preventDefault();
      const newCode = value.slice(0, start) + e.key + closing + value.slice(end);
      onChange(newCode);
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.setSelectionRange(start + 1, start + 1);
        }
      }, 0);
      return;
    }

    // 5. Skip over closing bracket if typed
    if ((e.key === ')' || e.key === ']' || e.key === '}') && value[start] === e.key && start === end) {
      e.preventDefault();
      textarea.setSelectionRange(start + 1, start + 1);
      return;
    }

    // 6. Backspace between empty pair deletes both
    if (e.key === 'Backspace' && start === end && start > 0) {
      const charBefore = value[start - 1];
      const charAfter = value[start];
      if (
        (charBefore === '(' && charAfter === ')') ||
        (charBefore === '[' && charAfter === ']') ||
        (charBefore === '{' && charAfter === '}') ||
        (charBefore === '"' && charAfter === '"') ||
        (charBefore === "'" && charAfter === "'")
      ) {
        e.preventDefault();
        const newCode = value.slice(0, start - 1) + value.slice(start + 1);
        onChange(newCode);
        setTimeout(() => {
          if (textareaRef.current) {
            textareaRef.current.setSelectionRange(start - 1, start - 1);
          }
        }, 0);
        return;
      }
    }
  };

  return (
    <div className="h-full flex flex-col bg-[#111215] text-[#f1f3f7] font-mono text-xs overflow-hidden selection:bg-[#e5a93c] selection:text-[#111215]">
      
      {/* Top File Tabs & EDA Controls Bar */}
      <div className="h-10 px-2 sm:px-3 bg-[#16171d] border-b border-[#262833] flex items-center justify-between gap-1.5 shrink-0 select-none">
        
        {/* Left Side: HDL / Source File Tabs & Modeling Styles */}
        <div className="flex items-center gap-1.5 min-w-0 shrink overflow-x-auto no-scrollbar">
          {!isVlsi ? (
            /* Dedicated Single Source Tab for Non-VLSI Programming */
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#191a21] text-[#f1f3f7] rounded-md border border-[#2b2d39] font-medium text-xs shadow-sm shrink-0">
              {getSourceIcon(activeTopic)}
              <span className="font-semibold text-white truncate max-w-[140px] sm:max-w-xs">{sourceFileName}</span>
              <span className="text-[10px] text-[#e5a93c] font-mono hidden sm:inline uppercase">
                {getSourceBadgeLabel(activeTopic)}
              </span>
            </div>
          ) : (
            /* Hardware Description Languages: Design RTL and Testbench Tabs */
            <div className="flex items-center gap-1 bg-[#191a21] p-0.5 rounded-lg border border-[#2b2d39] shrink-0">
              {/* Design RTL Tab */}
              <button
                onClick={() => setActiveTab('dut')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs transition-all select-none whitespace-nowrap cursor-pointer active:scale-95 shrink-0 ${
                  activeTab === 'dut'
                    ? 'bg-[#e5a93c] text-[#111215] font-bold shadow-sm'
                    : 'text-[#9da3b4] hover:text-white'
                }`}
                title={`Design Under Test: ${dutFileName}`}
              >
                <FileCode className="w-3.5 h-3.5 text-[#111215] shrink-0" />
                <span>Design RTL</span>
              </button>

              {/* Testbench Tab */}
              <button
                onClick={() => setActiveTab('tb')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs transition-all select-none whitespace-nowrap cursor-pointer active:scale-95 shrink-0 ${
                  activeTab === 'tb'
                    ? 'bg-purple-600 text-white font-bold shadow-sm'
                    : 'text-[#9da3b4] hover:text-white'
                }`}
                title={`Testbench Stimulus & Verification: ${tbFileName}`}
              >
                <TestTube className="w-3.5 h-3.5 text-purple-200 shrink-0" />
                <span>Testbench</span>
              </button>
            </div>
          )}

          {isVlsi && (
            <span className="text-[11px] text-slate-500 font-mono hidden 2xl:inline truncate max-w-[130px] whitespace-nowrap shrink-0" title={activeTab === 'tb' ? tbFileName : dutFileName}>
              {activeTab === 'tb' ? tbFileName : dutFileName}
            </span>
          )}

          {/* 3 Modeling Styles Coding Sections Switcher - STRICTLY ONLY IN HDLs (Verilog, SystemVerilog, VHDL) */}
          {isHdl && activeTab === 'dut' && (
            <div className="flex items-center gap-1 shrink-0">
              <div className="flex items-center gap-0.5 bg-[#14151b] p-0.5 rounded-md border border-[#2b2d39] shrink-0">
                <span className="text-[10px] text-[#8c91a0] font-bold px-1 hidden 2xl:inline select-none">
                  Modeling:
                </span>
                <button
                  type="button"
                  onClick={() => onSelectModelingStyle?.('structural')}
                  className={`px-1.5 sm:px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-semibold transition-all select-none cursor-pointer whitespace-nowrap ${
                    activeModelingStyle === 'structural'
                      ? 'bg-[#e5a93c] text-[#111215] font-bold shadow-sm'
                      : 'text-[#9da3b4] hover:text-white'
                  }`}
                  title="Structural Modeling (Gate Primitives, Netlists, Module Instantiations)"
                >
                  <span className="hidden xl:inline">Structural</span>
                  <span className="xl:hidden">Struct</span>
                </button>
                <button
                  type="button"
                  onClick={() => onSelectModelingStyle?.('dataflow')}
                  className={`px-1.5 sm:px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-semibold transition-all select-none cursor-pointer whitespace-nowrap ${
                    activeModelingStyle === 'dataflow'
                      ? 'bg-[#e5a93c] text-[#111215] font-bold shadow-sm'
                      : 'text-[#9da3b4] hover:text-white'
                  }`}
                  title="Dataflow Modeling (Continuous Assignment & Boolean Expressions)"
                >
                  <span>Dataflow</span>
                </button>
                <button
                  type="button"
                  onClick={() => onSelectModelingStyle?.('behavioral')}
                  className={`px-1.5 sm:px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-semibold transition-all select-none cursor-pointer whitespace-nowrap ${
                    activeModelingStyle === 'behavioral'
                      ? 'bg-[#e5a93c] text-[#111215] font-bold shadow-sm'
                      : 'text-[#9da3b4] hover:text-white'
                  }`}
                  title="Behavioral Modeling (Procedural always Blocks & Algorithmic Control)"
                >
                  <span className="hidden xl:inline">Behavioral</span>
                  <span className="xl:hidden">Behav</span>
                </button>
              </div>

              {/* Load Template Quick Action */}
              <button
                type="button"
                onClick={() => onLoadModelingTemplate?.(activeModelingStyle || 'dataflow')}
                className="h-6 px-1.5 rounded bg-[#191a21] hover:bg-[#20222b] text-slate-300 hover:text-white border border-[#2b2d39] text-[10px] font-medium flex items-center gap-1 transition-all select-none cursor-pointer shrink-0"
                title={`Load starter template for ${activeModelingStyle || 'dataflow'} modeling`}
              >
                <FileCode className="w-3 h-3 text-[#e5a93c]" />
                <span className="hidden 2xl:inline">Template</span>
              </button>
            </div>
          )}
        </div>

        {/* Right Side: Editor Helper Tools & Formatting - PERMANENTLY ANCHORED & NEVER HIDDEN */}
        <div className="flex items-center gap-1 sm:gap-1.5 shrink-0 ml-auto z-10">
          {/* Unified Save Code Button */}
          <button
            onClick={() => {
              if (problem?.id && code) {
                storageService.saveProblemCode(problem.id, code, true);
                if (isHdl && activeModelingStyle) {
                  storageService.saveModelingCode(problem.id, activeModelingStyle, code);
                }
                setManualSaveSuccess(true);
                setTimeout(() => setManualSaveSuccess(false), 2000);
              }
              if (onSaveCode) {
                onSaveCode();
              }
            }}
            className={`h-7 px-2.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-all select-none shrink-0 cursor-pointer ${
              (isSaved || manualSaveSuccess)
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 shadow-sm'
                : 'bg-[#191a21] hover:bg-[#20222b] text-emerald-400 hover:text-emerald-300 border border-[#2b2d39] hover:border-emerald-500/40'
            }`}
            title="Save code to workspace and storage"
          >
            {(isSaved || manualSaveSuccess) ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="font-bold whitespace-nowrap">Saved</span>
              </>
            ) : (
              <>
                <Save className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="whitespace-nowrap font-medium">Save</span>
              </>
            )}
          </button>

          {/* Auto-Format & Align Syntax Button */}
          <button
            onClick={handleAutoFormat}
            className={`h-7 px-2.5 rounded-md text-xs font-medium flex items-center gap-1.5 transition-all select-none shrink-0 cursor-pointer ${
              showFormatSuccess
                ? 'bg-[#e5a93c]/20 text-[#e5a93c] border border-[#e5a93c]/50 shadow-sm'
                : 'bg-[#191a21] hover:bg-[#20222b] text-slate-300 hover:text-[#e5a93c] border border-[#2b2d39] hover:border-[#e5a93c]/40'
            }`}
            title="Auto-format code indentation & syntax alignment"
          >
            {showFormatSuccess ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#e5a93c] shrink-0" />
                <span className="text-[#e5a93c] font-bold whitespace-nowrap">Formatted</span>
              </>
            ) : (
              <>
                <Wand2 className="w-3.5 h-3.5 text-[#e5a93c] shrink-0" />
                <span className="whitespace-nowrap">Format</span>
              </>
            )}
          </button>

          {/* Syntax Guide Button */}
          <button
            onClick={() => setShowSyntaxGuide(prev => !prev)}
            className={`h-7 px-2 rounded-md text-xs font-medium flex items-center gap-1 transition-all select-none shrink-0 ${
              showSyntaxGuide
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-cyan-300 hover:bg-slate-800 border border-transparent'
            }`}
            title={`Syntax Reference & Templates: ${syntaxGuide.languageName}`}
          >
            <BookOpen className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span className="hidden xl:inline whitespace-nowrap">Syntax</span>
          </button>

          {/* Coding & Problem Hints Button */}
          <button
            onClick={() => setShowLintDrawer(prev => !prev)}
            className={`h-7 px-2 rounded-md text-xs font-medium flex items-center gap-1 transition-all select-none shrink-0 cursor-pointer ${
              showLintDrawer
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                : (problem?.hints?.length || lintWarnings.length > 0)
                ? 'bg-amber-500/10 text-amber-300 border border-amber-500/30'
                : 'text-slate-400 hover:text-amber-300 hover:bg-slate-800 border border-transparent'
            }`}
            title="Problem hints & coding guidelines"
          >
            <Lightbulb className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="hidden xl:inline whitespace-nowrap">Hint</span>
            {((problem?.hints?.length || 0) + lintWarnings.length) > 0 && (
              <span className="font-mono text-[10px] font-bold px-1 py-0.2 rounded bg-amber-500/30 text-amber-200">
                {(problem?.hints?.length || 0) + lintWarnings.length}
              </span>
            )}
          </button>

          {/* Panel Layout Toggle (Maximize/Restore Code Editor) */}
          {onTogglePanelLayout && isOutputOpen && (
            <button
              onClick={() => onTogglePanelLayout(panelLayout === 'code-expanded' ? 'default' : 'code-expanded')}
              className={`h-7 w-7 rounded-md flex items-center justify-center transition-all select-none shrink-0 ${
                panelLayout === 'code-expanded'
                  ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
              title={panelLayout === 'code-expanded' ? "Restore split view" : "Maximize code editor"}
            >
              {panelLayout === 'code-expanded' ? (
                <Minimize2 className="w-3.5 h-3.5" />
              ) : (
                <Maximize2 className="w-3.5 h-3.5" />
              )}
            </button>
          )}

          {/* More Actions Dropdown Menu (...) */}
          <div className="relative shrink-0">
            <button
              onClick={() => setShowMoreMenu(prev => !prev)}
              className={`h-7 w-7 rounded-md flex items-center justify-center transition-all select-none ${
                showMoreMenu ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
              title="More Options"
            >
              <MoreVertical className="w-3.5 h-3.5" />
            </button>

            {showMoreMenu && (
              <div 
                className="absolute right-0 mt-1 w-52 bg-[#0b101c] border border-slate-800 rounded-xl shadow-2xl py-1 z-50 text-xs overflow-hidden"
                onMouseLeave={() => setShowMoreMenu(false)}
              >
                {/* Restore Saved Answer */}
                {savedAnswerCode && savedAnswerCode !== problem?.starterCode && code !== savedAnswerCode && (
                  <button
                    onClick={() => {
                      onRestoreSavedAnswer?.();
                      setShowMoreMenu(false);
                    }}
                    className="w-full px-3 py-2 text-left hover:bg-slate-800 text-emerald-300 flex items-center gap-2 transition-colors select-none whitespace-nowrap"
                  >
                    <RotateCcw className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Restore Saved Answer</span>
                  </button>
                )}

                {/* Reset to starter code */}
                <button
                  onClick={() => {
                    onReset();
                    setShowMoreMenu(false);
                  }}
                  className="w-full px-3 py-2 text-left hover:bg-slate-800 text-slate-300 hover:text-white flex items-center gap-2 transition-colors select-none whitespace-nowrap"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>Reset to Starter Template</span>
                </button>

                {/* Download Source */}
                {onDownloadCode && (
                  <button
                    onClick={() => {
                      onDownloadCode();
                      setShowMoreMenu(false);
                    }}
                    className="w-full px-3 py-2 text-left hover:bg-slate-800 text-slate-300 hover:text-white flex items-center gap-2 transition-colors select-none whitespace-nowrap"
                  >
                    <Download className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>Download File ({sourceFileName})</span>
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

      </div>

      {/* Interactive Library Syntax Reference Drawer */}
      {showSyntaxGuide && (
        <div className="p-4 bg-slate-900 border-b border-cyan-500/30 text-xs text-slate-200 space-y-3 max-h-64 overflow-y-auto animate-fadeIn">
          <div className="flex items-center justify-between font-bold text-cyan-300 pb-2 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-cyan-400" />
              <span>{syntaxGuide.languageName} Syntax Reference & Synthesis Guide</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono">
                {syntaxGuide.standard}
              </span>
            </div>
            <button 
              onClick={() => setShowSyntaxGuide(false)}
              className="p-1 rounded text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-slate-400 text-xs leading-relaxed">
            {syntaxGuide.description} Click any template snippet below to insert it directly into your code:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {syntaxGuide.categories.map((cat, cIdx) => (
              <div key={cIdx} className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <h4 className="font-bold text-amber-300 text-xs flex items-center gap-1.5">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                  {cat.name}
                </h4>
                <div className="space-y-1.5">
                  {cat.items.map((item, iIdx) => (
                    <div 
                      key={iIdx}
                      onClick={() => insertSyntaxSnippet(item.example)}
                      className="p-2 rounded bg-slate-900/90 hover:bg-slate-800 border border-slate-800/80 hover:border-cyan-500/40 cursor-pointer transition-all group"
                      title="Click to insert into code"
                    >
                      <div className="flex items-center justify-between text-[11px] font-bold text-cyan-300">
                        <code>{item.syntax}</code>
                        <span className="text-[9px] text-slate-500 group-hover:text-cyan-400">Insert ↵</span>
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{item.description}</div>
                      <pre className="mt-1 text-[10px] text-emerald-300 bg-slate-950 p-1.5 rounded overflow-x-auto">
                        {item.example}
                      </pre>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Live Coding & Problem Hints Drawer */}
      {showLintDrawer && (
        <div className="p-3 bg-slate-900 border-b border-amber-500/30 text-xs text-slate-200 space-y-2.5 max-h-56 overflow-y-auto animate-fadeIn">
          <div className="flex items-center justify-between font-bold text-amber-300 pb-1.5 border-b border-slate-800">
            <span className="flex items-center gap-1.5">
              <Lightbulb className="w-4 h-4 text-amber-400" />
              <span>Problem Hints & Coding Guidelines</span>
            </span>
            <button 
              onClick={() => setShowLintDrawer(false)}
              className="text-slate-400 hover:text-white text-[11px] cursor-pointer"
            >
              Close
            </button>
          </div>

          {/* Problem-Specific Hints */}
          {problem?.hints && problem.hints.length > 0 && (
            <div className="space-y-1.5">
              <div className="text-[11px] font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1">
                <span>Task Hints:</span>
              </div>
              {problem.hints.map((hint, hIdx) => (
                <div key={`ph-${hIdx}`} className="p-2 rounded-lg bg-amber-950/30 border border-amber-500/30 text-amber-200 flex items-start gap-2">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-400 mt-0.5 shrink-0" />
                  <span className="leading-relaxed">{hint}</span>
                </div>
              ))}
            </div>
          )}

          {/* Hardware Synthesis / Language Rule Hints */}
          {isVlsi && lintWarnings.length > 0 && (
            <div className="space-y-1.5 pt-1">
              <div className="text-[11px] font-bold text-amber-300 uppercase tracking-wider">Synthesis & Coding Rules:</div>
              {lintWarnings.map((warn, wIdx) => (
                <div key={wIdx} className="p-2.5 rounded-xl bg-slate-950 border border-amber-500/30 text-xs space-y-1">
                  <div className="flex items-center justify-between text-amber-400 font-bold">
                    <span>{warn.title} {warn.line ? `(Line ${warn.line})` : ''}</span>
                    <span className="text-[10px] uppercase px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300">
                      Rule Hint
                    </span>
                  </div>
                  <p className="text-slate-300 font-normal">{warn.message}</p>
                  <p className="text-amber-200 font-mono text-[11px] bg-slate-900 p-2 rounded border border-slate-800 leading-relaxed">
                    {warn.hintAlone}
                  </p>
                </div>
              ))}
            </div>
          )}

          {(!problem?.hints || problem.hints.length === 0) && lintWarnings.length === 0 && (
            <div className="p-2 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>No syntax violations detected. Code adheres to clean coding standards.</span>
            </div>
          )}
        </div>
      )}

      {/* Editor Content Area */}
      <div className="flex-1 flex overflow-hidden relative bg-[#111215]">
        {activeTab === 'tb' && isVlsi ? (
          /* Testbench Section */
          <div className="flex-1 flex flex-col overflow-hidden bg-[#111215]">
            {/* Testbench Header */}
            <div className="px-3 py-1.5 bg-[#16171d] border-b border-[#262833] text-[11px] font-semibold text-purple-400 flex items-center justify-between select-none shrink-0">
              <span className="flex items-center gap-1.5 truncate">
                <TestTube className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span className="text-white font-bold">TESTBENCH STIMULUS</span>
                <span className="text-purple-400/80 font-mono text-[10px]">({tbFileName})</span>
              </span>
              <div className="flex items-center gap-2">
                {customTbCode !== null && (
                  <button
                    onClick={() => setCustomTbCode(null)}
                    className="text-[10px] text-[#e5a93c] hover:text-[#d99b2e] underline font-sans cursor-pointer"
                    title="Reset testbench to clean template"
                  >
                    Reset Template
                  </button>
                )}
                <span className="text-[#9da3b4] text-[10px] font-mono uppercase">{syntaxGuide.languageName}</span>
              </div>
            </div>

            <div className="flex-1 flex overflow-hidden bg-[#111215]">
              {/* Testbench Line Numbers */}
              <div 
                ref={lineNumbersRef}
                className="w-12 py-3 bg-[#14151b] border-r border-[#262833] text-right pr-2.5 select-none text-purple-400/60 text-xs leading-6 font-mono overflow-hidden pointer-events-none"
              >
                {tbLineNumbers.map((num) => (
                  <div key={num} className="h-6 flex items-center justify-end">{num}</div>
                ))}
              </div>
              {/* Testbench Editable Text Area */}
              <textarea
                value={currentTbCode}
                onChange={(e) => setCustomTbCode(e.target.value)}
                onScroll={handleScroll}
                spellCheck={false}
                placeholder={`// Enter ${syntaxGuide.languageName} testbench code here...`}
                className="flex-1 p-3 bg-[#111215] text-purple-200 font-mono text-sm leading-6 focus:outline-none resize-none overflow-auto whitespace-pre selection:bg-purple-600/40"
                style={{ tabSize: 2 }}
              />
            </div>
          </div>
        ) : (
          /* Design RTL / Source Code Section */
          <>
            {/* Line Numbers */}
            <div 
              ref={lineNumbersRef}
              className="w-12 py-3 bg-[#14151b] border-r border-[#262833] text-right pr-2.5 select-none text-[#717686] text-xs leading-6 font-mono overflow-hidden pointer-events-none"
            >
              {dutLineNumbers.map((num) => (
                <div
                  key={num}
                  className={`h-6 flex items-center justify-end transition-colors ${
                    errorLine && num === errorLine
                      ? 'text-rose-400 bg-rose-500/20 font-bold border-r-2 border-rose-500 pr-1'
                      : ''
                  }`}
                  title={errorLine && num === errorLine ? `Error detected on Line ${num}` : undefined}
                >
                  {num}
                </div>
              ))}
            </div>
            {/* Editable Source / Design Text Area */}
            <textarea
              ref={textareaRef}
              value={code}
              onChange={handleCodeTyping}
              onKeyDown={handleKeyDown}
              onScroll={handleScroll}
              onClick={(e) => setCursorPos(e.currentTarget.selectionStart)}
              onKeyUp={(e) => setCursorPos(e.currentTarget.selectionStart)}
              spellCheck={false}
              placeholder={`// Enter ${syntaxGuide.languageName} (${syntaxGuide.standard}) code here...`}
              className="flex-1 p-3 bg-[#111215] text-[#f1f3f7] font-mono text-sm leading-6 focus:outline-none resize-none overflow-auto whitespace-pre selection:bg-[#e5a93c]/30"
              style={{ tabSize: 2 }}
            />
          </>
        )}

        {/* Live Typing Syntax Suggestion Dropdown Overlay */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute bottom-9 left-14 z-30 w-80 sm:w-96 bg-[#16171d] border border-[#e5a93c]/60 rounded-xl shadow-2xl overflow-hidden backdrop-blur-md animate-in slide-in-from-bottom-2 duration-150">
            <div className="px-3 py-1.5 bg-[#191a21] border-b border-[#262833] flex items-center justify-between text-[10px] text-[#9da3b4] font-sans">
              <span className="font-bold text-[#e5a93c] flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-[#e5a93c]" />
                <span>{syntaxGuide.languageName} Syntax Assist</span>
                <span className="text-[#8c91a0] font-normal">({suggestions.length})</span>
              </span>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-[#9da3b4] font-mono">Tab/Enter ↵</span>
                <button
                  onClick={() => {
                    setShowSuggestions(false);
                    setActiveQuery('');
                  }}
                  className="text-slate-400 hover:text-white transition-colors"
                  title="Dismiss (Esc)"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            </div>

            <div className="max-h-56 overflow-y-auto p-1 divide-y divide-slate-800/50">
              {suggestions.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => insertSyntaxSnippet(item.insertText)}
                  className={`p-2 rounded-lg cursor-pointer transition-all flex items-center justify-between text-xs ${
                    idx === selectedSuggestionIndex
                      ? 'bg-blue-600 text-white font-bold shadow'
                      : 'hover:bg-slate-800/60 text-slate-200'
                  }`}
                >
                  <div className="min-w-0 pr-2">
                    <div className="font-mono font-bold truncate flex items-center gap-1.5">
                      <span>{item.label}</span>
                      <span className={`text-[9px] px-1.5 py-0.2 rounded font-sans uppercase ${
                        item.type === 'keyword' ? 'bg-amber-500/20 text-amber-300' :
                        item.type === 'snippet' ? 'bg-cyan-500/20 text-cyan-300' :
                        item.type === 'type' ? 'bg-purple-500/20 text-purple-300' :
                        'bg-emerald-500/20 text-emerald-300'
                      }`}>
                        {item.type}
                      </span>
                    </div>
                    <div className={`text-[10px] truncate ${idx === selectedSuggestionIndex ? 'text-blue-100' : 'text-slate-400'}`}>
                      {item.detail}
                    </div>
                  </div>
                  <CornerDownLeft className="w-3.5 h-3.5 opacity-60 shrink-0" />
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Professional Clean Bottom Status Bar */}
      <div className="h-7 px-3 bg-[#16171d] border-t border-[#262833] flex items-center justify-between text-[11px] text-[#9da3b4] shrink-0 select-none">
        
        {/* Left: Cursor position & Language standard */}
        <div className="flex items-center gap-3">
          <span className="font-mono tabular-nums text-slate-300">
            Ln {cursorPosInfo.line}, Col {cursorPosInfo.col}
          </span>
          <span className="text-[#383a48]">·</span>
          <span className="font-mono text-[#9da3b4] hidden sm:inline">
            {syntaxGuide.languageName}
          </span>
          <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#191a21] text-[#9da3b4] font-mono hidden md:inline border border-[#2b2d39]">
            {syntaxGuide.standard}
          </span>
        </div>

        {/* Middle: Quick Snippets toggle button */}
        <div className="flex items-center gap-2">
          {syntaxGuide.quickChips.length > 0 && (
            <button
              onClick={() => setShowQuickSnippets(prev => !prev)}
              className={`px-2 py-0.5 rounded text-[10px] font-medium flex items-center gap-1 transition-all ${
                showQuickSnippets
                  ? 'bg-[#e5a93c]/20 text-[#e5a93c] border border-[#e5a93c]/40'
                  : 'hover:bg-[#191a21] text-[#9da3b4] hover:text-white'
              }`}
              title="Toggle Quick Code Snippets"
            >
              <Sparkles className="w-3 h-3 text-[#e5a93c]" />
              <span>Snippets</span>
              {showQuickSnippets ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
            </button>
          )}

          {lastInsertedSyntax && (
            <span className="text-[10px] text-emerald-400 font-bold animate-pulse hidden sm:inline">
              Inserted syntax!
            </span>
          )}
        </div>

        {/* Right: Encoding & Indentation */}
        <div className="flex items-center gap-3 font-mono text-[10px] text-[#8c91a0]">
          <span className="hidden md:inline">Spaces: 2</span>
          <span className="text-[#383a48] hidden md:inline">·</span>
          <span>UTF-8</span>
        </div>

      </div>

      {/* Expandable Quick Code Snippets Shelf (Only when user toggles it!) */}
      {showQuickSnippets && syntaxGuide.quickChips.length > 0 && (
        <div className="px-3 py-1.5 bg-[#191a21] border-t border-[#262833] flex items-center gap-1.5 overflow-x-auto select-none animate-in slide-in-from-bottom-2 duration-150">
          <span className="text-[10px] text-[#8c91a0] font-mono uppercase font-bold shrink-0">Insert:</span>
          {syntaxGuide.quickChips.map((chip, cIdx) => (
            <button
              key={cIdx}
              onClick={() => insertSyntaxSnippet(chip.snippet)}
              className="h-5 px-2 rounded bg-[#16171d] hover:bg-[#20222b] text-[#e5a93c] hover:text-white border border-[#262833] hover:border-[#e5a93c]/40 text-[10px] font-mono whitespace-nowrap transition-all flex items-center gap-1 shrink-0"
              title={chip.tooltip}
            >
              <span className="text-[#8c91a0]">+</span>
              <span>{chip.label}</span>
            </button>
          ))}
        </div>
      )}

    </div>
  );
});
