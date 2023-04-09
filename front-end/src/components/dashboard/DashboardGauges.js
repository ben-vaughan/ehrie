import "./style/dashboard-gauges.css";
import Gauge from "../../elements/Gauge.js";

// Define a functional component called DashboardGauges that takes in a prop called testResults
const DashboardGauges = ({ testResults }) => {
  return (
    // Render the gauges using the testResults array passed in as props
    <div className="gauges-wrapper">
      { 
        testResults.map((test) => 
          <div className="gauges-container">
            <div className="gauges-inner">
              {/* Define a Gauge component with various props passed in */}
              <Gauge
                key = {test.test_result_id}
                nameShort = {test.components.name_short}
                nameLong = {test.components.name_long}
                value = {test.components.value}
                unit = {test.components.unit_short}
                min = { test.components.mean - (test.components.stdev * 2.5) }
                max = { test.components.mean + (test.components.stdev * 2.5) }
                color = { function(value) {
                  if(value > (test.components.mean - (test.components.stdev * 2)) && value < (test.components.mean + (test.components.stdev * 2))) {
                    return '#6640DD';
                  }
                  else {
                    return '#FFDC6A'
                  }
                }}
                label = {function(value) {
                  return Math.round(value * 100) / 100 + " " + this.unit
                }}
              />
            </div>
          </div>
        )
      }
    </div>
  )
}

export default DashboardGauges;