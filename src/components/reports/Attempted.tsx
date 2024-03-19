// Imports
import { useContext } from "react"
import database from "../../firebase/auth"
import { AttemptedContext, IReport } from "../../context/attemptedContext"; 

/**
 * @description  Attempted component is used to display the attempted report
 */
const Attempted = () => {
  const { 
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
    report
  } = useContext(AttemptedContext);

  // Create reference for firebase database
  const reportsRef = database.ref("reports");

  /**
   * @description  handleSubmit is used to submit the report
   * @param event
   * @param data 
   */
  const handleSubmit = (e: any, data: IReport) => {
    e.preventDefault();
    try {
      reportsRef.push(data)
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
          <form className="p-4 shadow-md space-y-5 w-full" method="post" onSubmit={(e) => handleSubmit(e, {
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
                  report
                })}>
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">Please provide acurate and factual information</h2>

              <div className="sm:col-span-2">
                  <label htmlFor="typeOFReport" className="block text-sm font-medium leading-6 text-gray-900">
                    Type of report
                  </label>
                  <div className="mt-2">
                    <select
                      id="reportType"
                      name="reportType"
                      ref={typeOfReport}
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
                      ref={incidentDate}
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
                      ref={clientName}
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                      ref={clientSurname}
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                      ref={clientCode}
                      autoComplete="clientsCode"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                      ref={operatorName}
                      autoComplete="operatorName"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                      ref={operatorPosition}
                      autoComplete="operatorPosition"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                      ref={dispatchedOfficer}
                      autoComplete="dispatchedOfficer"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                      ref={callSign}
                      autoComplete="callSign"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                      ref={arrivalTime}
                      autoComplete="arrivalTime"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                      ref={streetAddress}
                      autoComplete="street-address"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                    Report
                  </label>
                  <div className="mt-2">
                    <textarea name="report" id="report" cols={30} rows={10} className="w-full" ref={report}></textarea>
                  </div>
                </div>

                <button className="btn btn-primary" type="submit">Submit Report</button>
              </div>
            </div>
          </form>  
        </div>
      </div>
    </>
}

export default Attempted