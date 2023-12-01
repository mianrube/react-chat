import { FormEvent, useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';

import { useAppDispatch } from '../store';
import { addMessage } from '../store/chat';

import { MessageTypeEnum } from '../types/enums';
import { Message } from '../types/interfaces';

export const InputPromt = () => {
  const dispatch = useAppDispatch();

  const [prompt, setPrompt] = useState<string>('');

  const handleChangePromt = (event: FormEvent<HTMLInputElement>) => {
    setPrompt(event.currentTarget.value);
  };

  const handleSubmitPrompt = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (prompt === '') {
      return;
    }

    const randomGuidMyself = nanoid();
    const newMessageMyself: Message = {
      id: randomGuidMyself,
      messageType: MessageTypeEnum.MYSELF,
      title: `Title ${randomGuidMyself}`,
      content: prompt,
    };

    dispatch(addMessage(newMessageMyself));
    setPrompt('');

    // Simulate bot response
    const randomGuidBod = nanoid();
    const newMessageBot: Message = {
      id: randomGuidBod,
      messageType: MessageTypeEnum.BOT,
      title: `Title ${randomGuidBod}`,
      content: `Respuesta a ${prompt}`,
    };
    setTimeout(() => {
      dispatch(addMessage(newMessageBot));
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmitPrompt}>
      <input
        type="text"
        name="promt"
        value={prompt}
        onChange={handleChangePromt}
      />
      <button type="submit">Send</button>
    </form>
  );
};
