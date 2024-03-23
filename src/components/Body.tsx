import Footer from "../components/Footer";
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
      <Footer />
    </div>
  );
};

export default Body;
