import { Box, Stack, Typography } from '@mui/material';
import { ChatList, InputPrompt } from '.';
import { Psychology } from '@mui/icons-material';

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
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
          >
            <Psychology sx={{ fontSize: 50 }} />
            <Typography variant="h3">Mi propia IA</Typography>
          </Stack>
        </Box>
        <Box sx={{ overflowY: 'auto', flexGrow: '1', marginTop: '0px', marginBottom: '80px' }}>
          <ChatList />
        </Box>
        <Box sx={{ position: 'fixed', bottom: '0px', width: '100%', display: 'flex', justifyContent: 'center' }}>
          <InputPrompt />
        </Box>
      </Box>
    </Box>
  );
};
