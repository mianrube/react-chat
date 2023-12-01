import { Avatar, Card, CardContent, CardHeader, Typography, Box } from '@mui/material';
import { MessageTypeEnum } from '../types/enums';
import { Message } from '../types/interfaces';

export interface ChatMessageProps {
  message: Message;
}

export const ChatMessage = ({ message }: ChatMessageProps) => {
  return (
    <Box
      sx={{
        maxWidth: '45vw',
        minWidth: '300px',
        marginBottom: '15px',
        marginLeft: message.messageType === MessageTypeEnum.BOT ? '0px' : 'auto',
        marginRight: message.messageType === MessageTypeEnum.BOT ? 'auto' : '0px',
      }}
    >
      <Card>
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: 'navy' }}>{message.messageType === MessageTypeEnum.BOT ? 'B' : 'M'}</Avatar>}
          title={message.title}
          subheader={`Id: ${message.id}`}
        />
        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
          >
            {message.content}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
