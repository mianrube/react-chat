import { GlobalStyles } from '@mui/material';

import { Chat } from './chat';

import './App.css';

export const App = () => {
  return (
    <>
      <GlobalStyles
        styles={{
          '*::-webkit-scrollbar': {
            width: '6px',
          },
          '*::-webkit-scrollbar-track': {
            backgroundColor: 'transparent',
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: 'darkgray',
            borderRadius: '4px',
          },
        }}
      />
      <Chat />
    </>
  );
};
