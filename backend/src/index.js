const express = require('express');
var bodyParser = require('body-parser')
const app = express();

const morgan = require('morgan');
const PORT = process.env.PORT || 3000;

//database
const db = require('./config/db.js');


app.use(bodyParser.json());
//enabling cors
var cors = require('cors')
app.use(cors())

const productsRoutes = require('./routes/products');
app.use('/products', productsRoutes);
app.get('/sample', (res, req)=>{
    console.log('get sample full')
    res.status(200).json({res:"hello world"});
});

db.connect()
  .then(() => {
    console.log('database connected..')
    app.listen(PORT, () => {
      console.log('Listening on port: ' + PORT);
    });
  });

  module.exports = app;