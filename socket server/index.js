import http from 'http';
import SocketIo from 'socket.io';

import Rooms from './rooms';
import clientEvents from './clientEvents';

const server = http.createServer();
const io = SocketIo(server);
const rooms = new Rooms(io);

io.on('connection', (client) => {
  console.log('client connected to socket.io');
  // connection takes in a roomId and roomName
  const { roomId, roomName } = client.handshake.query;
  const room = rooms.findOrCreate(roomId || 'default', roomName);
  client.join(room.get('id'));

  for (let event of clientEvents) {
    client.on(event, clientEvent[event].bind(null, { io, client, room}));
  }
});

const port = process.env.PORT || 3444;
server.listen(port, () => console.log('socket server listening to port: ', port));
