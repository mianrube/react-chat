import { Avatar, Card, CardContent, CardHeader, Typography, Box, IconButton } from '@mui/material';
import { MessageTypeEnum } from '../types/enums';
import { Message } from '../types/interfaces';
import { ContentCopy, ContentPaste, ThumbDownOffAlt, ThumbUpOffAlt } from '@mui/icons-material';

export interface ChatMessageProps {
  message: Message;
}

export const ChatMessage = ({ message }: ChatMessageProps) => {
  return (
    <Box
      sx={{
        maxWidth: '50vw',
        minWidth: '300px',
        marginTop: '10px',
        marginLeft: message.messageType === MessageTypeEnum.BOT ? '0px' : 'auto',
        marginRight: message.messageType === MessageTypeEnum.BOT ? 'auto' : '0px',
      }}
    >
      <Card
        sx={{
          borderLeft: message.messageType === MessageTypeEnum.BOT ? '4px solid FireBrick' : 'none',
          borderRight: message.messageType === MessageTypeEnum.MYSELF ? '4px solid SteelBlue' : 'none',
        }}
      >
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: 'navy' }}>{message.messageType === MessageTypeEnum.BOT ? 'IA' : 'MB'}</Avatar>}
          action={
            message.messageType === MessageTypeEnum.BOT && (
              <>
                <IconButton>
                  <ThumbUpOffAlt />
                </IconButton>
                <IconButton>
                  <ThumbDownOffAlt />
                </IconButton>
                <IconButton>
                  <ContentPaste />
                </IconButton>
                <IconButton>
                  <ContentCopy />
                </IconButton>
              </>
            )
          }
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
