import { ChangeEvent, FormEvent, useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';

import { useAppDispatch } from '../store';
import { addMessage } from '../store/chat';

import { MessageTypeEnum } from '../types/enums';
import { Message } from '../types/interfaces';
import { Box, IconButton, TextField } from '@mui/material';
import { Send } from '@mui/icons-material';

export const InputPrompt = () => {
  const dispatch = useAppDispatch();

  const [prompt, setPrompt] = useState<string>('');

  const handleChangePromt = (event: ChangeEvent<HTMLInputElement>) => {
    setPrompt(event.target.value);
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
      content: `Respuesta a ${prompt} - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore earum mollitia, qui omnis accusamus voluptatem, modi dignissimos perspiciatis odio ratione numquam harum nemo hic est, libero blanditiis. Error, ipsum sed!`,
    };
    setTimeout(() => {
      dispatch(addMessage(newMessageBot));
    }, 1500);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmitPrompt}
      sx={{ padding: '10px' }}
    >
      <TextField
        variant="outlined"
        size="small"
        sx={{ width: '40vw', minWidth: '300px', backgroundColor: 'white' }}
        name="promt"
        value={prompt}
        onChange={handleChangePromt}
      />
      <IconButton
        type="submit"
        sx={{ marginLeft: '10px' }}
        color="primary"
      >
        <Send />
      </IconButton>
    </Box>
  );
};
