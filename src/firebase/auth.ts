import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, push, update } from "firebase/database";
import { getAuth } from "firebase/auth";
import { AttemptedPositiveReportType } from "../types/types";

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

function addReport(
  typeOfReport: "Attempted" | "Positive",
  incidentDate: Date,
  clientName: string,
  clientSurname: string,
  clientCode: string,
  operatorName: string,
  operatorPosition: string,
  dispatchedOfficer: string,
  callSign: string,
  arrivalTime: string,
  streetAddress: string,
  report: string
) {
  // Report Data
  const reportData: AttemptedPositiveReportType = {
    typeOfReport: typeOfReport,
    incidentDate: incidentDate,
    clientName: clientName,
    clientSurname: clientSurname,
    clientCode: clientCode,
    operatorName: operatorName,
    operatorPosition: operatorPosition,
    dispatchedOfficer: dispatchedOfficer,
    callSign: callSign,
    arrivalTime: arrivalTime,
    streetAddress: streetAddress,
    report: report,
    createdDate: new Date(),
  };

  // Get a key for a new report.
  const reportKey = push(child(ref(database), "reports")).key;

  // TODO: define a type for report data
  const updates: any = {};

  updates["/reports/" + reportKey] = reportData;

  return update(ref(database), updates);
}

export default { auth, database, addReport, reportsRef };
