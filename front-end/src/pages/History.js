import { useState, useContext } from 'react';
import UserContext from "../contexts/UserContext";

import "./style/History.css"

import Appointments from "../components/history/Appointments"
import Results from "../components/history/Results"

const History = () => {
  const { user } = useContext(UserContext);

  const [currentTest, setCurrentTest] = useState(user.tests[0]);

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
          <div className="history-content-container">
            <Appointments tests={user.tests} callback={updateData}/>
          </div>
          <div className="history-content-container">
            <Results test={currentTest}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default History;