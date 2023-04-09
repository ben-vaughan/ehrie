import React from 'react';
import { useState } from 'react';

import "./style/Appointments.css";

// Define a functional component called Appointments that takes in tests and a callback function
const Appointments = ({tests, callback}) => {
  const [selectedIndex, setSelectedIndex] = useState(0)  

  // Declare a function handleClick that takes in a testId and sets the selectedIndex state to the index of the test with that ID, and then calls the callback function with that test ID
  const handleClick = (testId) => {
    const index = tests.findIndex((test) => test.test_id === testId);
    setSelectedIndex(index)
    callback(testId)
  }

  // Declare a function selectedTestStyle that takes in an index and returns a style object with a background color of '#6640DD' and a text color of '#FFFFFF' if the selected index matches the given index, or an empty object otherwise
  const selectedTestStyle = (index) => {
    return selectedIndex === index ? { backgroundColor: '#6640DD', color: '#FFFFFF' } : {};
  };

  return(
    <div className="appointments-wrapper">
      <div className="appointments-grid">
        <div className="appointments-grid-header">
          Date
        </div>
        <div className="appointments-grid-header">
          Location
        </div>
        <div className="appointments-grid-header">
          Address
        </div>
        <div className="appointments-grid-header">
          Type
        </div>
        <div/>

        {
          // Map over each test in the tests array and display its information in a grid item
          tests.map((test, index) => (
            <React.Fragment key={test.test_id}>
              <div className="appointments-grid-item">
                {test.date}
              </div>
              <div className="appointments-grid-item">
                {test.laboratory.name}
              </div>
              <div className="appointments-grid-item">
                {test.laboratory.address}
              </div>
              <div className="appointments-grid-item">
                <div className="appointments-type-border">
                  {test.category.name}
                  </div>
              </div>
              <div className="appointments-grid-item">
                <button style={selectedTestStyle(index)} onClick={() => handleClick(test.test_id)}> 
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