import { ApiResponse } from '../types/chat';

const API_BASE_URL = import.meta.env.VITE_REACT_APP_API_URL || 'http://localhost:3001/api';

export class ChatService {
  static async sendMessage(message: string): Promise<ApiResponse> {
    try {
      // Simulate API delay for demonstration
      await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
      
      // Simulate different responses based on message content
      if (message.toLowerCase().includes('error')) {
        throw new Error('Simulated API error');
      }
      
      if (message.toLowerCase().includes('hello') || message.toLowerCase().includes('hi')) {
        return {
          message: "Hello! I'm here to help you with any questions you might have. How can I assist you today?",
          success: true
        };
      }
      
      if (message.toLowerCase().includes('weather')) {
        return {
          message: "I'd be happy to help with weather information! However, I don't have access to real-time weather data right now. You might want to check a weather app or website for the most current conditions.",
          success: true
        };
      }
      
      // Default response
      return {
        message: `I received your message: "${message}". This is a demo response. In a real application, this would connect to your actual chatbot API endpoint.`,
        success: true
      };
      
      /* 
      // Uncomment this block when connecting to your real API:
      const response = await fetch(`${API_BASE_URL}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
      */
      
    } catch (error) {
      console.error('API Error:', error);
      return {
        message: '',
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      };
    }
  }
}