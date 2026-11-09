import { Problem } from '../types';

export interface AICopilotRequest {
  prompt?: string;
  code?: string;
  problemContext?: Partial<Problem>;
  taskType?: 'explain_code' | 'debug' | 'generate_waveform_hint' | 'general' | 'generate_problem';
}

export interface AICopilotResponse {
  success: boolean;
  reply: string;
  error?: string;
}

export const aiService = {
  async askCopilot(req: AICopilotRequest): Promise<AICopilotResponse> {
    try {
      const response = await fetch('/api/ai/copilot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req)
      });

      const data = await response.json();
      if (!response.ok) {
        return {
          success: false,
          reply: '',
          error: data.error || 'Server error communicating with Silicon Copilot API.'
        };
      }

      return {
        success: true,
        reply: data.reply || 'No output generated.'
      };
    } catch (e: any) {
      console.error('Network error in askCopilot:', e);
      return {
        success: false,
        reply: '',
        error: e.message || 'Network error connecting to backend AI service.'
      };
    }
  }
};
