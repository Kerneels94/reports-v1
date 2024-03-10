import Reports from "./Reports"
import DashBoard from "./DashBoard"
/**
 * @description Body component
 */
const Body = () => {
  return (
    <div className="mx-auto space-y-6 p-6">
      <div className="intro 
        flex 
        flex-col 
        items-center 
        justify-center
        ">
        <h1>Welcome to reports</h1>
        <p>The only online reporting system you need</p>
      </div>
      <div className="content 
        flex
        flex-col
        items-center
        justify-center
        gap-4
        ">
        <div className="reports
        p-2
        shadow-md
        shadow-zinc-700
        ">
          <Reports />
        </div>
        <div className="admin-dash">
          <DashBoard />
        </div>
      </div>
    </div>
  )
}

export default Body