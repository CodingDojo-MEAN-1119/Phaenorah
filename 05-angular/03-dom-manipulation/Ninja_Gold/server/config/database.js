const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');


const modelsDir = path.join(__dirname, '../models');

mongoose.connect("mongodb://localhost/ninja_gold", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

mongoose.connection.once('connected', () => console.log('connected to Mongo'));

console.log(modelsDir);

fs.readdirSync(modelsDir)
  .filter(file => file.endsWith('.js'))
  .forEach(file => require(path.join(modelsDir, file)));
