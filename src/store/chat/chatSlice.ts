import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';

import { Message } from '../../types/interfaces';
import { MessageTypeEnum } from '../../types/enums';

export interface ChatState {
  messages: Message[];
  isWaitingResponse: boolean;
}

const initialState: ChatState = {
  messages: [
    {
      id: nanoid(),
      messageType: MessageTypeEnum.BOT,
      title: 'Hola, soy tu IA!',
      content: 'Estoy aquí para resolver tus dudas.',
    },
  ],
  isWaitingResponse: false,
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
    setIsWaitingResponse: (state, action: PayloadAction<boolean>) => {
      state.isWaitingResponse = action.payload;
    },
  },
});

export const { addMessage, clearMessages, setIsWaitingResponse } = chatSlice.actions;
