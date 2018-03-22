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

export { serverEnterResponse, serverSendMsgResponse };
