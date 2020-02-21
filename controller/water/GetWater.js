const DB = require('../../config/db');
const database = DB.db.database();

exports.getWater = function(date) {
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


exports.reArrangeData = function(data){

  let response = {}
  let regions = [];

  for(let i = 0 ; i < data.regions.length ; i++){
    let dams = [];
    for(let dam of data.regions[i].dams){
      let damObject = {
        DAM_ID: dam.DAM_ID,
        DAM_GROUP: dam.DAM_GROUP,
        DAM_NAME: dam.DAM_NAME,
        DAM_Lat: dam.Lat,
        DAM_Lon: dam.Lon,
        PERCENT_DMD_QUse: dam.PERCENT_DMD_QUse,
        DMD_Date_prev: dam.DMD_Date_prev,
        PERCENT_DMD_QUse_prev: dam.PERCENT_DMD_QUse_prev
      }
      dams.push(damObject);
    }
    regions.push(
      { region_name: data.regions[i].region_name,
        dams: dams,
        sum:{
          sum_PERCENT_QUse: data.regions[i].sum.sum_PERCENT_QUse,
        }
      }
    );
  }

  response = {
    date: data.date_th,
    regions: regions,
    sum_all:{
      sum_PERCENT_QUse: data.sum_all.sum_PERCENT_QUse,
      sum_PERCENT_QUse_prev: data.sum_all.sum_PERCENT_QUse_prev
    }
  }

  return response;
}

