import express from 'express';
import * as parser from 'body-parser';
import cors from 'cors';

import parse from './parse';

const port = 3001;

const app = express();
app.use(cors());
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.post('/parse', async (req, res) => {
  const { text, strictness } = req.body;
  console.log('REQUEST:', req.body);
  const [coords, colors] = await parse(text, strictness);
  const colorings = {};
  coords.forEach((coord, index) => {
    colorings[coord] = colors[index];
  });
  res.status(200).end(JSON.stringify(colorings));
});

app.listen(port, () => {
  console.log('Rhyme Engine is listening on port:', port);
});
