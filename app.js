const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;
const water = require('./routes/water');

app.get('/getWater', (req, res) => {
  water.getWater('2019-01-28')
    .then((data) => {
      res.send(data)
      console.log(data);
    })
    .catch((err) => {
      res.send('404');
    })
})

app.listen(port, () => {
  console.log('App is running port: ' + port);
})