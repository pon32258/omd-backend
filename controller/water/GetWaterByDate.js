const DB = require('../../config/db');
const database = DB.db.database();

exports.getWaterByDate = function(date) {
  console.log(date);
  return new Promise((resolve, reject) => {
    let waterCollectionRef = database.ref(`/Water/${date}`);
    waterCollectionRef.on(
      'value',
      snapshot => {
        let data = snapshot.val();
        resolve(data);
      },
      err => {
        reject(err);
      }
    );
  });
};
