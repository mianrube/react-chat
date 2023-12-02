import { Box, Typography } from '@mui/material';
import { ChatList, InputPrompt } from '.';

export const Chat = () => {
  return (
    <Box
      maxWidth="xl"
      sx={{ background: 'aliceblue' }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Box
          sx={{
            position: 'sticky',
            top: 0,
            width: '100%',
            padding: '20px',
            borderBottom: '1px solid #ccc',
            backgroundColor: 'Teal',
            color: 'white',
          }}
        >
          <Typography variant="h3">Ejemplo de chat</Typography>
        </Box>
        <Box sx={{ overflowY: 'auto', flexGrow: '1', marginTop: '0px', marginBottom: '90px' }}>
          <ChatList />
        </Box>
        <Box sx={{ position: 'fixed', bottom: '5px', width: '100%', display: 'flex', justifyContent: 'center' }}>
          <InputPrompt />
        </Box>
      </Box>
    </Box>
  );
};
