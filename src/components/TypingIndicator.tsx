import React from 'react';

export const TypingIndicator: React.FC = () => {
  return (
    <div className="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 animate-fade-in">
      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
        <div className="w-2 h-2 sm:w-4 sm:h-4 bg-white rounded-full"></div>
      </div>
      <div className="bg-white rounded-2xl rounded-bl-md px-3 sm:px-4 py-2 sm:py-3 shadow-sm border border-purple-100">
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
};