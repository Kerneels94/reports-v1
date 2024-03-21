/**
 * @description Interface for the attempted report
 */

export type AttemptedInterface = {
    typeOfReport: string, 
    incidentDate: string, 
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
    updateTypeOfReport: (typeOfReport: string) => void,
    updateIncidentDate: (incidentDate: string) => void,
    updateClientName: (clientName: string) => void,
    updateClientSurname: (clientSurname: string) => void,
    updateClientCode: (clientCode: string) => void,
    updateOperatorName: (operatorName: string) => void,
    updateOperatorPosition: (operatorPosition: string) => void,
    updateDispatchedOfficer: (dispatchedOfficer: string) => void,
    updateCallSign: (callSign: string) => void,
    updateArrivalTime: (arrivalTime: string) => void,
    updateStreetAddress: (streetAddress: string) => void,
    updateReport: (report: string) => void
}

/**
 * @description Interface for the positive report
 */

export interface PositiveInterface {
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
    report: string
}

/**
* @description Interface for medical report
*/

export interface MedicalInterface {
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
    emtName: string,
    emtSurname: string,
    emtCallSign: string,
    report: string
}