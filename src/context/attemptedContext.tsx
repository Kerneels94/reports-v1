import { createContext, useEffect } from "react";
import { IReport } from "../interfaces/interfaces";
import React, { useState } from "react";

export const AttemptedContext = createContext<IReport>(undefined!);

type Props = {
  children: React.ReactNode;
};

export const defaultState = {
  resetState: () => null
};

const DataProvider = ({ children }: Props) => {
  const [typeOfReport, setTypeOfReport] = useState("");
  const [incidentDate, setIncidentDate] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientSurname, setClientSurname] = useState("");
  const [clientCode, setClientCode] = useState("");
  const [operatorName, setOperatorName] = useState("");
  const [operatorPosition, setOperatorPosition] = useState("");
  const [dispatchedOfficer, setDispatchedOfficer] = useState("");
  const [callSign, setCallSign] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [report, setReport] = useState("");

  const resetState = () => {
    setTypeOfReport("");
    setIncidentDate("");
    setClientName("");
    setClientSurname("");
    setClientCode("");
    setOperatorName("");
    setOperatorPosition("");
    setDispatchedOfficer("");
    setCallSign("");
    setArrivalTime("");
    setStreetAddress("");
    setReport("");
  };

  const state = {
    typeOfReport,
    incidentDate,
    clientName,
    clientSurname,
    clientCode,
    operatorName,
    operatorPosition,
    dispatchedOfficer,
    callSign,
    arrivalTime,
    streetAddress,
    report,
    resetState
  };

  useEffect(() => {
    resetState();
  })

  return (
    <AttemptedContext.Provider value={state}>
      {children}
    </AttemptedContext.Provider>
  );
};

export default DataProvider;

