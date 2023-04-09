import { useState, useContext } from 'react';
import UserContext from "../contexts/UserContext";

import "./style/History.css"

import Appointments from "../components/history/Appointments"
import Results from "../components/history/Results"

const History = () => {
  // get user context
  const { user } = useContext(UserContext);

  // set the first test as the current test by default
  const [currentTest, setCurrentTest] = useState(user.tests[0]);

  // callback to update the current test
  const updateData = (testId) => {
    for (let test of user.tests) {
      if(test.test_id === testId) {
        setCurrentTest(test)
      }
    }
  }

  return (
    <div className="history-wrapper">
      <div className="history-container">
        <div className="history-title">
          <h1> My History </h1>
        </div>
        <div className="history-content">
          <div style={{width: "70%", height:"100%"}} className="history-content-container">
            {
              user.patient_id !== "" && 
                <Appointments tests={user.tests} callback={updateData}/>
            }
          </div>
          <div style={{width: "30%"}} className="history-content-container">
            {
              user.patient_id !== "" && 
                <Results test={currentTest}/>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default History;