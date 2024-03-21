/**
 * Context filr for the attempted reports
 * @returns {ReactNode} The attempted context provider
 */

import {createContext, useState} from "react";
import { Props } from "../types/types" 
import { AttemptedInterface } from "../interfaces/interfaces"

// Export AttemptedContext to use in Attempted component
export const AttemptedContext = createContext<AttemptedInterface | null>(null);

// Export DataProvider to use in Attempted component
export const AttemptedDataProvider = ({children}: Props) => {
    const [typeOfReport, setTypeOfReport] = useState<string>("");
    const [incidentDate, setIncidentDate] = useState<string>("");
    const [clientName, setClientName] = useState<string>("");
    const [clientSurname, setClientSurname] = useState<string>("");
    const [clientCode, setClientCode] = useState<string>("");
    const [operatorName, setOperatorName] = useState<string>("");
    const [operatorPosition, setOperatorPosition] = useState<string>("");
    const [dispatchedOfficer, setDispatchedOfficer] = useState<string>("");
    const [callSign, setCallSign] = useState<string>("");
    const [arrivalTime, setArrivalTime] = useState<string>("");
    const [streetAddress, setStreetAddress] = useState<string>("");
    const [report, setReport] = useState<string>("");


    // Functions that will update the state in the components
    const updateTypeOfReport = (typeOfReport: string) => {
        setTypeOfReport(typeOfReport);
    }

    const updateIncidentDate = (incidentDate: string) => {
      setIncidentDate(incidentDate);
    }

    const updateClientName = (clientName: string) => {
      setClientName(clientName);
    }

    const updateClientSurname = (clientSurname: string) => {
      setClientSurname(clientSurname);
    };

    const updateClientCode = (clientCode: string) => {
      setClientCode(clientCode);
    };

    const updateOperatorName = (operatorName: string) => {  
      setOperatorName(operatorName);
    };

    const updateOperatorPosition = (operatorPosition: string) => {
      setOperatorPosition(operatorPosition);
    };

    const updateDispatchedOfficer = (dispatchedOfficer: string) => { 
      setDispatchedOfficer(dispatchedOfficer);
    };

    const updateCallSign = (callSign: string) => {  
      setCallSign(callSign);
    };

    const updateArrivalTime = (arrivalTime: string) => {
      setArrivalTime(arrivalTime);
    }

    const updateStreetAddress = (streetAddress: string) => {  
      setStreetAddress(streetAddress);
    };

    const updateReport = (report: string) => {
      setReport(report);
    }

    // Create state object to pass to the context provider
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
      updateTypeOfReport,
      updateIncidentDate,
      updateClientName,
      updateClientSurname,
      updateClientCode,
      updateOperatorName,
      updateOperatorPosition,
      updateDispatchedOfficer,
      updateCallSign,
      updateArrivalTime,
      updateStreetAddress,
      updateReport
    }

    return (
        <AttemptedContext.Provider value={state}>
            {children}
        </AttemptedContext.Provider>
    );
}

