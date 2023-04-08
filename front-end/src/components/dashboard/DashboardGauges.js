import "./style/dashboard-gauges.css";
import Gauge from "../../elements/Gauge.js";

import { useState, useEffect } from "react";

const DashboardGauges = ({ testResults }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    if (!ignore) { 
      setIsLoading(false);
    };
    return () => { ignore = true; }
  }, [isLoading])

  return (
    <div className="gauges-wrapper">
      {isLoading ?
        (

          <>
            <div className="gauges-container">
              <div className="gauges-inner">
                Loading...
              </div>
            </div>
          </>

        ) : (

          <>
            { 
              testResults.map((test) => 
                <div className="gauges-container">
                  <div className="gauges-inner">
                    <Gauge
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
          </>

        )
      }
    </div>
  )
}

export default DashboardGauges;