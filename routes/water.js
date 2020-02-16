const GetWaterByDate = require('../controller/water/GetWaterByDate');
const AddWater = require('../controller/water/AddWater');
const express = require('express');
const router = express.Router();

router.get('/getWater', (req, res) => {
  let date = req.query.date;
  GetWaterByDate.getWaterByDate(date)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(err);
      res.send('Oops some thin is wrong');
    });
});

router.post('/saveWater', (req, res) => {
  let data = req.body;
  console.log(data);
  AddWater.AddWater(data)
    .then(success => {
      res.send(success);
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;
