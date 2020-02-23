const axios = require('axios');
const SaveWater = require('./SaveWater');

exports.saveDailyWater = function () {

    let currentDate = new Date();
    let date = formatDate(currentDate);
    let url = `http://app.rid.go.th:88/reservoir/api/dams?date=${date}`;

    axios.get(url)
        .then((response) => {
            return SaveWater.saveWater(response.data);
        })
        .then((message) => {
            console.log(message);
        })
        .catch((err) => {
            console.log(err);
        })

}

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}