import React from 'react';
import { ChatHeader } from './components/ChatHeader';
import { MessageList } from './components/MessageList';
import { ChatInput } from './components/ChatInput';
import { useChat } from './hooks/useChat';

function App() {
  const {
    messages,
    isTyping,
    isLoading,
    error,
    sendMessage,
    clearHistory,
    retryMessage,
    messagesEndRef,
    scrollToBottom
  } = useChat();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 flex flex-col">
      <div className="w-full h-screen flex flex-col md:max-w-4xl md:h-[90vh] md:max-h-[800px] md:mx-auto md:my-auto bg-white md:rounded-2xl md:shadow-2xl overflow-hidden">
        <ChatHeader onClearHistory={clearHistory} />
        
        <MessageList
          messages={messages}
          isTyping={isTyping}
          onRetry={retryMessage}
          messagesEndRef={messagesEndRef}
          onScrollToBottom={scrollToBottom}
        />
        
        <ChatInput
          onSendMessage={sendMessage}
          isLoading={isLoading}
          error={error}
        />
      </div>
    </div>
  );
}

export default App;