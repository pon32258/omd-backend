const GetWater = require('../controller/water/GetWater');
const AddWater = require('../controller/water/AddWater');
const CompareWater = require('../controller/water/CompareWater');
const Utils = require('../utils/utils');
const express = require('express');
const router = express.Router();

router.get('/getWater', (req, res) => {
  let date = req.query.date;
  GetWater.getWater(date)
    .then(data => {
      res.send(Utils.reArrangeData(data));
    })
    .catch(err => {
      res.send(err);
    });
});

router.post('/saveWater', (req, res) => {
  let data = req.body;
  AddWater.AddWater(data)
    .then(success => {
      res.send(success);
    })
    .catch(err => {
      res.send(err);
    });
});

router.get('/compareWater', (req, res) => {
  let firstDate = req.query.firstDate;
  let secondDate = req.query.secondDate;
  CompareWater.compareWater(firstDate, secondDate)
    .then((response) => {
      console.log("response: " + response)
      res.send(response);
    })
    .catch((err) => {
      res.send(err);
    })

})

module.exports = router;