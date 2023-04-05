import "./style/Dashboard.css"

import DashboardProfile from "../components/dashboard/DashboardProfile";
import DashboardCharts from "../components/dashboard/DashboardCharts";
import DashboardGauges from "../components/dashboard/DashboardGauges";
import DashboardNavbar from "../components/dashboard/DashboardNavbar";

import { useContext } from 'react';
import UserContext from "../contexts/UserContext";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  
  const profileProps = {
    name: user.attributes.name.first + " " + user.attributes.name.last,
    dateOfBirth: user.attributes.date_of_birth,
    location: "Dublin, Ireland",
    weight: 80.45,
    height: 181,
    bloodType: "O-"
  }

  const gaugeProps = [    
    {
      nameShort: "HGB",
      nameLong: "Hameoglobin",
      value: 16.3,
      unit: "g/dL"
    },
    {
      nameShort: "RBC",
      nameLong: "Red blood cells",
      value: 5.4,
      unit: "m/mcL"
    },
    {
      nameShort: "PLT",
      nameLong: "Platelets",
      value: 90,
      unit: "x 109/L"
    },
    {
      nameShort: "HGB",
      nameLong: "Hameoglobin",
      value: 16.3,
      unit: "g/dL"
    }
  ]

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-container">
        <div className="dashboard-title">
          <h1> My Health </h1>
        </div>
        <DashboardNavbar />
        <div className="dashboard-content">
          <div>
            <div className="dashboard-content-container">
              <DashboardProfile {...profileProps} />
            </div>
          </div>
          <div>
            <div className="dashboard-content-container">
              <DashboardCharts />
            </div>
            <div>
              <DashboardGauges gauges={gaugeProps}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;