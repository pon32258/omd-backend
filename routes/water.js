const GetWater = require('../controller/water/GetWater');
const AddWater = require('../controller/water/AddWater');
const express = require('express');
const router = express.Router();

router.get('/getWater', (req, res) => {
  let date = req.query.date;
  GetWater.getWaterByDate(date)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send('Oops some thin is wrong');
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

router.get('/getWaters', (req, res) => {
  let firstDate = req.query.firstDate;
  let secondDate = req.query.secondDate;
  let respond = [];
  GetWater.getWater(firstDate)
    .then((firstDateData) => {
      respond.push(firstDateData);
      return GetWater.getWater(secondDate);
    })
    .then((secondDateData) => {
      respond.push(secondDateData);
    })
    .then(() => {
      res.send(respond);
    })
    .catch((err) => {
      res.send(err);
    })

})

module.exports = router;
