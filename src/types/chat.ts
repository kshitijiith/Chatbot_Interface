export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  status?: 'sending' | 'sent' | 'error';
}

export interface ChatState {
  messages: Message[];
  isTyping: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface ApiResponse {
  message: string;
  success: boolean;
  error?: string;
}