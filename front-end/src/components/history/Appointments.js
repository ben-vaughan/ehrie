import React from 'react';
import "./style/Appointments.css";

const Appointments = ({tests, callback}) => {

  const handleClick = (testId) => {
    callback(testId)
  }

  return(
    <div className="appointments-wrapper">
      <div className="appointments-grid">
        <div className="appointments-grid-header">
          Location
        </div>
        <div className="appointments-grid-header">
          Date
        </div>
        <div className="appointments-grid-header">
          Provider
        </div>
        <div className="appointments-grid-header">
          Type
        </div>
        <div/>

        {
          tests.map((test) => (
            <React.Fragment key={test.test_id}>
              <div className="appointments-grid-item">
                {test.date}
              </div>
              <div className="appointments-grid-item">
                {test.date}
              </div>
              <div className="appointments-grid-item">
                {test.date}
              </div>
              <div className="appointments-grid-item">
                <div className="appointments-type-border">
                  {test.category.name}
                  </div>
              </div>
              <div className="appointments-grid-item">
                <button onClick={() => handleClick(test.test_id)}> 
                  Results
                </button>
              </div>
            </React.Fragment>
          ))
        }
      </div>
    </div>
  )
}

export default Appointments;