import { useState, useCallback, useRef, useEffect } from 'react';
import { Message, ChatState } from '../types/chat';
import { ChatService } from '../services/api';
import { generateMessageId } from '../utils/formatters';

export const useChat = () => {
  const [state, setState] = useState<ChatState>({
    messages: [
      {
        id: generateMessageId(),
        content: "Hello! I'm your AI assistant. I'm here to help answer your questions and have a conversation with you. How can I assist you today?",
        sender: 'bot',
        timestamp: new Date(),
        status: 'sent'
      }
    ],
    isTyping: false,
    isLoading: false,
    error: null
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [state.messages, scrollToBottom]);

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: generateMessageId(),
      content: content.trim(),
      sender: 'user',
      timestamp: new Date(),
      status: 'sending'
    };

    setState(prev => ({
      ...prev,
      messages: [...prev.messages, userMessage],
      error: null
    }));

    // Update message status to sent
    setState(prev => ({
      ...prev,
      messages: prev.messages.map(msg => 
        msg.id === userMessage.id ? { ...msg, status: 'sent' } : msg
      ),
      isTyping: true,
      isLoading: true
    }));

    try {
      const response = await ChatService.sendMessage(content);

      setState(prev => ({
        ...prev,
        isTyping: false,
        isLoading: false
      }));

      if (response.success) {
        const botMessage: Message = {
          id: generateMessageId(),
          content: response.message,
          sender: 'bot',
          timestamp: new Date(),
          status: 'sent'
        };

        setState(prev => ({
          ...prev,
          messages: [...prev.messages, botMessage]
        }));
      } else {
        setState(prev => ({
          ...prev,
          error: response.error || 'Failed to send message',
          messages: prev.messages.map(msg =>
            msg.id === userMessage.id ? { ...msg, status: 'error' } : msg
          )
        }));
      }
    } catch (error) {
      setState(prev => ({
        ...prev,
        isTyping: false,
        isLoading: false,
        error: 'Network error occurred',
        messages: prev.messages.map(msg =>
          msg.id === userMessage.id ? { ...msg, status: 'error' } : msg
        )
      }));
    }
  }, []);

  const clearHistory = useCallback(() => {
    setState({
      messages: [
        {
          id: generateMessageId(),
          content: "Hello! I'm your AI assistant. I'm here to help answer your questions and have a conversation with you. How can I assist you today?",
          sender: 'bot',
          timestamp: new Date(),
          status: 'sent'
        }
      ],
      isTyping: false,
      isLoading: false,
      error: null
    });
  }, []);

  const retryMessage = useCallback((messageId: string) => {
    const message = state.messages.find(msg => msg.id === messageId);
    if (message && message.sender === 'user') {
      sendMessage(message.content);
    }
  }, [state.messages, sendMessage]);

  return {
    ...state,
    sendMessage,
    clearHistory,
    retryMessage,
    messagesEndRef,
    scrollToBottom
  };
};