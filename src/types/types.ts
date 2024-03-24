import {ReactNode} from "react";

/**
 * @description: Types for the application
 */

export type Props = {
    children: ReactNode;
}

/**
 * @description: Theme context type
 */
export type ThemeContextType = {
    theme: "light" | "dark";
    setTheme: (theme: string) => void;
}

/**
 * @description: Attempted/Positive report type
 */
export type AttemptedPositiveReportType = {
    typeOfReport: string, 
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
    report: string,
}

/**
 * @description: Medical report type
 */
export type MedicalReportType = {
    typeOfReport: string, 
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
    report: string,
    emtCallSigns: string,
    emtName: string,
}
