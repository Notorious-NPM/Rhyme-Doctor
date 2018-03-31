const express = require('express');
const fs = require('fs');
const https = require('https');
const path = require('path');

app = express();

const key = fs.readFileSync(path.join(__dirname, 'encryption/rhymedoctor.key'));
const cert = fs.readFileSync(path.join(__dirname, 'encryption/rhymedoctor.crt'));

const options = {
  key,
  cert,
  host: 'localhost',
};

https.createServer(options, app).listen(443);

