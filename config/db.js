const firebase = require("firebase");
require("firebase/database");

const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    databaseURL: process.env.DATABASEURL,
    storageBucket: process.env.STORAGEBUCKET
};

firebase.initializeApp(firebaseConfig);

export const database = firebase.database();