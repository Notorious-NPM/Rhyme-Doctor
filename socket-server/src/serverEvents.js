const serverEnterResponse = ({ io, room }, payload) => {
  io
    .in(room.get('id'))
    .emit('server.inLobby', payload);
};

const serverSendMsgResponse = ({ io, room }, payload) => {
  io
    .in(room.get('id'))
    .emit('server.sendMsg', payload);
};

const serverSelectedChatResponse = ({ io, room }, payload) => {
  io
    .in(room.get('id'))
    .emit('server.selectedChat', payload);
};

export { serverEnterResponse, serverSendMsgResponse, serverSelectedChatResponse };
