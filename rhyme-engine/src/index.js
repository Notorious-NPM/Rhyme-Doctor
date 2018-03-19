import express from 'express';
import * as parser from 'body-parser';
import unirest from 'unirest';
import cors from 'cors';
import API_KEY from './config';

const port = 3001;

const app = express();
app.use(cors());
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.post('/parse', (req, res) => {
  console.log(req.body.text);

  unirest.get(`https://wordsapiv1.p.mashape.com/words/${'hat'}/pronunciation`)
    .header('X-Mashape-Key', API_KEY)
    .header('X-Mashape-Host', 'wordsapiv1.p.mashape.com')
    .end((response) => {
      console.log(response.body);
      res.status(200).end(JSON.stringify(response.body));
    });
});

app.listen(port);
