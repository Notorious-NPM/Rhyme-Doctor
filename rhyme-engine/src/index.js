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
  const options = {};
  if (strictness === 'Strict') {
    options.weight = 4;
    options.length = 2;
  } else if (strictness === 'Loose') {
    options.weight = 3;
    options.length = 1;
  }
  console.log('REQUEST:', req.body);
  console.log(strictness);
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
