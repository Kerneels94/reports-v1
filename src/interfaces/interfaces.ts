/**
 * @description Interface for the attempted report
 */

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