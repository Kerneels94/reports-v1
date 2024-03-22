/**
 * @description Body component
 * @returns jsx
 */
const Body = () => {
  return (
    <div className="mx-auto space-y-10 p-6">
      <div className="intro flex flex-col items-center justify-center">
        <h1 className="text-2xl">Welcome to reports</h1>
      </div>
      <div className="content flex flex-col items-center justify-center gap-4 space-y-4">
        {/* Reports */}
        <div className="reports lg:grid lg:grid-cols-2 space-y-3 space-x-3">
          <div className="reports-content flex flex-col items-center justify-center space-y-3">
            <h2 className="text-xl">
              A reporting application built for private security companies
            </h2>
            <p className="p-3">
              Our system provides security companies with the ability to write
              incidents reports on the fly making it quick and easy for the
              controlroom to compile a report that is sent to all the relevant
              managers for reviewing. The compiled reports are saved by default
              to a secure no sql database that can be accessed by managers
              through a admin dashboard.
            </p>
          </div>
          <div className="reports-image">
            <img
              src="../public/reports.jpg"
              alt="reports image"
              className="rounded-lg shadow-lg shadow-zinc-800"
            />
          </div>
        </div>
        {/* Admin dash */}
        <div className="dashboard lg:grid lg:grid-cols-reverse lg:grid-cols-2 space-y-3 space-x-4">
          <div className="dashboard-content flex flex-col items-center justify-center space-y-3 lg:order-2">
            <h2 className="text-xl">Our admin dashboard</h2>
            <p className="p-3">
              The admin dashboard provides the managers of your company the
              ability to view the reports created by the controlroom. The
              reports can be sent to the client upon request or used if a case
              is opened with SAPS to provide them with more information about
              the incident that occured.
            </p>
          </div>
          <div className="dashboard-image lg:order-1">
            <img
              src="../public/dashboard.png"
              alt="reports image"
              className="rounded-lg shadow-lg shadow-zinc-800"
            />
          </div>
        </div>
      </div>
      <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col items-center justify-between">
          <span className="text-xl text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://reports.co.za" className="hover:underline">
              Reports™
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Body;
