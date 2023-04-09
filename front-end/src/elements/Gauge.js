import "./style/gauge.css"
import { useRef, useEffect } from "react"
import SvgGauge from "svg-gauge";

const defaultOptions = {
  animDuration: 1,
  showValue: true,
  initialValue: 2,
  max: 100,
  dialStartAngle: 160,
  dialEndAngle: 20
};

const Gauge = props => {

  const gaugeEl = useRef(null);
  const gaugeRef = useRef(null);

  useEffect(() => {
    // If the gauge doesn't exist, create it with the given props
    if (!gaugeRef.current) {
      const options = { ...defaultOptions, ...props };          // Merge default options with props
      gaugeRef.current = SvgGauge(gaugeEl.current, options);    // Create the gauge with the given options
      gaugeRef.current.setValue(options.initialValue);          // Set the initial value of the gauge
    }
    // Update the gauge value to the new props value
    gaugeRef.current.setValueAnimated(props.value);

  }, [props]);

  return (
  <div>
    <div key={props.key} ref={gaugeEl} className="gauge-container">
      <div className="gauge-title">
        <h1> {props.nameShort} </h1>
        <p> {props.nameLong} </p>
      </div>
    </div>
  </div>
)};



export default Gauge;

