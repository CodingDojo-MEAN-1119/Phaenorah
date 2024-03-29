const parser = require('body-parser');
const express = require('express');
const path = require('path')

const port = process.env.PORT || 8000;
const app = express()

require('./server/config/database');

app
  .use(parser.urlencoded({ extended: true }))
  .use(parser.json())
  .use(express.static(path.join(__dirname, 'dist', 'public')))
  .use(require('./server/config/api.routes'))
  .listen(port, () => console.log(`Express server listening on port ${port}`));
