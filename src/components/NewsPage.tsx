import React, { useState, useMemo, useEffect, useCallback, memo } from 'react';
import { 
  Sparkles, 
  Cpu, 
  Brain,
  Rocket, 
  Search, 
  X, 
  Check, 
  Clock, 
  ArrowUpRight, 
  Bookmark, 
  Share2, 
  Layers, 
  Zap, 
  ShieldCheck, 
  Building2, 
  RefreshCw, 
  Radio, 
  Info,
  Timer,
  RotateCw,
  FastForward,
  CheckCircle2,
  Globe,
  ExternalLink,
  SlidersHorizontal,
  TrendingUp,
  AlertCircle,
  MessageSquare,
  MessageCircle,
  Send,
  ThumbsUp,
  Flame,
  MessageSquarePlus,
  User,
  CornerDownRight
} from 'lucide-react';
import { 
  getDynamicTimelineFilters,
  generate24HourRollingNews,
  TECH_NEWS_CATEGORIES, 
  TECH_COMPANIES, 
  TechNewsItem,
  TechNewsCategory,
  NewsDayFilter
} from '../data/techNewsData';
import { 
  googleNewsService, 
  GoogleGroundingSource, 
  GoogleLiveNewsResponse 
} from '../services/googleNewsService';
import { storageService } from '../services/storageService';
import { NewsDiscussion } from '../types';

interface NewsPageProps {
  onBackToDashboard?: () => void;
  onNavigateToProblem?: (problemId: string) => void;
}

// ---------------------------------------------------------------------------
// GOOGLE LOGO ICON (Clean SVG with authentic Google Brand colors)
// ---------------------------------------------------------------------------
const GoogleIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path
      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.03h3.88c2.27-2.09 3.66-5.17 3.66-9.12z"
      fill="#4285F4"
    />
    <path
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.03c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.94H1.24v3.13C3.26 21.36 7.33 24 12 24z"
      fill="#34A853"
    />
    <path
      d="M5.28 14.28c-.25-.72-.38-1.49-.38-2.28s.13-1.56.38-2.28V6.59H1.24C.45 8.16 0 9.94 0 12s.45 3.84 1.24 5.41l4.04-3.13z"
      fill="#FBBC05"
    />
    <path
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.24 6.59l4.04 3.13c.95-2.84 3.6-4.97 6.72-4.97z"
      fill="#EA4335"
    />
  </svg>
);

