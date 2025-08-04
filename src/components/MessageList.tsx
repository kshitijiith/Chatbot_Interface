import React, { useEffect, useRef } from 'react';
import { Message } from './Message';
import { TypingIndicator } from './TypingIndicator';
import { Message as MessageType } from '../types/chat';
import { ChevronDown } from 'lucide-react';

interface MessageListProps {
  messages: MessageType[];
  isTyping: boolean;
  onRetry: (messageId: string) => void;
  messagesEndRef: React.RefObject<HTMLDivElement>;
  onScrollToBottom: () => void;
}

export const MessageList: React.FC<MessageListProps> = ({
  messages,
  isTyping,
  onRetry,
  messagesEndRef,
  onScrollToBottom
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showScrollButton, setShowScrollButton] = React.useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const isNearBottom = scrollHeight - scrollTop - clientHeight < 100;
      setShowScrollButton(!isNearBottom);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative flex-1 overflow-hidden">
      <div
        ref={containerRef}
        className="h-full overflow-y-auto scroll-smooth bg-gradient-to-b from-purple-50/50 to-pink-50/30"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#c084fc transparent'
        }}
      >
        <div className="min-h-full flex flex-col justify-end">
          {messages.map((message) => (
            <Message
              key={message.id}
              message={message}
              onRetry={onRetry}
            />
          ))}
          
          {isTyping && <TypingIndicator />}
          
          <div ref={messagesEndRef} />
        </div>
      </div>

      {showScrollButton && (
        <button
          onClick={onScrollToBottom}
          className="absolute bottom-4 right-4 w-10 h-10 bg-white border border-purple-200 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center text-purple-600 hover:text-purple-800"
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};