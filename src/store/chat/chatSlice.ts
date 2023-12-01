import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';

import { Message } from '../../types/interfaces';
import { MessageTypeEnum } from '../../types/enums';

export interface ChatState {
  messages: Message[];
}

const initialState: ChatState = {
  messages: [
    {
      id: nanoid(),
      messageType: MessageTypeEnum.BOT,
      title: 'Hello, I am a bot!',
      content: 'I am here to help you with your questions.',
    },
  ],
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);
    },
    clearMessages: (state) => {
      state.messages = [];
    },
  },
});

export const { addMessage, clearMessages } = chatSlice.actions;
