const helmet = require('helmet')
const cors = require('cors')
const bodyParser = require('body-parser');

export default middleware = [
  helmet(),
  cors({
    "origin": "*", //to be changed to site address
    "methods": "GET, POST, DELETE, PUT"
  }),
  bodyParser.json(),
  bodyParser.urlencoded({extended: true}),
]
