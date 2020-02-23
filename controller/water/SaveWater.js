const axios = require('axios');
const DB = require('../../config/db');
const database = DB.db.database();

exports.saveWater = function (waterData) {
  return new Promise((resolve, reject) => {
    database.ref('Water/' + waterData.date_th).set({
        date_th: waterData.date_th,
        year_prev: waterData.year_prev,
        year_curr: waterData.year_curr,
        date_year_prev: waterData.date_year_prev,
        date_jan_curr: waterData.date_jan_curr,
        date_jan_prev: waterData.date_jan_prev,
        regions: waterData.regions,
        sum_all: waterData.sum_all
      })
      .then(() => {
        resolve('Successful save data ')
      })
      .catch((err) => {
        reject(err);
      })
  })
}