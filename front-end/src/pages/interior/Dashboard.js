import "./style/Dashboard.css"

import Appointments from "../../components/interior/Appointments"
import Results from "../../components/interior/Results"

import DataBlock from "../../elements/DataBlock"

const Dashboard = () => {
  let data = [
    {
      location: "VHI SwiftCare Clinic",
      date: "06 December 2022",
      provider: "Dr. Bill Groves"
    },
    {
      location: "VHI SwiftCare Clinic",
      date: "06 December 2022",
      provider: "Dr. Bill Groves"
    },
    {
      location: "VHI SwiftCare Clinic",
      date: "06 December 2022",
      provider: "Dr. Bill Groves"
    }
  ]

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-inner">
        <div className="dashboard-appointments-wrapper">
          <DataBlock title="Appointments">
            <Appointments data={data}/>
          </DataBlock>
        </div>
        <div className="dashboard-results-wrapper">
          <DataBlock title="Results">
            <Results/>
          </DataBlock>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;