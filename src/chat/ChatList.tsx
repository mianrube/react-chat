import { useEffect, useRef } from 'react';
import { useAppSelector } from '../store';

import { ChatMessage } from '.';
import { Message } from '../types/interfaces';

export const ChatList = () => {
  const { messages } = useAppSelector((state) => state.chat);
  const endOfMessagesRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <>
      {messages.map(({ id, messageType, title, content }: Message) => (
        <ChatMessage
          key={id}
          message={{ id, messageType, title, content }}
        />
      ))}
      <div ref={endOfMessagesRef} />
    </>
  );
};
