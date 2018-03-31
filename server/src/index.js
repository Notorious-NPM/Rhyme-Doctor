import express from 'express';
import path from 'path';
import https from 'https';
import fs from 'fs';

import router from './routes';
import middleware from './middleware';

import port from './config';

const options = {
  key: fs.readFileSync(path.join(__dirname, '../../ssl-server/encryption/rhymedoctor.key')),
  cert: fs.readFileSync(path.join(__dirname, '../../ssl-server/encryption/rhymedoctor.crt')),
};

const server = express();

server.use(...middleware);
server.use('/api', router);

server.use('/.well-known/pki-validation', express.static(path.join(__dirname, '../../client/ssl')));
server.use(express.static(path.join(__dirname, '../../client/dist')));

server.use('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../client/dist/index.html'));
});

server.listen(port, () => {
  console.log('Rhyme Doctor is listening on port:', port);
});

https.createServer(options, server).listen(8080);

