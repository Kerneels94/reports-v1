// Imports
import { useState } from "react";
import database from "../../firebase/auth"
// import { useAttemptedContext } from "../../hooks/hooks";

/**
 * @description  Attempted component is used to display the attempted report
 */
const Attempted = () => {

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

  // Create reference for firebase database
  const reportsRef = database.ref("reports");

  /**
   * @description  handleSubmit is used to submit the report
   * @param event
   * @param data {object}
   */


  const handleSubmit = (e: any, data) => {
    e.preventDefault();
    try {
        reportsRef.push(data);
    } catch (error) {
      console.log(error);
    } 
  }

  return <>
      <div className="mx-auto">
        <div className="heading">
          <h1 className="text-2xl text-center">Attempted Report</h1>
        </div>
        <div className="flex items-center justify-between">
          <form className="p-4 shadow-md space-y-5 w-full" method="post">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">Please provide acurate and factual information</h2>

              <div className="sm:col-span-2">
                  <label htmlFor="reportType" className="block text-sm font-medium leading-6 text-gray-900">
                    Type of report
                  </label>
                  <div className="mt-2">
                    <select
                      id="reportType"
                      name="reportType"
                      onChange={(e) => setTypeOfReport(e.target.value)}
                      autoComplete="reportType-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>House break-in</option>
                      <option>Armed Robbery</option>
                      <option>Mugging</option>
                    </select>
                  </div>
              </div>

              <div className="sm:col-span-2">
                  <label htmlFor="incidentDate" className="block text-sm font-medium leading-6 text-gray-900">
                    Incident Date
                  </label>
                  <div className="mt-2 ">
                    <input
                      type="date"
                      name="incidentDate"
                      id="incidentDate"
                      onChange={(e) => setIncidentDate(e.target.value)}
                      className="block w-52 rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-2">
                  <label htmlFor="clientsName" className="block text-sm font-medium leading-6 text-gray-900">
                    Client's name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      onChange={(e) => setClientName(e.target.value)}
                      autoComplete="given-name"
                      className="standard-input"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="clientsSurname" className="block text-sm font-medium leading-6 text-gray-900">
                    Client's surname
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      onChange={(e) => setClientSurname(e.target.value)}
                      autoComplete="family-name"
                      className="standard-input"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="clientsCode" className="block text-sm font-medium leading-6 text-gray-900">
                    Client Code
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="clientsCode"
                      id="clientsCode"
                      onChange={(e) => setClientCode(e.target.value)}
                      autoComplete="clientsCode"
                      className="standard-input"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="operatorName" className="block text-sm font-medium leading-6 text-gray-900">
                    Operator name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="operatorName"
                      id="operatorName"
                      onChange={(e) => setOperatorName(e.target.value)}
                      autoComplete="operatorName"
                      className="standard-input"
                    />
                  </div>
                </div>

                
                <div className="sm:col-span-3">
                  <label htmlFor="operatorPosition" className="block text-sm font-medium leading-6 text-gray-900">
                    Operator position
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="operatorPosition"
                      id="operatorPosition"
                      onChange={(e) => setOperatorPosition(e.target.value)}
                      autoComplete="operatorPosition"
                      className="standard-input"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Response officer dispatched
                  </label>
                  <div className="mt-2">
                    <input
                      id="dispatchedOfficer"
                      name="dispatchedOfficer"
                      type="text"
                      onChange={(e) => setDispatchedOfficer(e.target.value)}
                      autoComplete="dispatchedOfficer"
                      className="standard-input"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Response Officer call sign
                  </label>
                  <div className="mt-2">
                    <input
                      id="callSign"
                      name="callSign"
                      type="text"
                      onChange={(e) => setCallSign(e.target.value)}
                      autoComplete="callSign"
                      className="standard-input"
                    />
                  </div>
                </div>
                
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Armed Response Arrival Time
                  </label>
                  <div className="mt-2">
                    <input
                      id="arrivalTime"
                      name="arrivalTime"
                      type="time"
                      onChange={(e) => setArrivalTime(e.target.value)}
                      autoComplete="arrivalTime"
                      className="standard-input"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                    Street address
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="street-address"
                      id="street-address"
                      onChange={(e) => setStreetAddress(e.target.value)}
                      autoComplete="street-address"
                      className="standard-input"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                    Report
                  </label>
                  <div className="mt-2">
                    <textarea name="report" id="report" cols={30} rows={10} className="w-full" onChange={(e) => setReport(e.target.value)}></textarea>
                  </div>
                </div>

                <button className="btn btn-primary" type="submit" onClick={(e) => handleSubmit(e, {
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
                  })}>Submit Report</button>
              </div>
            </div>
          </form>  
        </div>
      </div>
    </>
}

export default Attempted