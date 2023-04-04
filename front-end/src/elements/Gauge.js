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
    if (!gaugeRef.current) {
      const options = { ...defaultOptions, ...props };
      gaugeRef.current = SvgGauge(gaugeEl.current, options);
      gaugeRef.current.setValue(options.initialValue);
    }
    gaugeRef.current.setValueAnimated(props.value, 1);
  }, [props]);

  return (
  <div>
    <div ref={gaugeEl} className="gauge-container">
      <div className="gauge-title">
        <h1> {props.nameShort} </h1>
        <p> {props.nameLong} </p>
      </div>
    </div>
  </div>
)};

export default Gauge;

