import firebase from 'firebase';

// Get variables from .env file
const apiKey = "AIzaSyBMLSO5orYOlxelvIZYvxliFFGNp-V_Ugk";
const authDomain = "reports-55335.firebaseapp.com";
const databaseURL = "https://reports-55335-default-rtdb.firebaseio.com";
const projectId = "reports-55335";
const storageBucket = "reports-55335.appspot.com";
const messagingSenderId = "769990051034";
const appId = "1:769990051034:web:fd3864e1299cf1dc7351e3";

const firebaseConfig = {
    apiKey: apiKey,
    authDomain: authDomain,
    databaseURL: databaseURL,
    projectId: projectId,
    storageBucket: storageBucket,
    messagingSenderId: messagingSenderId,
    appId: appId
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
 
export default database;