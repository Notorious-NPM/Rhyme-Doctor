import express from 'express';
import path from 'path';
import router from './routes';
import middleware from './middleware';

import port from './config';

const server = express();

server.use(...middleware);
server.use('/api', router);

server.use(express.static(path.join(__dirname, '../../client/dist')));
server.use('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../client/dist/index.html'));
});

server.listen(port, () => {
  console.log('Rhyme Doctor is listening on port:', port);
});
