require("dotenv").config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// parse application/json
app.use(bodyParser.json())

//load routes
const waterRoutes = require('./routes/water');

app.use(cors());

app.use('/', waterRoutes);


app.listen(port, () => {
  console.log('App listening port: ' + port);
})