// ---------------------------------------------------------------------------
// ISOLATED COUNTDOWN COMPONENT
// ---------------------------------------------------------------------------
const LiveCountdownDisplay = memo(({ referenceTime }: { referenceTime: Date }) => {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const countdown = useMemo(() => {
    const nextMidnight = new Date(now);
    nextMidnight.setHours(24, 0, 0, 0);
    const diffMs = Math.max(0, nextMidnight.getTime() - now.getTime());
    const hours = String(Math.floor(diffMs / (1000 * 60 * 60))).padStart(2, '0');
    const mins = String(Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    const secs = String(Math.floor((diffMs % (1000 * 60)) / 1000)).padStart(2, '0');
    return `${hours}:${mins}:${secs}`;
  }, [now]);

  return <span className="text-amber-300 font-bold font-mono">{countdown}</span>;
});
LiveCountdownDisplay.displayName = 'LiveCountdownDisplay';

// ---------------------------------------------------------------------------
// ISOLATED BREAKING TICKER COMPONENT
// ---------------------------------------------------------------------------
const LiveBreakingTicker = memo(({ 
  items, 
  onSelectArticle 
}: { 
  items: TechNewsItem[]; 
  onSelectArticle: (article: TechNewsItem) => void;
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % items.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [items.length]);

  if (items.length === 0) return null;
  const current = items[index] || items[0];

  return (
    <div 
      onClick={() => onSelectArticle(current)}
      className="flex-1 flex items-center gap-2.5 overflow-hidden cursor-pointer group hover:text-amber-300 transition-colors"
    >
      <span className="text-amber-400 font-bold shrink-0 font-mono text-[11px]">
        [{current.company} • {current.relativeTime}]
      </span>
      <span className="truncate font-semibold text-slate-200 group-hover:text-amber-200 transition-colors">
        {current.title}
      </span>
      <ArrowUpRight className="w-3.5 h-3.5 text-amber-400 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
});
LiveBreakingTicker.displayName = 'LiveBreakingTicker';

// ---------------------------------------------------------------------------
// ARTICLE CARD COMPONENT
// ---------------------------------------------------------------------------
const ArticleCard = memo(({
  article,
  isBookmarked,
  onToggleBookmark,
  onShare,
  onSelect,
  isCopied,
  isGoogleLiveSource = false,
  discussionCount = 0,
  onDiscussClick
}: {
  article: TechNewsItem;
  isBookmarked: boolean;
  onToggleBookmark: (id: string, e: React.MouseEvent) => void;
  onShare: (article: TechNewsItem, e: React.MouseEvent) => void;
  onSelect: (article: TechNewsItem) => void;
  isCopied: boolean;
  isGoogleLiveSource?: boolean;
  discussionCount?: number;
  onDiscussClick?: (article: TechNewsItem, e: React.MouseEvent) => void;
}) => {
  const isNewTech = article.category === 'new_tech';
  const isToday = article.dayGroup === 'today';

  const handleExternalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (article.url) {
      window.open(article.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      onClick={() => onSelect(article)}
      className="p-5 rounded-xl bg-[#16171d] hover:bg-[#1c1d25] border border-[#262833] hover:border-[#383a48] shadow-sm transition-all flex flex-col justify-between cursor-pointer group relative"
    >
      <div>
        {/* Card Top Meta */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="font-semibold text-slate-200">{article.company}</span>
            <span className="text-slate-600">·</span>
            <span className="capitalize">{article.category.replace('_', ' ')}</span>
            <span className="text-slate-600">·</span>
            <span>{isToday ? 'Today' : article.dayGroup === 'yesterday' ? 'Yesterday' : '2d ago'}</span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (onDiscussClick) onDiscussClick(article, e);
                else onSelect(article);
              }}
              className="px-2 py-0.5 rounded-md bg-[#191a21] hover:bg-[#20222b] text-emerald-400 border border-emerald-500/25 text-[10px] font-mono font-bold flex items-center gap-1 transition-colors"
              title="Discuss on Google Tech News Wire"
            >
              <MessageSquare className="w-3 h-3 text-emerald-400" />
              <span>{discussionCount}</span>
            </button>
            {article.url && (
              <button
                onClick={handleExternalClick}
                className="p-1 rounded text-slate-500 hover:text-slate-300 transition-colors"
                title="Open Original Source"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            )}
            <button
              onClick={(e) => onToggleBookmark(article.id, e)}
              className={`p-1 rounded transition-colors ${
                isBookmarked
                  ? 'text-amber-400'
                  : 'text-slate-500 hover:text-slate-300'
              }`}
              title="Bookmark Article"
            >
              <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-amber-400' : ''}`} />
            </button>
            <button
              onClick={(e) => onShare(article, e)}
              className="p-1 rounded text-slate-500 hover:text-slate-300 transition-colors"
              title="Copy Headline"
            >
              {isCopied ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Share2 className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-white group-hover:text-[#e5a93c] transition-colors leading-snug mb-2">
          {article.title}
        </h3>

        {/* Subtitle / Teaser */}
        <p className="text-xs text-[#9da3b4] line-clamp-3 leading-relaxed mb-4">
          {article.summary}
        </p>

        {/* Spec Sheet Preview (if present) */}
        {article.specSheet && article.specSheet.length > 0 && (
          <div className="p-2.5 rounded-xl bg-[#191a21] border border-[#2b2d39] mb-4 space-y-1.5">
            {article.specSheet.slice(0, 2).map((spec, sIdx) => (
              <div key={sIdx} className="flex items-center justify-between text-[11px]">
                <span className="text-[#8c91a0] font-medium">{spec.label}:</span>
                <span className="text-[#eff1f6] font-mono font-bold text-right truncate max-w-[170px]">{spec.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Card Bottom Meta */}
      <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
        <div className="flex items-center gap-2 text-[11px]">
          <span className="text-amber-400 font-medium flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {article.relativeTime}
          </span>
          <span>•</span>
          <span className="truncate max-w-[110px] text-slate-400">{article.source}</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (onDiscussClick) onDiscussClick(article, e);
              else onSelect(article);
            }}
            className="text-emerald-400 hover:text-emerald-300 text-xs font-bold flex items-center gap-1 transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Discuss</span>
          </button>
          <span className="text-amber-400 text-xs font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
            <span>Read</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </div>
  );
});
ArticleCard.displayName = 'ArticleCard';

// ---------------------------------------------------------------------------
// PRESET QUICK GOOGLE QUERIES
// ---------------------------------------------------------------------------
const GOOGLE_TECH_PRESETS = [
  { id: 'all', label: 'All Live Wire', topic: 'all', query: '' },
  { id: 'ai_companies', label: '🤖 Frontier AI Companies', topic: 'ai_companies', query: 'OpenAI Google DeepMind Anthropic NVIDIA xAI Meta AI Mistral' },
  { id: 'vlsi', label: '🔬 VLSI & EDA Silicon', topic: 'vlsi', query: '' },
  { id: 'embedded', label: '⚡ Embedded Systems & MCUs', topic: 'embedded', query: '' },
  { id: 'robotics', label: '🤖 Robotics & Autonomous', topic: 'robotics', query: '' },
  { id: 'semiconductor', label: '🏗️ Semiconductor & 2nm', topic: 'semiconductor', query: '' },
  { id: 'ai_creation', label: '🧠 AI Silicon & Compute', topic: 'ai_creation', query: '' },
  { id: 'stm32_freertos', label: '⏱️ STM32 & FreeRTOS', topic: 'embedded', query: 'STM32 FreeRTOS microcontroller' },
  { id: 'ros_humanoids', label: '🦾 Humanoids & ROS2', topic: 'robotics', query: 'humanoid robot ROS2' },
  { id: 'tapeout_eda', label: '📐 ASIC Tapeout & EDA', topic: 'vlsi', query: 'tapeout ASIC Synopsys Cadence' },
  { id: 'riscv', label: '⚙️ RISC-V Custom Cores', topic: 'semiconductor', query: 'RISC-V custom accelerator' }
];

// ---------------------------------------------------------------------------
// MAIN NEWS PAGE
// ---------------------------------------------------------------------------
export const NewsPage: React.FC<NewsPageProps> = memo(() => {
  // Mode: Google Live Stream (Direct Search Connection) vs Curriculum Archive
  const [feedSourceMode, setFeedSourceMode] = useState<'google_live' | 'curriculum'>('google_live');

  // Google Live Connection State
  const [isGoogleConnected, setIsGoogleConnected] = useState(true);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [googleArticles, setGoogleArticles] = useState<TechNewsItem[]>(() => {
    return googleNewsService.getCachedNews() || [];
  });
  const [googleGroundingSources, setGoogleGroundingSources] = useState<GoogleGroundingSource[]>([]);
  const [googleSearchQueries, setGoogleSearchQueries] = useState<string[]>([]);
  const [googlePresetId, setGooglePresetId] = useState<string>('all');
  const [activeTopic, setActiveTopic] = useState<string>('all');
  const [autoRefreshSecsLeft, setAutoRefreshSecsLeft] = useState<number>(180);
  const [googleSearchInput, setGoogleSearchInput] = useState<string>('');
  const [googleActiveQuery, setGoogleActiveQuery] = useState<string>('');
  const [googleLastSyncTime, setGoogleLastSyncTime] = useState<string>(() => new Date().toLocaleTimeString());
  const [googleError, setGoogleError] = useState<string | null>(null);

  // Curriculum Filter State
  const [selectedCategory, setSelectedCategory] = useState<TechNewsCategory>('all');
  const [selectedDay, setSelectedDay] = useState<NewsDayFilter>('all');
  const [selectedCompany, setSelectedCompany] = useState<string>('All Companies');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // 24-Hour Rolling Simulation State (Curriculum Archive)
  const [cycleOffset, setCycleOffset] = useState<number>(0);
  const [baseDateTimestamp, setBaseDateTimestamp] = useState<number>(() => Date.now());
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastSyncTime, setLastSyncTime] = useState<string>(() => new Date().toLocaleTimeString());
  const [livePulseFlash, setLivePulseFlash] = useState(false);
  const [rolloverNotification, setRolloverNotification] = useState<string | null>(null);

  // Active Reading Modal
  const [activeArticle, setActiveArticle] = useState<TechNewsItem | null>(null);

  // Bookmarking Persistence
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('silicon_arena_bookmarked_news');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Discuss Page View Modes: 'news' (live news grid) vs 'discussions' (community discussions)
  const [mainViewTab, setMainViewTab] = useState<'news' | 'discussions'>('news');

  // Real-time Community Discussions State (connected directly to Google News)
  const [discussions, setDiscussions] = useState<NewsDiscussion[]>([]);
  const [loadingDiscussions, setLoadingDiscussions] = useState<boolean>(false);
  const [selectedDiscussArticleId, setSelectedDiscussArticleId] = useState<string>('all');
  const [newDiscTitle, setNewDiscTitle] = useState('');
  const [newDiscContent, setNewDiscContent] = useState('');
  const [newDiscArticleId, setNewDiscArticleId] = useState<string>('');
  const [isPostingDiscussion, setIsPostingDiscussion] = useState(false);
  const [modalCommentText, setModalCommentText] = useState('');
  const [isPostingModalComment, setIsPostingModalComment] = useState(false);
  const [discussionToast, setDiscussionToast] = useState<string | null>(null);

  // Reference Date for generation
  const referenceDate = useMemo(() => new Date(baseDateTimestamp), [baseDateTimestamp]);

  // Curriculum 3-Day News Database
  const curriculumNewsDatabase = useMemo(() => {
    return generate24HourRollingNews(cycleOffset, referenceDate);
  }, [cycleOffset, referenceDate]);

  // Dynamic Timeline Filter Definitions
  const timelineFilters = useMemo(() => {
    return getDynamicTimelineFilters(referenceDate);
  }, [referenceDate]);

  // Fetch Live Tech News directly from Google & Verified Engineering Wires
  const fetchGoogleNews = useCallback(async (query: string = '', forceRefresh: boolean = false, topicParam?: string) => {
    setIsGoogleLoading(true);
    setGoogleError(null);

    const topicToUse = topicParam !== undefined ? topicParam : activeTopic;

    try {
      const result: GoogleLiveNewsResponse = await googleNewsService.fetchLiveTechNews({
        query: query.trim(),
        topic: topicToUse,
        forceRefresh
      });

      if (result.success && result.articles && result.articles.length > 0) {
        setGoogleArticles(result.articles);
        setGoogleGroundingSources(result.groundingSources || []);
        setGoogleSearchQueries(result.searchQueries || []);
        setGoogleLastSyncTime(new Date().toLocaleTimeString());
        setIsGoogleConnected(true);
        setLivePulseFlash(true);
        setAutoRefreshSecsLeft(180);
        setTimeout(() => setLivePulseFlash(false), 3000);
      } else if (result.error) {
        setGoogleError(result.error);
        setGoogleArticles(prev => {
          if (prev.length === 0) {
            setFeedSourceMode('curriculum');
          }
          return prev;
        });
      }
    } catch (err: any) {
      setGoogleError(err.message || 'Failed to connect to Google Live News Wire.');
    } finally {
      setIsGoogleLoading(false);
    }
  }, [activeTopic]);

  // Initial Fetch on Component Mount
  useEffect(() => {
    fetchGoogleNews('', false, 'all');
  }, [fetchGoogleNews]);

  // Regular Auto-Refresh interval (updates every 3 minutes automatically)
  useEffect(() => {
    const timer = setInterval(() => {
      setAutoRefreshSecsLeft(prev => {
        if (prev <= 1) {
          fetchGoogleNews(googleActiveQuery, true, activeTopic);
          return 180;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [fetchGoogleNews, googleActiveQuery, activeTopic]);

  // Handle Preset Click
  const handleSelectGooglePreset = (preset: typeof GOOGLE_TECH_PRESETS[0]) => {
    setGooglePresetId(preset.id);
    setActiveTopic(preset.topic);
    setGoogleSearchInput(preset.query);
    setGoogleActiveQuery(preset.query);
    fetchGoogleNews(preset.query, true, preset.topic);
  };

  // Handle Custom Google Query Submission
  const handleGoogleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setGoogleActiveQuery(googleSearchInput);
    fetchGoogleNews(googleSearchInput, true, activeTopic);
  };

  // Active articles list depending on mode
  const activeArticlesList = useMemo(() => {
    if (feedSourceMode === 'google_live' && googleArticles.length > 0) {
      return googleArticles;
    }
    return curriculumNewsDatabase;
  }, [feedSourceMode, googleArticles, curriculumNewsDatabase]);

  // Breaking stories for the ticker
  const breakingItems = useMemo(() => {
    return activeArticlesList.filter(n => n.breaking || n.featured);
  }, [activeArticlesList]);

  // Save bookmarks
  const toggleBookmark = useCallback((id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setBookmarkedIds(prev => {
      const updated = prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id];
      try {
        localStorage.setItem('silicon_arena_bookmarked_news', JSON.stringify(updated));
      } catch (err) {
        console.error('Failed to save bookmark', err);
      }
      return updated;
    });
  }, []);

  const handleShare = useCallback((article: TechNewsItem, e: React.MouseEvent) => {
    e.stopPropagation();
    const shareText = `${article.title} - ${article.subtitle} (${article.company} | ${article.source})`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareText);
      setCopiedId(article.id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  }, []);

  // Fetch Discussions from backend SQLite DB
  const loadDiscussions = useCallback(async (articleId?: string) => {
    setLoadingDiscussions(true);
    try {
      const items = await storageService.fetchNewsDiscussions(articleId);
      setDiscussions(items);
    } catch (e) {
      console.warn('Could not load news discussions:', e);
    } finally {
      setLoadingDiscussions(false);
    }
  }, []);

  useEffect(() => {
    loadDiscussions(selectedDiscussArticleId);
  }, [loadDiscussions, selectedDiscussArticleId]);

  const handleUpvoteDiscussion = async (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setDiscussions(prev => prev.map(d => d.id === id ? { ...d, upvotes: d.upvotes + 1 } : d));
    await storageService.upvoteNewsDiscussion(id);
  };

  const handlePostMainDiscussion = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDiscContent.trim()) return;

    const user = storageService.getUser();
    const artId = newDiscArticleId || (activeArticlesList[0]?.id || 'general_wire');
    const targetArt = activeArticlesList.find(a => a.id === artId);
    const artTitle = targetArt?.title || 'Google Live Tech News Wire';

    setIsPostingDiscussion(true);
    try {
      const post = await storageService.postNewsDiscussion({
        articleId: artId,
        articleTitle: artTitle,
        userId: user.id || 'usr_guest',
        userName: user.name || 'VLSI Engineer',
        userAvatar: user.avatarUrl || `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(user.name || 'Engineer')}`,
        title: newDiscTitle.trim() || undefined,
        content: newDiscContent.trim()
      });

      if (post) {
        setDiscussions(prev => [post, ...prev]);
        setNewDiscTitle('');
        setNewDiscContent('');
        setDiscussionToast('Discussion post published to Google News Wire!');
        setTimeout(() => setDiscussionToast(null), 3000);
      }
    } catch (err) {
      console.error('Failed to post discussion:', err);
    } finally {
      setIsPostingDiscussion(false);
    }
  };

  const handlePostModalComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!modalCommentText.trim() || !activeArticle) return;

    const user = storageService.getUser();
    setIsPostingModalComment(true);
    try {
      const post = await storageService.postNewsDiscussion({
        articleId: activeArticle.id,
        articleTitle: activeArticle.title,
        userId: user.id || 'usr_guest',
        userName: user.name || 'VLSI Engineer',
        userAvatar: user.avatarUrl || `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(user.name || 'Engineer')}`,
        content: modalCommentText.trim()
      });

      if (post) {
        setDiscussions(prev => [post, ...prev]);
        setModalCommentText('');
      }
    } catch (err) {
      console.error('Failed to post comment in modal:', err);
    } finally {
      setIsPostingModalComment(false);
    }
  };

  const handleOpenArticleDiscussion = useCallback((article: TechNewsItem, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedDiscussArticleId(article.id);
    setNewDiscArticleId(article.id);
    setMainViewTab('discussions');
    window.scrollTo({ top: 400, behavior: 'smooth' });
  }, []);

  const discussionCountsByArticle = useMemo(() => {
    const map: Record<string, number> = {};
    discussions.forEach(d => {
      map[d.articleId] = (map[d.articleId] || 0) + 1;
    });
    return map;
  }, [discussions]);

  const modalDiscussions = useMemo(() => {
    if (!activeArticle) return [];
    return discussions.filter(d => d.articleId === activeArticle.id);
  }, [activeArticle, discussions]);

  const filteredDiscussions = useMemo(() => {
    if (selectedDiscussArticleId === 'all') return discussions;
    return discussions.filter(d => d.articleId === selectedDiscussArticleId);
  }, [discussions, selectedDiscussArticleId]);

  // Filtered Articles
  const filteredArticles = useMemo(() => {
    return activeArticlesList.filter(article => {
      // In curriculum mode, apply day filter
      if (feedSourceMode === 'curriculum') {
        if (selectedDay !== 'all' && article.dayGroup !== selectedDay) return false;
      }
      
      if (selectedCategory === 'breaking') {
        if (!article.breaking) return false;
      } else if (selectedCategory === 'vlsi') {
        const isVlsi = article.category === 'vlsi';
        const hasVlsiText = /vlsi|eda|asic|fpga|rtl|synopsys|cadence|tapeout|physical design|synthesis|verilog|systemverilog/i.test(article.title + ' ' + article.summary + ' ' + (article.tags || []).join(' '));
        if (!isVlsi && !hasVlsiText) return false;
      } else if (selectedCategory === 'embedded') {
        const isEmbedded = article.category === 'embedded';
        const hasEmbeddedText = /embedded|stm32|esp32|microcontroller|mcu|firmware|freertos|zephyr|micropython|arduino|arm cortex|rp2040|rp2350|alif|seeed|sensor/i.test(article.title + ' ' + article.summary + ' ' + (article.tags || []).join(' '));
        if (!isEmbedded && !hasEmbeddedText) return false;
      } else if (selectedCategory === 'robotics') {
        const isRobotics = article.category === 'robotics';
        const hasRoboticsText = /robot|humanoid|quadruped|manipulat|ros2|ros\s+2|actuator|kinematics|spot|atlas|unitree|autonomous|slam/i.test(article.title + ' ' + article.summary + ' ' + (article.tags || []).join(' '));
        if (!isRobotics && !hasRoboticsText) return false;
      } else if (selectedCategory === 'ai_companies') {
        const isAiCategory = article.category === 'ai_companies' || article.category === 'ai_creation';
        const isAiBrand = /openai|google\s*deepmind|deepmind|anthropic|nvidia|meta|microsoft|xai|grok|mistral|deepseek|cerebras|groq|amd\s*ai/i.test(article.company + ' ' + (article.tags || []).join(' ') + ' ' + article.title);
        if (!isAiCategory && !isAiBrand) return false;
      } else if (selectedCategory === 'ai_creation') {
        const isAiCat = article.category === 'ai_creation' || article.category === 'ai_companies';
        const hasAiTags = article.tags?.some(t => /ai|llm|moe|deepseek|groq|cerebras|reasoning|creation|transformer|neural/i.test(t));
        const hasAiText = /ai|llm|deepseek|cerebras|groq|reasoning|moe|model|generation|agent/i.test(article.title + ' ' + article.summary);
        if (!isAiCat && !hasAiTags && !hasAiText) return false;
      } else if (selectedCategory === 'semiconductor') {
        const isSemiCat = article.category === 'semiconductor';
        const hasSemiTags = article.tags?.some(t => /semiconductor|foundry|tsmc|intel|asml|node|gaa|18a|2nm|1\.4nm|lithography|packaging|hbm/i.test(t));
        const hasSemiText = /semiconductor|foundry|tsmc|intel|asml|node|gaa|18a|2nm|a16|nanosheet|lithography|hbm|wafer|fab/i.test(article.title + ' ' + article.summary);
        if (!isSemiCat && !hasSemiTags && !hasSemiText) return false;
      } else if (selectedCategory !== 'all' && article.category !== selectedCategory) {
        return false;
      }

      if (selectedCompany !== 'All Companies' && article.company !== selectedCompany) return false;

      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = article.title.toLowerCase().includes(query);
        const matchesSubtitle = article.subtitle.toLowerCase().includes(query);
        const matchesSummary = article.summary.toLowerCase().includes(query);
        const matchesCompany = article.company.toLowerCase().includes(query);
        const matchesTags = article.tags.some(t => t.toLowerCase().includes(query));
        const matchesHighlights = article.keyHighlights?.some(h => h.toLowerCase().includes(query));
        if (!matchesTitle && !matchesSubtitle && !matchesSummary && !matchesCompany && !matchesTags && !matchesHighlights) {
          return false;
        }
      }
      return true;
    });
  }, [activeArticlesList, feedSourceMode, selectedDay, selectedCategory, selectedCompany, searchQuery]);

  // Top Featured Story
  const featuredArticle = useMemo(() => {
    return filteredArticles.find(a => a.featured) || filteredArticles[0];
  }, [filteredArticles]);

  // Story counts for Day Pills
  const countsByDay = useMemo(() => {
    return {
      all: curriculumNewsDatabase.length,
      today: curriculumNewsDatabase.filter(n => n.dayGroup === 'today').length,
      yesterday: curriculumNewsDatabase.filter(n => n.dayGroup === 'yesterday').length,
      two_days_ago: curriculumNewsDatabase.filter(n => n.dayGroup === 'two_days_ago').length,
    };
  }, [curriculumNewsDatabase]);

  // Manual Curriculum Refresh
  const handleManualRefresh = useCallback(() => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      setBaseDateTimestamp(Date.now());
      setLastSyncTime(new Date().toLocaleTimeString());
      setLivePulseFlash(true);
      setRolloverNotification('Curriculum wire refreshed with latest simulated 72h window.');
      setTimeout(() => {
        setLivePulseFlash(false);
        setRolloverNotification(null);
      }, 3500);
    }, 300);
  }, []);

  return (
    <div className="min-h-screen bg-[#111215] text-[#f1f3f7] pb-20 selection:bg-[#e5a93c] selection:text-[#111215]">
      
      {/* 🔴 LIVE REAL-TIME BREAKING TICKER MARQUEE */}
      <div className="bg-[#16171d] border-b border-[#262833] px-4 py-2 flex items-center justify-between text-xs overflow-hidden sticky top-16 z-30 shadow-sm">
        <div className="flex items-center gap-3 w-full max-w-7xl mx-auto">
          
          {/* Live Indicator with Google connection */}
          <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-red-600/20 border border-red-500/40 text-red-300 font-bold tracking-wider uppercase text-[10px] shrink-0 font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span>{feedSourceMode === 'google_live' ? 'GOOGLE LIVE WIRE' : '24H ARCHIVE WIRE'}</span>
          </div>

          {/* Rotating Breaking Headline */}
          <LiveBreakingTicker 
            items={breakingItems} 
            onSelectArticle={setActiveArticle} 
          />

          {/* Live Status / Sync Trigger */}
          <div className="hidden sm:flex items-center gap-3 shrink-0 text-[#8c91a0] text-[11px]">
            {feedSourceMode === 'google_live' ? (
              <div className="flex items-center gap-2 bg-[#191a21] border border-[#2b2d39] px-2.5 py-0.5 rounded-md font-mono text-[#eff1f6]">
                <GoogleIcon className="w-3.5 h-3.5" />
                <span>Google & Wires:</span>
                <span className="text-emerald-400 font-bold">{googleLastSyncTime}</span>
                <span className="text-slate-600">·</span>
                <span className="text-amber-400 font-medium text-[10px] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Auto-sync in {autoRefreshSecsLeft}s
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-1.5 bg-[#191a21] border border-[#2b2d39] px-2.5 py-0.5 rounded-md font-mono">
                <Clock className="w-3 h-3 text-[#e5a93c]" />
                <span className="text-[#8c91a0]">Next Rollover:</span>
                <LiveCountdownDisplay referenceTime={referenceDate} />
              </div>
            )}

            <button
              onClick={() => {
                if (feedSourceMode === 'google_live') {
                  fetchGoogleNews(googleActiveQuery, true);
                } else {
                  handleManualRefresh();
                }
              }}
              disabled={isGoogleLoading || isRefreshing}
              className="p-1 rounded hover:bg-[#191a21] text-[#8c91a0] hover:text-white transition-all disabled:opacity-50 cursor-pointer"
              title="Sync News Wire Now"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${(isGoogleLoading || isRefreshing) ? 'animate-spin text-[#e5a93c]' : ''}`} />
            </button>
          </div>

        </div>
      </div>

      {/* Rollover or Sync Toast */}
      {rolloverNotification && (
        <div className="bg-[#16171d] border-b border-emerald-500/40 px-4 py-2 text-xs text-emerald-200 flex items-center justify-between shadow-sm animate-in fade-in duration-300">
          <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{rolloverNotification}</span>
            </div>
            <button 
              onClick={() => setRolloverNotification(null)}
              className="text-emerald-400 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Discussion Published Toast */}
      {discussionToast && (
        <div className="bg-[#16171d] border-b border-emerald-500/40 px-4 py-2 text-xs text-emerald-200 flex items-center justify-between shadow-sm animate-in fade-in duration-300">
          <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{discussionToast}</span>
            </div>
            <button 
              onClick={() => setDiscussionToast(null)}
              className="text-emerald-400 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Header Banner (1st Page Theme) */}
      <div className="relative overflow-hidden bg-[#16171d] border-b border-[#262833] pt-8 pb-10">
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Tag & Mode Selector */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            
            {/* Mode Switcher: Google Live vs Curriculum Archive */}
            <div className="flex items-center gap-1.5 p-1 rounded-lg bg-[#191a21] border border-[#2b2d39]">
              <button
                onClick={() => setFeedSourceMode('google_live')}
                className={`px-3 py-1.5 rounded-md text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                  feedSourceMode === 'google_live'
                    ? 'bg-[#e5a93c] text-[#111215] shadow-sm'
                    : 'text-[#8c91a0] hover:text-white'
                }`}
              >
                <GoogleIcon className="w-4 h-4" />
                <span>Google Live Wire</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </button>

              <button
                onClick={() => setFeedSourceMode('curriculum')}
                className={`px-3 py-1.5 rounded-md text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  feedSourceMode === 'curriculum'
                    ? 'bg-[#e5a93c] text-[#111215] font-bold shadow-sm'
                    : 'text-[#8c91a0] hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5 text-[#111215]" />
                <span>Curriculum Archive</span>
              </button>
            </div>

            {/* Direct Google Connection Indicator */}
            <div className={`px-3 py-1 rounded-full text-xs font-mono font-bold flex items-center gap-2 transition-all border ${
              isGoogleConnected
                ? 'bg-[#191a21] border-emerald-500/30 text-emerald-400'
                : 'bg-[#191a21] border-[#2b2d39] text-[#8c91a0]'
            }`}>
              <GoogleIcon className="w-3.5 h-3.5" />
              <span>DIRECT GOOGLE SEARCH GROUNDING</span>
              <span className="text-[#656a7a]">|</span>
              <span className="text-emerald-400 font-semibold">LIVE</span>
            </div>
          </div>

          {/* Title & Description */}
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-2">
              Live Tech News & Discuss Wire
            </h1>
            <p className="text-sm sm:text-base text-[#9da3b4] leading-relaxed mb-5">
              Up-to-the-minute real-time wire connected to Google Search Grounding for frontier AI models, DeepSeek MoE silicon, Cerebras, Groq, OpenAI & Meta ASICs, and semiconductor milestones across TSMC 2nm GAA, Intel 18A PowerVia, ASML High-NA EUV, and Samsung HBM4.
            </p>

            {/* Discuss Page Primary View Switcher */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <button
                onClick={() => setMainViewTab('news')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
                  mainViewTab === 'news'
                    ? 'bg-[#e5a93c] text-slate-950 shadow-md scale-[1.02]'
                    : 'bg-[#191a21] text-slate-300 hover:text-white border border-[#2b2d39]'
                }`}
              >
                <Radio className="w-4 h-4" />
                <span>Google Live News Wire</span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                  mainViewTab === 'news' ? 'bg-slate-950/20 text-slate-950' : 'bg-slate-800 text-slate-300'
                }`}>
                  {filteredArticles.length} Stories
                </span>
              </button>

              <button
                onClick={() => setMainViewTab('discussions')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
                  mainViewTab === 'discussions'
                    ? 'bg-[#e5a93c] text-slate-950 shadow-md scale-[1.02]'
                    : 'bg-[#191a21] text-slate-300 hover:text-white border border-[#2b2d39]'
                }`}
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Community Discuss Hub</span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                  mainViewTab === 'discussions' ? 'bg-slate-950/20 text-slate-950' : 'bg-emerald-500/20 text-emerald-400'
                }`}>
                  {discussions.length} Posts
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse ml-0.5" />
              </button>
            </div>
          </div>

          {/* GOOGLE LIVE INTERACTIVE SEARCH & PRESETS PANEL */}
          {feedSourceMode === 'google_live' && mainViewTab === 'news' && (
            <div className="mb-8 p-4 sm:p-5 rounded-xl bg-[#16171d] border border-[#262833] shadow-sm space-y-4">
              
              {/* Google Live Search Bar */}
              <form onSubmit={handleGoogleSearchSubmit} className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <GoogleIcon className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={googleSearchInput}
                    onChange={(e) => setGoogleSearchInput(e.target.value)}
                    placeholder="Search live VLSI, Embedded & Robotics news (e.g. Synopsys, STM32, FreeRTOS, Unitree, ROS2, ASIC, TSMC)..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[#191a21] border border-[#2b2d39] focus:border-[#e5a93c] focus:outline-none text-xs sm:text-sm text-white placeholder-[#656a7a] transition-colors"
                  />
                  {googleSearchInput && (
                    <button
                      type="button"
                      onClick={() => {
                        setGoogleSearchInput('');
                        fetchGoogleNews('', true);
                      }}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#8c91a0] hover:text-white"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isGoogleLoading}
                  className="px-5 py-2.5 rounded-lg bg-[#e5a93c] hover:bg-[#d99b2e] text-[#111215] font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors disabled:opacity-50 cursor-pointer shrink-0 shadow-sm"
                >
                  <Search className="w-4 h-4 text-[#111215]" />
                  <span>{isGoogleLoading ? 'Connecting to Google...' : 'Query Google'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => fetchGoogleNews(googleActiveQuery, true)}
                  disabled={isGoogleLoading}
                  className="px-3.5 py-2.5 rounded-lg bg-[#191a21] hover:bg-[#20222b] text-[#f1f3f7] font-medium text-xs flex items-center justify-center gap-1.5 border border-[#2b2d39] transition-colors disabled:opacity-50 cursor-pointer shrink-0"
                  title="Force fetch fresh updates from Google"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isGoogleLoading ? 'animate-spin text-[#e5a93c]' : ''}`} />
                  <span className="hidden sm:inline">Fetch Fresh</span>
                </button>
              </form>

              {/* Quick Google Topic Filter Chips */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-xs font-mono text-[#8c91a0] font-bold flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5 text-[#e5a93c]" />
                  <span>Trending Topics:</span>
                </span>
                {GOOGLE_TECH_PRESETS.map((preset) => {
                  const isSelected = googlePresetId === preset.id;
                  return (
                    <button
                      key={preset.id}
                      onClick={() => handleSelectGooglePreset(preset)}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#e5a93c] text-[#111215] font-bold shadow-sm'
                          : 'bg-[#191a21] text-[#9da3b4] hover:text-white border border-[#2b2d39]'
                      }`}
                    >
                      {preset.label}
                    </button>
                  );
                })}
              </div>

              {/* Google Verified Grounding Sources Strip */}
              {googleGroundingSources.length > 0 && (
                <div className="pt-2 border-t border-[#262833] flex flex-wrap items-center gap-2 text-xs">
                  <span className="text-[11px] font-mono text-[#8c91a0] font-semibold flex items-center gap-1">
                    <Globe className="w-3 h-3 text-emerald-400" />
                    <span>Verified Web Sources on Google:</span>
                  </span>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {googleGroundingSources.slice(0, 6).map((source, idx) => (
                      <a
                        key={idx}
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-[#191a21] text-[11px] text-[#9da3b4] hover:text-[#e5a93c] border border-[#2b2d39] transition-colors"
                      >
                        <span className="truncate max-w-[140px]">{source.title}</span>
                        <ExternalLink className="w-2.5 h-2.5 opacity-70" />
                      </a>
                    ))}
                  </div>
                </div>
              )}

            </div>
          )}

          {/* Curriculum Engine Info Card (when in curriculum mode) */}
          {feedSourceMode === 'curriculum' && (
            <div className="mb-8 p-4 sm:p-5 rounded-xl bg-[#16171d] border border-[#262833] shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#e5a93c]" />
                  <span className="text-xs font-bold text-[#e5a93c] uppercase tracking-wider font-mono">
                    24-Hour Rolling Curriculum Engine
                  </span>
                  {cycleOffset > 0 && (
                    <span className="px-2 py-0.5 rounded bg-[#e5a93c]/10 text-[#e5a93c] border border-[#e5a93c]/30 text-[10px] font-mono">
                      Cycle +{cycleOffset} Active
                    </span>
                  )}
                </div>
                <p className="text-xs text-[#9da3b4]">
                  Curriculum news archive with structured hardware problem alignments, register maps, and architectural specs.
                </p>
                <div className="flex flex-wrap items-center gap-3 text-[11px] text-[#8c91a0] font-mono pt-1">
                  <span>• Window: <strong className="text-[#e5a93c]">72 Hours (3 Days)</strong></span>
                  <span>• Last Synced: <strong className="text-[#eff1f6]">{lastSyncTime}</strong></span>
                </div>
              </div>

              {/* Timeline selector */}
              <div className="flex flex-wrap gap-1.5">
                {timelineFilters.map(filter => (
                  <button
                    key={filter.id}
                    onClick={() => setSelectedDay(filter.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                      selectedDay === filter.id
                        ? 'bg-[#e5a93c] text-[#111215] font-bold'
                        : 'bg-[#191a21] text-[#9da3b4] hover:text-white border border-[#2b2d39]'
                    }`}
                  >
                    <span>{filter.label}</span>
                    <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-[#111215] font-mono">
                      {countsByDay[filter.id]}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              {TECH_NEWS_CATEGORIES.map(category => {
                const isSelected = selectedCategory === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => {
                      setSelectedCategory(category.id as TechNewsCategory);
                      if (feedSourceMode === 'google_live') {
                        const topic = (category.id === 'all' || category.id === 'breaking') ? 'all' : category.id;
                        setActiveTopic(topic);
                        fetchGoogleNews('', false, topic);
                      }
                    }}
                    className={`h-8 px-3 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-[#e5a93c] text-[#111215] font-semibold shadow-sm'
                        : 'bg-[#16171d] text-[#9da3b4] hover:text-white border border-[#262833] hover:bg-[#1c1d25]'
                    }`}
                  >
                    <span>{category.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Quick In-Feed Filter / Company Selector */}
            <div className="flex items-center gap-2">
              <select
                value={selectedCompany}
                onChange={(e) => setSelectedCompany(e.target.value)}
                className="h-8 px-3 rounded-lg bg-[#16171d] border border-[#262833] text-xs text-[#eff1f6] font-mono focus:outline-none focus:border-[#e5a93c] cursor-pointer"
              >
                {TECH_COMPANIES.map(company => (
                  <option key={company} value={company} className="bg-[#16171d] text-white">
                    {company}
                  </option>
                ))}
              </select>
            </div>
          </div>

        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* VIEW TAB 1: NEWS WIRE GRID */}
        {mainViewTab === 'news' && (
          <div>
            {/* News Stream Header & Count */}
            <div className="flex items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-black text-white">
                  {feedSourceMode === 'google_live' ? 'Live Updates from Google' : 'Curriculum Tech News Stream'}
                </h2>
                <span className="px-2 py-0.5 rounded-full text-xs font-mono font-bold bg-slate-800 text-slate-300">
                  {filteredArticles.length} Stories
                </span>
              </div>

              {bookmarkedIds.length > 0 && (
                <div className="text-xs text-amber-400 font-medium flex items-center gap-1">
                  <Bookmark className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{bookmarkedIds.length} Bookmarked</span>
                </div>
              )}
            </div>

            {/* Loading State for Google Live News */}
            {isGoogleLoading && filteredArticles.length === 0 ? (
              <div className="p-16 text-center rounded-2xl bg-[#16171d] border border-[#262833]">
                <RefreshCw className="w-8 h-8 text-[#e5a93c] animate-spin mx-auto mb-3" />
                <h3 className="text-base font-bold text-white mb-1">Connecting directly to Google Live News Wire...</h3>
                <p className="text-xs text-[#8c91a0] max-w-sm mx-auto">
                  Running Google Search Grounding to fetch the latest breaking semiconductor, GPU, and hardware announcements.
                </p>
              </div>
            ) : filteredArticles.length === 0 ? (
              <div className="p-12 text-center rounded-2xl bg-[#16171d] border border-[#262833]">
                <Info className="w-8 h-8 text-[#656a7a] mx-auto mb-3" />
                <h3 className="text-lg font-bold text-white mb-1">No articles found</h3>
                <p className="text-xs text-[#8c91a0] max-w-sm mx-auto mb-4">
                  No semiconductor news matching your active filters or search query.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedDay('all');
                    setSelectedCompany('All Companies');
                    setSearchQuery('');
                    if (feedSourceMode === 'google_live') {
                      fetchGoogleNews('', true);
                    }
                  }}
                  className="px-4 py-2 rounded-xl bg-[#e5a93c] hover:bg-[#d99b2e] text-[#111215] font-bold text-xs cursor-pointer"
                >
                  Reset Filters & Reload
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map(article => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    isBookmarked={bookmarkedIds.includes(article.id)}
                    onToggleBookmark={toggleBookmark}
                    onShare={handleShare}
                    onSelect={setActiveArticle}
                    isCopied={copiedId === article.id}
                    isGoogleLiveSource={feedSourceMode === 'google_live'}
                    discussionCount={discussionCountsByArticle[article.id] || 0}
                    onDiscussClick={handleOpenArticleDiscussion}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* VIEW TAB 2: COMMUNITY DISCUSSIONS CONNECTED TO GOOGLE LIVE NEWS */}
        {mainViewTab === 'discussions' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            
            {/* Discussions Top Header */}
            <div className="p-6 rounded-2xl bg-[#16171d] border border-[#262833] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <span>Google News Wire Community Discussions</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-[#8c91a0] max-w-2xl leading-relaxed">
                  Join real-time discussions with PSNACET students, VLSI faculty, and hardware architects discussing verified Google tech news, chip tapeouts, and AI hardware architecture.
                </p>
              </div>

              {/* Status Badge */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#191a21] border border-emerald-500/30 text-emerald-400 text-xs font-mono shrink-0">
                <GoogleIcon className="w-4 h-4" />
                <span>REALTIME GOOGLE GROUNDED</span>
              </div>
            </div>

            {/* Create Discussion Composer Card */}
            <div className="p-6 rounded-2xl bg-[#16171d] border border-[#262833] shadow-sm">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#262833]">
                <MessageSquarePlus className="w-4 h-4 text-[#e5a93c]" />
                <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                  Start a Discussion on a Google News Story
                </h3>
              </div>

              <form onSubmit={handlePostMainDiscussion} className="space-y-4">
                {/* Story Selector */}
                <div>
                  <label className="block text-xs font-semibold text-[#8c91a0] mb-1.5">
                    Select Live Google News Story *
                  </label>
                  <select
                    value={newDiscArticleId}
                    onChange={(e) => setNewDiscArticleId(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#191a21] border border-[#2b2d39] text-xs sm:text-sm text-white focus:outline-none focus:border-[#e5a93c] font-medium"
                  >
                    <option value="">General Google Silicon & AI Wire Discussion</option>
                    {activeArticlesList.map(art => (
                      <option key={art.id} value={art.id}>
                        [{art.company}] {art.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Discussion Title */}
                <div>
                  <label className="block text-xs font-semibold text-[#8c91a0] mb-1.5">
                    Discussion Topic / Architectural Question (Optional)
                  </label>
                  <input
                    type="text"
                    value={newDiscTitle}
                    onChange={(e) => setNewDiscTitle(e.target.value)}
                    placeholder="e.g. Subthreshold leakage in 2nm GAA vs FinFET for high-fanout clocks"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#191a21] border border-[#2b2d39] text-xs sm:text-sm text-white placeholder-[#656a7a] focus:outline-none focus:border-[#e5a93c]"
                  />
                </div>

                {/* Discussion Content */}
                <div>
                  <label className="block text-xs font-semibold text-[#8c91a0] mb-1.5">
                    Your Technical Perspective / Question / Analysis *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={newDiscContent}
                    onChange={(e) => setNewDiscContent(e.target.value)}
                    placeholder="Provide your engineering critique, architectural analysis, or questions for mentors and peers..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#191a21] border border-[#2b2d39] text-xs sm:text-sm text-white placeholder-[#656a7a] focus:outline-none focus:border-[#e5a93c]"
                  />
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-[11px] text-[#656a7a]">
                    Discussions are persistently stored in the SQLite database and visible across all student accounts.
                  </span>
                  <button
                    type="submit"
                    disabled={isPostingDiscussion || !newDiscContent.trim()}
                    className="px-5 py-2 rounded-xl bg-[#e5a93c] hover:bg-[#d99b2e] disabled:opacity-50 text-[#111215] font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isPostingDiscussion ? 'Publishing...' : 'Post to Discussion Wire'}</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Filter by News Story Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#8c91a0] font-medium">Filter Discussions by Story:</span>
                <select
                  value={selectedDiscussArticleId}
                  onChange={(e) => setSelectedDiscussArticleId(e.target.value)}
                  className="h-8 px-3 rounded-lg bg-[#191a21] border border-[#2b2d39] text-xs text-white focus:outline-none focus:border-[#e5a93c]"
                >
                  <option value="all">All News Discussions ({discussions.length})</option>
                  {activeArticlesList.map(art => (
                    <option key={art.id} value={art.id}>
                      {art.company}: {art.title.slice(0, 45)}... ({discussionCountsByArticle[art.id] || 0})
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={() => loadDiscussions(selectedDiscussArticleId)}
                className="px-3 py-1.5 rounded-lg bg-[#191a21] hover:bg-[#20222b] text-xs text-[#8c91a0] hover:text-white border border-[#2b2d39] flex items-center gap-1.5 transition-colors"
              >
                <RefreshCw className={`w-3 h-3 ${loadingDiscussions ? 'animate-spin text-[#e5a93c]' : ''}`} />
                <span>Refresh Discussions</span>
              </button>
            </div>

            {/* Discussions Stream */}
            {loadingDiscussions && discussions.length === 0 ? (
              <div className="p-12 text-center rounded-2xl bg-[#16171d] border border-[#262833]">
                <RefreshCw className="w-6 h-6 text-[#e5a93c] animate-spin mx-auto mb-2" />
                <p className="text-xs text-[#8c91a0]">Loading real-time discussions from database...</p>
              </div>
            ) : filteredDiscussions.length === 0 ? (
              <div className="p-12 text-center rounded-2xl bg-[#16171d] border border-[#262833] space-y-3">
                <MessageSquare className="w-8 h-8 text-[#656a7a] mx-auto" />
                <h4 className="text-base font-bold text-white">No discussion threads for this story yet</h4>
                <p className="text-xs text-[#8c91a0] max-w-sm mx-auto">
                  Be the first student or engineer to start a discussion thread on this announcement!
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredDiscussions.map((disc) => {
                  const linkedArticle = activeArticlesList.find(a => a.id === disc.articleId);

                  return (
                    <div
                      key={disc.id}
                      className="p-5 rounded-2xl bg-[#16171d] border border-[#262833] hover:border-[#383a48] transition-all space-y-3"
                    >
                      {/* Discussion Top Row: User & Date */}
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <img
                            src={disc.userAvatar || `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(disc.userName)}`}
                            alt=""
                            className="w-7 h-7 rounded-full bg-slate-800 border border-slate-700"
                          />
                          <div>
                            <span className="font-bold text-sm text-white block leading-tight">
                              {disc.userName}
                            </span>
                            <span className="text-[10px] text-[#656a7a] font-mono">
                              {new Date(disc.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} at {new Date(disc.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </span>
                          </div>
                        </div>

                        {/* Linked Article Tag */}
                        {linkedArticle && (
                          <button
                            onClick={() => setActiveArticle(linkedArticle)}
                            className="px-2.5 py-1 rounded-lg bg-[#191a21] hover:bg-[#20222b] text-[11px] text-[#e5a93c] border border-[#2b2d39] flex items-center gap-1.5 transition-colors max-w-xs truncate"
                            title="Click to view full Google News story"
                          >
                            <GoogleIcon className="w-3 h-3 shrink-0" />
                            <span className="truncate">{linkedArticle.company}: {linkedArticle.title}</span>
                            <ArrowUpRight className="w-3 h-3 shrink-0" />
                          </button>
                        )}
                      </div>

                      {/* Discussion Title */}
                      {disc.title && (
                        <h4 className="text-base font-bold text-white leading-snug">
                          {disc.title}
                        </h4>
                      )}

                      {/* Discussion Content */}
                      <p className="text-xs sm:text-sm text-[#9da3b4] leading-relaxed">
                        {disc.content}
                      </p>

                      {/* Discussion Bottom Actions */}
                      <div className="pt-2 border-t border-[#262833] flex items-center justify-between text-xs">
                        <button
                          onClick={(e) => handleUpvoteDiscussion(disc.id, e)}
                          className="px-3 py-1 rounded-lg bg-[#191a21] hover:bg-[#20222b] text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5 font-mono font-semibold transition-all cursor-pointer active:scale-95"
                          title="Upvote this discussion"
                        >
                          <ThumbsUp className="w-3.5 h-3.5" />
                          <span>{disc.upvotes} Upvotes</span>
                        </button>

                        {linkedArticle && (
                          <button
                            onClick={() => setActiveArticle(linkedArticle)}
                            className="text-xs text-[#e5a93c] hover:underline flex items-center gap-1"
                          >
                            <span>Read Full Story</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </button>
                        )}
                      </div>

                    </div>
                  );
                })}
              </div>
            )}

          </div>
        )}

      </div>

      {/* Full Article Reader Modal with Direct Google/Web Link */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="w-full max-w-3xl my-auto rounded-3xl bg-[#16171d] border border-[#262833] shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative animate-in fade-in zoom-in-95 duration-200">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#191a21] hover:bg-[#20222b] text-[#8c91a0] hover:text-white flex items-center justify-center border border-[#2b2d39] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Top Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-4 pr-10">
              <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider flex items-center gap-1.5 bg-[#191a21] text-[#e5a93c] border border-[#2b2d39]">
                {activeArticle.category === 'ai_creation' ? <Brain className="w-3.5 h-3.5" /> :
                 activeArticle.category === 'semiconductor' ? <Cpu className="w-3.5 h-3.5" /> :
                 activeArticle.category === 'new_tech' ? <Layers className="w-3.5 h-3.5" /> : <Rocket className="w-3.5 h-3.5" />}
                {activeArticle.category === 'ai_creation' ? 'AI Creation & Generative Silicon' :
                 activeArticle.category === 'semiconductor' ? 'Semiconductor & Advanced Node' :
                 activeArticle.category === 'new_tech' ? 'New Technology & Node' : 'Major Hardware Launch'}
              </span>

              <span className="px-3 py-1 rounded-full bg-[#191a21] text-[#e5a93c] border border-[#2b2d39] text-xs font-mono font-bold">
                {activeArticle.company}
              </span>

              <span className="text-xs text-[#e5a93c] font-mono font-medium flex items-center gap-1 ml-auto">
                <Clock className="w-3.5 h-3.5 text-[#e5a93c]" />
                {activeArticle.relativeTime} ({activeArticle.date})
              </span>
            </div>

            {/* Modal Title & Subtitle */}
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug mb-2">
              {activeArticle.title}
            </h2>
            <p className="text-sm sm:text-base text-[#e5a93c] font-medium mb-6">
              {activeArticle.subtitle}
            </p>

            {/* Executive Summary Box */}
            <div className="p-4 rounded-2xl bg-[#191a21] border border-[#2b2d39] mb-6 text-xs sm:text-sm text-[#eff1f6] leading-relaxed">
              <span className="font-bold text-[#e5a93c] block mb-1">Executive Summary:</span>
              {activeArticle.summary}
            </div>

            {/* Spec Sheet Table */}
            {activeArticle.specSheet && activeArticle.specSheet.length > 0 && (
              <div className="mb-6">
                <h4 className="text-xs font-bold text-[#8c91a0] uppercase tracking-wider mb-2.5 flex items-center gap-1.5 font-mono">
                  <Layers className="w-3.5 h-3.5 text-[#e5a93c]" />
                  <span>Key Specifications & Architecture Parameters</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeArticle.specSheet.map((spec, sIdx) => (
                    <div key={sIdx} className="p-3 rounded-xl bg-[#191a21] border border-[#2b2d39] flex items-center justify-between">
                      <span className="text-xs text-[#8c91a0] font-medium">{spec.label}</span>
                      <span className="text-xs text-[#e5a93c] font-mono font-bold">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Highlights */}
            {activeArticle.keyHighlights && activeArticle.keyHighlights.length > 0 && (
              <div className="mb-6">
                <h4 className="text-xs font-bold text-[#8c91a0] uppercase tracking-wider mb-2.5 flex items-center gap-1.5 font-mono">
                  <Zap className="w-3.5 h-3.5 text-[#e5a93c]" />
                  <span>Architectural & Manufacturing Highlights</span>
                </h4>
                <div className="space-y-2">
                  {activeArticle.keyHighlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#191a21] border border-[#2b2d39] text-xs text-[#eff1f6]">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technical Deep Dive */}
            {activeArticle.technicalDeepDive && (
              <div className="mb-6">
                <h4 className="text-xs font-bold text-[#8c91a0] uppercase tracking-wider mb-2.5 flex items-center gap-1.5 font-mono">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#e5a93c]" />
                  <span>Technical Deep-Dive Analysis</span>
                </h4>
                <div className="p-4 rounded-2xl bg-[#191a21] border border-[#2b2d39] text-xs sm:text-sm text-[#9da3b4] leading-relaxed space-y-3 font-normal">
                  {activeArticle.technicalDeepDive.split('\n\n').map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            )}

            {/* Industry Impact */}
            {activeArticle.industryImpact && (
              <div className="p-4 rounded-xl bg-[#191a21] border border-[#2b2d39] mb-6">
                <div className="text-xs font-bold text-[#e5a93c] mb-1 flex items-center gap-1.5 font-mono">
                  <Building2 className="w-3.5 h-3.5 text-[#e5a93c]" />
                  <span>Semiconductor Industry Impact</span>
                </div>
                <p className="text-xs text-[#9da3b4] leading-relaxed">
                  {activeArticle.industryImpact}
                </p>
              </div>
            )}

            {/* Live Community Discussion for this Announcement */}
            <div className="p-5 rounded-2xl bg-[#191a21] border border-[#2b2d39] mb-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#262833]">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <MessageSquare className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider font-mono">
                    Community Discussion ({modalDiscussions.length})
                  </h4>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-mono">
                  <GoogleIcon className="w-3 h-3" />
                  <span>Grounded Discussion Thread</span>
                </div>
              </div>

              {/* Quick Reply Form */}
              <form onSubmit={handlePostModalComment} className="space-y-2">
                <textarea
                  rows={2}
                  value={modalCommentText}
                  onChange={(e) => setModalCommentText(e.target.value)}
                  placeholder={`Share your technical analysis or question on ${activeArticle.company}'s announcement...`}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#16171d] border border-[#2b2d39] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#e5a93c]"
                />
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isPostingModalComment || !modalCommentText.trim()}
                    className="px-3.5 py-1.5 rounded-lg bg-[#e5a93c] hover:bg-[#d99b2e] disabled:opacity-50 text-[#111215] font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
                  >
                    <Send className="w-3 h-3" />
                    <span>{isPostingModalComment ? 'Posting...' : 'Post Analysis'}</span>
                  </button>
                </div>
              </form>

              {/* Discussion Comments List */}
              <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
                {modalDiscussions.length === 0 ? (
                  <p className="text-xs text-[#656a7a] italic py-2">
                    No community discussions on this announcement yet. Post your technical thoughts above!
                  </p>
                ) : (
                  modalDiscussions.map(disc => (
                    <div key={disc.id} className="p-3.5 rounded-xl bg-[#16171d] border border-[#2b2d39] text-xs space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <img
                            src={disc.userAvatar || `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(disc.userName)}`}
                            alt=""
                            className="w-5 h-5 rounded-full bg-slate-800"
                          />
                          <span className="font-semibold text-slate-200">{disc.userName}</span>
                        </div>
                        <span className="text-[10px] text-slate-500 font-mono">
                          {new Date(disc.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                      {disc.title && <h5 className="font-bold text-[#e5a93c] text-xs">{disc.title}</h5>}
                      <p className="text-slate-300 leading-relaxed text-[11px]">{disc.content}</p>
                      <div className="flex items-center justify-end pt-1">
                        <button
                          onClick={() => handleUpvoteDiscussion(disc.id)}
                          className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-emerald-400 font-mono transition-colors"
                        >
                          <ThumbsUp className="w-3 h-3" />
                          <span>{disc.upvotes}</span>
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Bottom Source & Action Bar with Direct External Link */}
            <div className="pt-4 border-t border-[#262833] flex flex-wrap items-center justify-between gap-4">
              <div className="text-[11px] text-[#8c91a0] font-mono flex items-center gap-1.5">
                <GoogleIcon className="w-3.5 h-3.5" />
                <span>Verified Source:</span>
                <span className="text-white font-semibold">{activeArticle.source}</span>
              </div>

              <div className="flex items-center gap-3">
                {activeArticle.url && (
                  <a
                    href={activeArticle.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-[#191a21] hover:bg-[#20222b] text-[#e5a93c] border border-[#2b2d39] text-xs font-bold flex items-center gap-1.5 transition-all"
                  >
                    <span>Read on Source</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                <button
                  onClick={() => toggleBookmark(activeArticle.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                    bookmarkedIds.includes(activeArticle.id)
                      ? 'bg-[#e5a93c]/20 text-[#e5a93c] border border-[#e5a93c]/40'
                      : 'bg-[#191a21] text-[#eff1f6] border border-[#2b2d39] hover:text-white'
                  }`}
                >
                  <Bookmark className="w-3.5 h-3.5" />
                  <span>{bookmarkedIds.includes(activeArticle.id) ? 'Saved' : 'Bookmark'}</span>
                </button>

                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-5 py-2 rounded-xl bg-[#e5a93c] hover:bg-[#d99b2e] text-[#111215] font-bold text-xs transition-all cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
});

NewsPage.displayName = 'NewsPage';
