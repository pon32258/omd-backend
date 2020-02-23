const damProvince = require('./damProvince.json');

exports.reArrangeData = function (data) {

  let response = {}
  let regions = [];

  for (let i = 0; i < data.regions.length; i++) {
    let dams = [];
    for (let dam of data.regions[i].dams) {
      let damObject = {
        DAM_ID: dam.DAM_ID,
        DAM_GROUP: dam.DAM_GROUP,
        DAM_NAME: dam.DAM_Name,
        DAM_Province: damProvince[dam.DAM_Name].Dam_Province,
        DAM_Lat: dam.DAM_Lat,
        DAM_Lon: dam.DAM_Lon,
        DAM_Date: dam.DMD_Date,
        PERCENT_DMD_QUse: dam.PERCENT_DMD_QUse,
        DMD_Date_prev: dam.DMD_Date_prev,
        PERCENT_DMD_QUse_prev: dam.PERCENT_DMD_QUse_prev
      }
      dams.push(damObject);
    }
    regions.push({
      region_name: data.regions[i].region_name,
      dams: dams,
      sum: {
        sum_PERCENT_QUse: data.regions[i].sum.sum_PERCENT_QUse,
        sum_PERCENT_QUse_prev: data.regions[i].sum.sum_PERCENT_QUse_prev
      }
    });
  }

  response = {
    date: data.date_th,
    regions: regions,
    sum_all: {
      sum_PERCENT_QUse: data.sum_all.sum_PERCENT_QUse,
      sum_PERCENT_QUse_prev: data.sum_all.sum_PERCENT_QUse_prev
    }
  }

  return response;
}

exports.reArrangeCompareData = function (firstDateData, secondDateData) {
  let response = {}
  let regions = [];

  for (let i = 0; i < firstDateData.regions.length; i++) {
    let dams = [];
    for (let j = 0; j < firstDateData.regions[i].dams.length; j++) {
      let damObject = {
        DAM_ID: firstDateData.regions[i].dams[j].DAM_ID,
        DAM_GROUP: firstDateData.regions[i].dams[j].DAM_GROUP,
        DAM_NAME: firstDateData.regions[i].dams[j].DAM_Name,
        DAM_Province: damProvince[firstDateData.regions[i].dams[j].DAM_Name].Dam_Province,
        DAM_Lat: firstDateData.regions[i].dams[j].DAM_Lat,
        DAM_Lon: firstDateData.regions[i].dams[j].DAM_Lon,
        DAM_Date: firstDateData.regions[i].dams[j].DMD_Date,
        PERCENT_DMD_QUse_1: firstDateData.regions[i].dams[j].PERCENT_DMD_QUse,
        PERCENT_DMD_QUse_2: secondDateData.regions[i].dams[j].PERCENT_DMD_QUse

      }
      dams.push(damObject);
    }
    regions.push({
      region_name: firstDateData.regions[i].region_name,
      dams: dams,
      sum: {
        sum_PERCENT_QUse_1: firstDateData.regions[i].sum.sum_PERCENT_QUse,
        sum_PERCENT_QUse_2: secondDateData.regions[i].sum.sum_PERCENT_QUse_prev
      }
    });
  }

  response = {
    date_1: firstDateData.date_th,
    date_2: secondDateData.date_th,
    regions: regions,
    sum_all: {
      sum_PERCENT_QUse_1: firstDateData.sum_all.sum_PERCENT_QUse,
      sum_PERCENT_QUse_2: secondDateData.sum_all.sum_PERCENT_QUse
    }
  }
  return response;
}