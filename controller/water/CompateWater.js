const DB = require('../../config/db');
const database = Db.db.database();

exports.compareWater = function(firstDate, secondDate) {
  console.log(firstDate);
  console.log(secondDate);

  return new Promise((resolve, reject) => {
    let firstDateData;
    let secondDateData;
    let firstDateCollectionRef = database.ref(`water/${firstDate}`);
    let secondDateCollectionRef = database.ref(`water/${secondDate}`);

    firstDateCollectionRef
      .on('value', snapshot => {
        firstDateData = snapshot.val();
      })
      .then(() => {
        secondDateCollectionRef
          .on('value', snapshot => {
            secondDateData = snapshot.val();
          })
          .then(() => {
            let differWater = firstDateData - secondDateData;
            resolve(differWater);
          })
          .catch(err => {
            reject(err);
          });
      })
      .catch(err => {
        reject(err);
      });
  });
};
