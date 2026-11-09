import { TechNewsItem } from '../data/techNewsData';

export interface GoogleGroundingSource {
  title: string;
  url: string;
}

export interface GoogleLiveNewsResponse {
  success: boolean;
  source: 'google_live_search' | 'live_engineering_wire' | 'cache' | 'curriculum_fallback';
  connectedToGoogle: boolean;
  queryUsed: string;
  lastUpdated: string;
  articles: TechNewsItem[];
  searchQueries?: string[];
  groundingSources?: GoogleGroundingSource[];
  error?: string;
}

const CACHE_KEY = 'silicon_arena_google_live_news_cache';

export const googleNewsService = {
  /**
   * Fetch live tech news directly connected to Google Search Grounding and Verified Real-Time Engineering Wires
   */
  async fetchLiveTechNews(options: {
    query?: string;
    topic?: string;
    forceRefresh?: boolean;
  } = {}): Promise<GoogleLiveNewsResponse> {
    const { query = '', topic = 'all', forceRefresh = false } = options;

    try {
      const response = await fetch('/api/news/google-live', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query,
          topic,
          forceRefresh
        })
      });

      if (!response.ok) {
        throw new Error(`Google News API returned HTTP ${response.status}`);
      }

      const data: GoogleLiveNewsResponse = await response.json();
      
      if (data.success && data.articles && data.articles.length > 0) {
        try {
          localStorage.setItem(CACHE_KEY, JSON.stringify({
            data,
            timestamp: Date.now()
          }));
        } catch {
          // Ignore localStorage errors
        }
      }

      return data;
    } catch (err: any) {
      console.warn('Google live news fetch error, checking local cache:', err);
      
      // Attempt cache recovery
      try {
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const parsed = JSON.parse(cached);
          if (parsed?.data?.articles?.length > 0) {
            return {
              ...parsed.data,
              source: 'cache',
              error: 'Displaying cached Google news due to connection latency.'
            };
          }
        }
      } catch {
        // Fallback
      }

      return {
        success: false,
        source: 'curriculum_fallback',
        connectedToGoogle: false,
        queryUsed: query || topic,
        lastUpdated: new Date().toISOString(),
        articles: [],
        error: err.message || 'Failed to connect to Google Live News.'
      };
    }
  },

  /**
   * Get cached news immediately for instant UI render
   */
  getCachedNews(): TechNewsItem[] | null {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        return parsed?.data?.articles || null;
      }
    } catch {
      return null;
    }
    return null;
  }
};
