import { MessageTypeEnum } from '../types/enums';
import { Message } from '../types/interfaces';

import './ChatMessage.css';

export interface ChatMessageProps {
  message: Message;
}

export const ChatMessage = ({ message }: ChatMessageProps) => {
  return (
    <>
      <div className={message.messageType === MessageTypeEnum.BOT ? 'align-left' : 'align-right'}>
        <h3>
          {message.title} - {message.messageType.toString()}
        </h3>
        <p>{message.content}</p>
      </div>
    </>
  );
};
