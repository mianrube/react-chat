import { ChatList, InputPromt } from '.';

import './Chat.css';

export const Chat = () => {
  return (
    <div className="chat-container">
      <div className="chat-header">
        <h1>Mi chat de prueba.</h1>
      </div>
      <div className="chat-list">
        <ChatList />
      </div>
      <div className="chat-input">
        <InputPromt />
      </div>
    </div>
  );
};
