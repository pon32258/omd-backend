const GetWater = require('./GetWater');
const Utils = require('../../utils/utils');

exports.compareWater = function (firstDate, secondDate) {
    return new Promise((resolve, reject) => {
        let firsDateData;
        GetWater.getWater(firstDate)
            .then((firstDateData) => {
                firsDateData = firstDateData;
                return GetWater.getWater(secondDate);
            })
            .then((secondDateData) => {
                secondDateData = secondDateData;
                let response = Utils.reArrangeCompareData(firsDateData, secondDateData);
                resolve(response);
            })
            .catch((err) => {
                reject(err);
            })
    });

}