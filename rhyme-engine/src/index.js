import express from 'express';
import * as parser from 'body-parser';
import cors from 'cors';
import path from 'path';

import https from 'https';
import fs from 'fs';

const options = {
  key: fs.readFileSync(path.join(__dirname, '../../ssl-server/encryption/rhymedoctor.key')),
  cert: fs.readFileSync(path.join(__dirname, '../../ssl-server/encryption/rhymedoctor.crt')),
};

import parse from './parse';

const port = 3002;

const app = express();
app.use(cors());
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.post('/parse', async (req, res) => {
  const { text, strictness } = req.body;
  const options = {};
  /**
   * Strict: 4,2 ; 3,2
   * Loose: 3,1 ; 1,1
   */
  if (strictness === 'Strict') {
    options.weight = 3;
    options.length = 2;
  } else if (strictness === 'Loose') {
    options.weight = 3;
    options.length = 1;
  }
  console.log('REQUEST:', req.body);
  const [coords, colors] = await parse(text, options);
  const colorings = {};
  coords.forEach((coord, index) => {
    colorings[coord] = colors[index];
  });
  res.status(200).end(JSON.stringify(colorings));
});

app.listen(port, () => {
  console.log('Rhyme Engine is listening on port:', port);
});

https.createServer(options, app).listen(3001);

