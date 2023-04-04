import "./style/dashboard-gauges.css"
import Gauge from "../../elements/Gauge.js"

const DashboardGauges = (props) => {
  return (
    <div className="gauges-wrapper">
      { 
        props.gauges.map((gauge) => 
          <div className="gauges-container">
            <div className="gauges-inner">
              <Gauge
                nameShort = {gauge.nameShort}
                nameLong = {gauge.nameLong}
                value = {gauge.value}
                unit = {gauge.unit}
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