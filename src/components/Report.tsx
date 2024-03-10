import React, { ReactNode, useState } from 'react';
import Header from "./Header"
import Attempted from "./reports/Attempted"
import Positive from "./reports/Positive"
import Medical from "./reports/Medical"

const Report = () => {
  const [selectedComponent, setSelectedComponent] = useState<React.ReactNode>(null);
  // Render component function
  const renderComponent = (comp: ReactNode) => {
    setSelectedComponent(comp);
  }

  return (
    <>
      <Header />
      <div className="mx-auto flex flex-col items-center justify-center p-2 space-y-5">
        <div className="heading flex flex-col items-center">
          <h1 className="text-2xl">Report</h1>
          <p className="text-lg">What type of report do you want to write?</p>
        </div> 
        <div className="btn-group flex items-center gap-4">
          <button className="btn btn-primary" onClick={() => renderComponent(<Attempted/>)}>Attempted</button>
          <button className="btn btn-primary" onClick={() => renderComponent(<Positive/>)}>Positive</button>
          <button className="btn btn-primary" onClick={() => renderComponent(<Medical/>)}>Medical</button>
        </div>
        {selectedComponent}
      </div>
    </>
  );
}

export default Report;
