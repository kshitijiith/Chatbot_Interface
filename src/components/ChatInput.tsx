import React, { useState, useRef, useEffect } from 'react';
import { Send, Loader2 } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
  error: string | null;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading, error }) => {
  const [message, setMessage] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message);
      setMessage('');
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      const newHeight = Math.min(textarea.scrollHeight, 120);
      textarea.style.height = `${newHeight}px`;
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [message]);

  return (
    <div className="bg-white border-t border-purple-200 p-3 sm:p-4">
      {error && (
        <div className="mb-3 p-3 bg-pink-50 border border-pink-200 rounded-lg">
          <p className="text-sm text-pink-600">{error}</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="flex items-end space-x-2 sm:space-x-3">
        <div className="flex-1">
          <textarea
            ref={textareaRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-purple-50 border border-purple-200 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 placeholder-purple-400 text-sm sm:text-base"
            style={{ 
              minHeight: '44px',
              maxHeight: '120px'
            }}
            disabled={isLoading}
          />
        </div>
        
        <button
          type="submit"
          disabled={!message.trim() || isLoading}
          className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
        >
          {isLoading ? (
            <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
          ) : (
            <Send className="w-4 h-4 sm:w-5 sm:h-5" />
          )}
        </button>
      </form>
      
      <p className="text-xs text-purple-400 mt-2 text-center hidden sm:block">
        Press Enter to send • Shift+Enter for new line
      </p>
    </div>
  );
};