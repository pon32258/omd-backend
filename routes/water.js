const GetWater = require('../controller/water/GetWater');
const SaveWater = require('../controller/water/SaveWater');
const CompareWater = require('../controller/water/CompareWater');
const express = require('express');
const router = express.Router();

router.get('/getWater', (req, res) => {
  let date = req.query.date;
  GetWater.getWater(date)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(err);
    });
});

router.post('/saveWater', (req, res) => {
  let data = req.body;
  SaveWater.saveWater(data)
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
      res.send(response);
    })
    .catch((err) => {
      res.send(err);
    })

})

module.exports = router;