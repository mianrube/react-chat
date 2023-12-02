import { ChangeEvent, FormEvent, useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';

import { useAppDispatch, useAppSelector } from '../store';
import { addMessage, setIsWaitingResponse } from '../store/chat';

import { MessageTypeEnum } from '../types/enums';
import { Message } from '../types/interfaces';
import { Box, IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import { Send } from '@mui/icons-material';

export const InputPrompt = () => {
  const dispatch = useAppDispatch();
  const { isWaitingResponse } = useAppSelector((state) => state.chat);

  const [prompt, setPrompt] = useState<string>('');

  const handleChangePromt = (event: ChangeEvent<HTMLInputElement>) => {
    setPrompt(event.target.value);
  };

  const handleSubmitPrompt = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(setIsWaitingResponse(true));

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
      content: `Respuesta a ${prompt} - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore earum mollitia, qui omnis accusamus voluptatem, modi dignissimos perspiciatis odio ratione numquam harum nemo hic est, libero blanditiis. Error, ipsum sed!`,
    };
    setTimeout(() => {
      dispatch(addMessage(newMessageBot));
      dispatch(setIsWaitingResponse(false));
    }, 1500);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmitPrompt}
      sx={{ padding: '10px 10px 20px 10px' }}
    >
      <OutlinedInput
        key={isWaitingResponse ? 'disabled' : 'enabled'}
        autoFocus
        sx={{ width: '60vw', minWidth: '300px', maxWidth: '600px', backgroundColor: 'white' }}
        name="promt"
        value={prompt}
        onChange={handleChangePromt}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              type="submit"
              sx={{ marginLeft: '10px' }}
              color="primary"
              disabled={isWaitingResponse}
            >
              <Send />
            </IconButton>
          </InputAdornment>
        }
        disabled={isWaitingResponse}
      />
    </Box>
  );
};
