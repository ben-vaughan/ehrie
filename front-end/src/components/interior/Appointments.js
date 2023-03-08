import React from 'react';
import "./style/Appointments.css";

const Appointments = (props) => {

  return(
    <div className="appointments-wrapper">
      <div className="appointments-grid">
        <div className="appointments-grid-header">
          Location
        </div>
        <div className="appointments-grid-header">
          Date
        </div>
        <div className="appointments-grid-header">
          Provider
        </div>
        <div/>

        {
          props.data.map((i) => (
            <React.Fragment key={i}>
              <div className="appointments-grid-item">
                {i.location}
              </div>
              <div className="appointments-grid-item">
                {i.date}
              </div>
              <div className="appointments-grid-item">
                {i.provider}
              </div>
              <div className="appointments-grid-item">
                <button> Results </button>
              </div>
            </React.Fragment>
          ))
        }


      </div>
    </div>
  )
}

export default Appointments;