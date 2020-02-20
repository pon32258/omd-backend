const DB = require('../../config/db');
const database = DB.db.database();

exports.getWaters = function(firstDate, secondDate){
  return new Promise((resolve, reject) => {
    let waterCollectionFirstDateRef = database.ref(`/Water/${firstDate}`);
    let waterCollectionSecondDateRef = database.ref(`/Water/${secondDate}`);
    let respond = {};

    waterCollectionFirstDateRef.on('value',(snapshot) => {
      let dataFirstDate = snapshot.val();
    }, (err) => {
      reject(err);
    });
    
    waterCollectionSecondDateRef.on('value',(snapshot) => {
      let dataSecondDate = snapshot.val();
    }, (err) => {
      reject(err);
    });

    dataFirstDate

  });
}