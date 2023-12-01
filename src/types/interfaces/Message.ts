import { MessageTypeEnum } from '../enums';

export interface Message {
  id: string;
  messageType: MessageTypeEnum;
  title: string;
  content: string;
}
