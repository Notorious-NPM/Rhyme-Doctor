const serverEnterResponse = ({ io, room }, payload) => {
  io
    .in(room.get('id'))
    .emit('server.enter', payload);
};

export { serverEnterResponse };
