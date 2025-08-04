import React from 'react';
import { Bot, MoreVertical, RotateCcw } from 'lucide-react';

interface ChatHeaderProps {
  onClearHistory: () => void;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({ onClearHistory }) => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 sm:px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="relative">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
            <Bot className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-400 border-2 border-white rounded-full"></div>
        </div>
        <div>
          <h1 className="text-base sm:text-lg font-semibold text-white">AI Assistant</h1>
          <p className="text-xs sm:text-sm text-purple-100">Online • Ready to help</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-1 sm:space-x-2">
        <button
          onClick={onClearHistory}
          className="p-1.5 sm:p-2 text-purple-100 hover:text-white hover:bg-purple-600/30 rounded-lg transition-all duration-200"
          title="Clear chat history"
        >
          <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <button className="p-1.5 sm:p-2 text-purple-100 hover:text-white hover:bg-purple-600/30 rounded-lg transition-all duration-200">
          <MoreVertical className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  );
};