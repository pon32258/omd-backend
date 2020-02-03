const DB = require('../config/db');

const database = DB.db.database();


exports.getWater = function (date) {
  let waterDateRef = database.ref(`/water/${date}`);
  return new Promise((resolve, reject) => {
    waterDateRef.on('value', (snapshot) => {
      let data = snapshot.val();
      console.log(data);
      resolve(data);
    }, (err) => {
      reject(err);
    });
  })

}