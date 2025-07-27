// API Client utility for frontend integration
const API_BASE_URL = 'https://arifian853-aidev-kmm-b8.hf.space/api';

interface MessageData {
  type: 'mentor' | 'general';
  content: string;
  mentions?: string[];
  recipient?: string;
}

interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
}

interface Message {
  _id: string;
  type: 'mentor' | 'general';
  content: string;
  mentions: string[];
  recipient?: string;
  isAnonymous: boolean;
  createdAt: string;
  updatedAt: string;
}

interface PaginatedMessages {
  messages: Message[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalMessages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

class ApiClient {
  private baseURL: string;

  constructor(baseURL = API_BASE_URL) {
    this.baseURL = baseURL;
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
    const url = `${this.baseURL}${endpoint}`;
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    if (config.body && typeof config.body === 'object') {
      config.body = JSON.stringify(config.body);
    }

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || `HTTP error! status: ${response.status}`);
      }

      return data;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Messages API
  async getMessages(params: Record<string, string | number> = {}): Promise<ApiResponse<PaginatedMessages>> {
    const queryString = new URLSearchParams(
      Object.entries(params).map(([key, value]) => [key, String(value)])
    ).toString();
    return this.request<PaginatedMessages>(`/messages${queryString ? `?${queryString}` : ''}`);
  }

  async createMessage(messageData: MessageData): Promise<ApiResponse<Message>> {
    return this.request<Message>('/messages', {
      method: 'POST',
      body: JSON.stringify(messageData),
    });
  }

  async getMessageById(id: string): Promise<ApiResponse<Message>> {
    return this.request<Message>(`/messages/${id}`);
  }

  async deleteMessage(id: string): Promise<ApiResponse<void>> {
    return this.request<void>(`/messages/${id}`, {
      method: 'DELETE',
    });
  }

  async getMessagesByMention(name: string, params: Record<string, string | number> = {}): Promise<ApiResponse<{ messages: Message[]; mentionedName: string; totalMentions: number }>> {
    const queryString = new URLSearchParams(
      Object.entries(params).map(([key, value]) => [key, String(value)])
    ).toString();
    return this.request(`/messages/mentions/${encodeURIComponent(name)}${queryString ? `?${queryString}` : ''}`);
  }

  async getStats(): Promise<ApiResponse<{
    totalMessages: number;
    totalMentorMessages: number;
    totalGeneralMessages: number;
    totalMentions: number;
  }>> {
    return this.request('/stats');
  }

  async healthCheck(): Promise<ApiResponse<{ status: string }>> {
    return this.request('/health');
  }
}

export default new ApiClient();
export type { Message, MessageData, ApiResponse, PaginatedMessages };