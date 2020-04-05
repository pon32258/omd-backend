require("dotenv").config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const SaveDailyWater = require('./controller/water/SaveDailyWater');
const schedule = require('node-schedule');

// parse application/json
app.use(bodyParser.json())

//load routes
const waterRoutes = require('./routes/water');

app.use(cors());

app.use('/water', waterRoutes);
app.use(express.static('dist'));


app.listen(port, () => {
  console.log('App listening port: ' + port);
})

//saveDaily Water
let daily = schedule.scheduleJob(process.env.SCHEDULE, () => {
  SaveDailyWater.saveDailyWater();
});