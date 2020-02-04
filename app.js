const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
require("dotenv").config();

//load routes
const waterRoutes = require('./routes/water');

app.use(cors());

app.use('/', waterRoutes);

app.listen(port, () => {
  console.log('App listening port: ' + port);
})


