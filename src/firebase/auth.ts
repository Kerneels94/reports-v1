import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, push, update } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO import report types

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

const database = getDatabase(app);

const reportsRef = ref(database, "users");

function addReport() {
  // Report Data
  const reportData = {
    author: "username",
    uid: "uid",
  };

  // Get a key for a new report.
  const reportKey = push(child(ref(database), "reports")).key;

  // TODO: define a type for report data
  const updates: any = {};

  updates['/reports/' + reportKey] = reportData;

  return update(ref(database), updates);
}

export default { auth, database, addReport, reportsRef };
