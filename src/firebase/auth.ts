import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBMLSO5orYOlxelvIZYvxliFFGNp-V_Ugk",
    authDomain: "reports-55335.firebaseapp.com",
    databaseURL: "https://reports-55335-default-rtdb.firebaseio.com",
    projectId: "reports-55335",
    storageBucket: "reports-55335.appspot.com",
    messagingSenderId: "769990051034",
    appId: "1:769990051034:web:fd3864e1299cf1dc7351e3",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const database = getDatabase();

export default { auth, database };
