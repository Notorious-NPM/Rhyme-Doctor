import express from 'express';
import http from 'http';
import SocketIo from 'socket.io';
import path from 'path';

import https from 'https';
import fs from 'fs';

import Rooms from './rooms';
import clientEvents from './clientEvents';

const options = {
  key: fs.readFileSync(path.join(__dirname, '../../ssl-server/encryption/rhymedoctor.key')),
  cert: fs.readFileSync(path.join(__dirname, '../../ssl-server/encryption/rhymedoctor.crt')),
};

const app = express();
const server = https.createServer(options, app);
const io = SocketIo(server);

// the above should work

const rooms = new Rooms(io);

io.on('connection', (client) => {
  console.log('client connected to socket.io');
  // connection takes in a roomId and roomName
  const { roomId, roomName } = client.handshake.query;
  const room = rooms.findOrCreate(roomId || 'default', roomName);
  console.log(client.handshake.query);
  client.join(room.get('id'));

  Object.keys(clientEvents).forEach((event) => {
    console.log('event is: ', event)
    client.on(event, clientEvents[event].bind(null, { io, client, room }));
  });
});

const port = process.env.PORT || 3444;
server.listen(port, () => console.log('socket server listening to port: ', port));

// https.createServer(options, server).listen(3444);

