import React from 'react';
import "./style/Results.css";

const Results = ({ test }) => {
  return (
    <div className="results-wrapper">
      <div className="results-title-wrapper">
        <div className="results-title">
          {test.date}
        </div>
        <div className="results-subtitle">
          {test.date}
        </div>
        <div className="results-subtitle">
          {test.date}
        </div>
      </div>
      <div className="results-grid">
        <div/>
        <div/>
        {
          test.results.map((result) => (
            <React.Fragment key={result.test_result_id}>
              <div className="results-grid-item">
                <div>
                  <div className="results-grid-item-main">
                    {result.components.name_short}
                  </div>
                  <div>
                    {result.components.name_long}
                  </div>
                </div>
              </div>
              <div className="results-grid-item">
                <button>
                  {/* {result.components.value} */}
                  {`${result.components.value} ${result.components.unit_short}` }
                </button>
              </div>
            </React.Fragment>
          ))
        }
      </div>
    </div>
  )
}

export default Results;

