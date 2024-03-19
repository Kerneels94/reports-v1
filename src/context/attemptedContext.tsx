import { createContext, ReactNode, useState } from "react";

type Props = {
  children?: ReactNode;
};

export interface IReport {
  typeOfReport: string;
  incidentDate: string;
  clientName: string;
  clientSurname: string;
  clientCode: string;
  operatorName: string;
  operatorPosition: string;
  dispatchedOfficer: string;
  callSign: string;
  arrivalTime: string;
  streetAddress: string;
  report: string;
}

export const AttemptedContext = createContext<IReport | null>(null);

const DataProvider = ({ children }: Props) => {
  const [typeOfReport, setTypeOfReport] = useState<string>("")
  const [incidentDate, setIncidentDate] = useState<string>("");
  const [clientName, setClientName]  = useState<string>("");
  const [clientSurname, setClientSurname] = useState<string>("");
  const [clientCode, setClientCode] = useState<string>("");
  const [operatorName, setOperatorName] = useState<string>("");
  const [operatorPosition, setOperatorPosition] = useState<string>("");
  const [dispatchedOfficer, setDispatchedOfiicer] = useState<string>("");
  const [callSign, setCallSign] = useState<string>("");
  const [arrivalTime, setArrivalTime] = useState<string>("");
  const [streetAddress, setStreetAddress] = useState<string>("");
  const [report, setReport] = useState<string>("");

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
  };

  return (
    <AttemptedContext.Provider value={state}>
      {children}
    </AttemptedContext.Provider>
  );
};

export default DataProvider;