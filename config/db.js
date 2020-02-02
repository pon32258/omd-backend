const firebase = require("firebase");
require("firebase/database");

const firebaseConfig = {

};

firebase.initializeApp(firebaseConfig);

export const database = firebase.database();