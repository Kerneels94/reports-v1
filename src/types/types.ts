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
}

/**
 * @description: Attempted/Positive report type
 */
export type AttemptedPositiveReportType = {
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
    report: string,
    createdDate: Date,
}

/**
 * @description: Medical report type
 */
export type MedicalReportType = {
    typeOfReport: "Medical", 
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
    createdDate: Date,
}
