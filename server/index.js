import express from 'express';
import path from 'path';
import router from './routes';
import middleware from './middleware/index';

const port = process.env.PORT || 3000;
const server = express();

server.use(...middleware);  //is this the right syntax?
server.use('api', router);
server.use(express.static(path.join(__dirname, '..client/dist')))

server.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../client/public/index.html')));

server.listen(port, () => 'Rhyme Doctor is listening on server port: ', port);