const SendWater = require('../controller/water/SendWater');

const express = require('express');
const router = express.Router();

router.get('/getWater', (req, res) => {
  let date = req.query.date;

  if ((date !== null && typeof date !== 'undefined') || date !== '') {
    date.substring(1, date.length - 1);
  }
  console.log(date)
  SendWater.getWaterByDate(date)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send('Oops some thin is wrong');
    })
})


module.exports = router;