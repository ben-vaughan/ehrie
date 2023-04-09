import React from 'react';
import "./style/Results.css";

// Define a functional component called Results that takes in a test object
const Results = ({ test }) => {
  return (
    <div className="results-wrapper">
      <div className="results-title-wrapper">
        <div className="results-title">
          {test.laboratory.name.replace('"', "'")}
          <div className="results-category">
            {test.category.name}
          </div>
        </div>
        <div className="results-subtitle">
          {test.laboratory.address}
        </div>
        <div className="results-subtitle">
          {test.date}
        </div>
      </div>
      <div className="results-grid">
        {
          // Map over each test result in the test results array and display its information in a grid item
          test.results.map((result) => (
            <React.Fragment key={result.test_result_id}>
              <div className="results-grid-item">
                  <div className="results-grid-item-main">
                    {result.components.name_short}
                  </div>
                  <div style={{fontWeight: '100', fontSize: '0.8em'}}>
                    {result.components.name_long}
                  </div>
              </div>
              <div className="results-grid-item">
                <div className="results-grid-item-value">
                  {`${Math.round(result.components.value * 100) / 100} ${result.components.unit_short}` }
                </div>
              </div>
            </React.Fragment>
          ))
        }
      </div>
    </div>
  )
}

export default Results;

