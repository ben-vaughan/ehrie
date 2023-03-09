import React from 'react';
import "./style/Appointments.css";

const Appointments = ({appointments, handleUpdate}) => {

  const handleClick = (appointmentData) => {
    handleUpdate(appointmentData)
  }

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
        <div className="appointments-grid-header">
          Type
        </div>
        <div/>

        {
          appointments.map((i) => (
            <React.Fragment key={i.id}>
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
                <div className="appointments-type-border">
                  {i.type}
                  </div>
              </div>
              <div className="appointments-grid-item">
                <button onClick={() => handleClick(i)}> 
                  Results
                </button>
              </div>
            </React.Fragment>
          ))
        }


      </div>
    </div>
  )
}

export default Appointments;