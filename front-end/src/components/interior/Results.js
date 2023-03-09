import React from 'react';
import "./style/Results.css";

const Results = ({data}) => {

  return(
    <div className="results-wrapper">
      <div className="results-title-wrapper">
        <div className="results-title">
          {data.location}
        </div>
        <div className="results-subtitle">
          {data.date}
        </div>
        <div className="results-subtitle">
          {data.provider}
        </div>
      </div>
      <div className="results-grid">
        <div/>
        <div/>
        {
          data.results.map((i) => (
            <React.Fragment key={i}>
              <div className="results-grid-item">
                <div>
                  <div className="results-grid-item-main">
                    {i.name}
                  </div>
                  <div>
                  {i.name_long}
                  </div>
                </div>
              </div>
              <div className="results-grid-item">
                <button>
                  {i.result}
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

