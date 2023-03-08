import "./style/Results.css";

const Results = () => {

  return(
    <div className="results-wrapper">
      <div className="results-grid">
        <div className="results-grid-header">
          <span> Subject </span>
        </div>
        <div className="results-grid-header">
          <span> Result </span>
        </div>

        <div className="results-grid-item">
          <div>
            <div className="results-grid-item-main">
              HCT
            </div>
            <div>
              Hematocrit
            </div>
          </div>
        </div>
        <div className="results-grid-item">
          <button>
            45.4%
          </button>
        </div>

        <div className="results-grid-item">
          <div>
            <div className="results-grid-item-main">
              HCT
            </div>
            <div>
              Hematocrit
            </div>
          </div>
        </div>
        <div className="results-grid-item">
          <button>
            45.4%
          </button>
        </div>

      </div>
    </div>
  )
}

export default Results;

