import React from 'react';
import { Message as MessageType } from '../types/chat';
import { formatTimestamp } from '../utils/formatters';
import { Check, CheckCheck, AlertCircle, RotateCcw } from 'lucide-react';

interface MessageProps {
  message: MessageType;
  onRetry?: (messageId: string) => void;
}

export const Message: React.FC<MessageProps> = ({ message, onRetry }) => {
  const isUser = message.sender === 'user';
  
  const getStatusIcon = () => {
    if (message.sender === 'bot') return null;
    
    switch (message.status) {
      case 'sending':
        return <Check className="w-4 h-4 text-purple-400" />;
      case 'sent':
        return <CheckCheck className="w-4 h-4 text-purple-500" />;
      case 'error':
        return <AlertCircle className="w-4 h-4 text-pink-500" />;
      default:
        return null;
    }
  };

  return (
    <div className={`flex items-start space-x-2 sm:space-x-3 p-3 sm:p-4 animate-fade-in ${isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
      {!isUser && (
        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
          <div className="w-2 h-2 sm:w-4 sm:h-4 bg-white rounded-full"></div>
        </div>
      )}
      
      <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} max-w-[75%] sm:max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl`}>
        <div
          className={`px-3 sm:px-4 py-2 sm:py-3 rounded-2xl shadow-sm border transition-all duration-200 ${
            isUser
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-br-md border-transparent'
              : 'bg-white text-purple-800 rounded-bl-md border-purple-100 hover:shadow-md'
          } ${message.status === 'error' ? 'border-pink-200 bg-pink-50' : ''}`}
        >
          <p className="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
          
          {message.status === 'error' && onRetry && (
            <button
              onClick={() => onRetry(message.id)}
              className="flex items-center space-x-1 mt-2 text-xs text-pink-600 hover:text-pink-700 transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Retry</span>
            </button>
          )}
        </div>
        
        <div className={`flex items-center space-x-1 mt-1 ${isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
          <span className="text-xs text-purple-400">{formatTimestamp(message.timestamp)}</span>
          {getStatusIcon()}
        </div>
      </div>

      {isUser && (
        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
          <div className="w-2 h-2 sm:w-4 sm:h-4 bg-white rounded-full"></div>
        </div>
      )}
    </div>
  );
};