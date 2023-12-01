import { useEffect, useRef } from 'react';
import { useAppSelector } from '../store';

import { ChatMessage } from '.';
import { Message } from '../types/interfaces';
import { Box } from '@mui/material';

export const ChatList = () => {
  const { messages } = useAppSelector((state) => state.chat);
  const endOfMessagesRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <Box>
      {messages.map(({ id, messageType, title, content }: Message) => (
        <Box key={id}>
          <ChatMessage message={{ id, messageType, title, content }} />
        </Box>
      ))}
      <div ref={endOfMessagesRef} />
    </Box>
  );
};
