const serverEnterResponse = ({ io, room }, payload) => {
  io
    .in(room.get('id'))
    .emit('server.enter', payload);
};

const serverSendMsgResponse = ({ io, room }, payload) => {
  io
    .in(room.get('id'))
    .emit('server.sendMsg', payload);
};

export { serverEnterResponse, serverSendMsgResponse };
