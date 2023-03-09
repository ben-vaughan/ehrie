import "./style/Dashboard.css"

import Appointments from "../../components/interior/Appointments"
import Results from "../../components/interior/Results"
import { useState, useEffect } from 'react';

import DataBlock from "../../elements/DataBlock"

const Dashboard = () => {

  const [currentData, setCurrentData] = useState({
      id: "vsc6d22dbgh",
      location: "VHI SwiftCare Clinic",
      date: "06 December 2022",
      provider: "Dr. Bill Groves",
      type: "haematology",
      results: [
        {
          name: "HCT",
          name_long: "Hematocrit",
          result: "45.4%"
        },
        {
          name: "HGB",
          name_long: "Haemoglobin",
          result: "16.3g/dL"
        },
        {
          name: "MCV",
          name_long: "Mean corpuscular volume",
          result: "90 fL"
        },
        {
          name: "RBC",
          name_long: "Red blood cell count",
          result: "5.4m/mcL"
        },
        {
          name: "MCH",
          name_long: "Mean corpuscular haemoglobin",
          result: "27.3 pg"
        }
      ]
  });
  
  const updateData = (appointment) => {
    setCurrentData(appointment)
  }

  let appointments = [
    {
      id: "vsc6d22dbgh",
      location: "VHI SwiftCare Clinic",
      date: "06 December 2022",
      provider: "Dr. Bill Groves",
      type: "Haematology",
      results: [
        {
          name: "HCT",
          name_long: "Hematocrit",
          result: "45.4%"
        },
        {
          name: "HGB",
          name_long: "Haemoglobin",
          result: "16.3g/dL"
        },
        {
          name: "MCV",
          name_long: "Mean corpuscular volume",
          result: "90 fL"
        },
        {
          name: "RBC",
          name_long: "Red blood cell count",
          result: "5.4m/mcL"
        },
        {
          name: "MCH",
          name_long: "Mean corpuscular haemoglobin",
          result: "27.3 pg"
        }
      ]
    },
    {
      id: "sdf234fsadf",
      location: "Cool Clinic",
      date: "16 December 2022",
      provider: "Dr. Fill Droves",
      type: "Thyroid",
      results: [
        {
          name: "HCT",
          name_long: "Hematocrit",
          result: "41.4%"
        },
        {
          name: "HGB",
          name_long: "Haemoglobin",
          result: "10.3g/dL"
        },
        {
          name: "MCV",
          name_long: "Mean corpuscular volume",
          result: "80 fL"
        },
        {
          name: "RBC",
          name_long: "Red blood cell count",
          result: "3.4m/mcL"
        },
        {
          name: "MCH",
          name_long: "Mean corpuscular haemoglobin",
          result: "23.3 pg"
        }
      ]
    }
  ]


  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-inner">
        <div className="dashboard-appointments-wrapper">
          <DataBlock title="Appointments">
            <Appointments appointments={appointments} handleUpdate={updateData}/>
          </DataBlock>
        </div>
        <div className="dashboard-results-wrapper">
          <DataBlock title="Results">
            <Results data={currentData}/>
          </DataBlock>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;