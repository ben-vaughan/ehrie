import "./style/Entrance.css"
import { Link } from "react-router-dom";

import React, { useContext, useEffect } from 'react';
import UserContext from "../contexts/UserContext";

import API from "../utils/api.js"

const Entrance = () => {
  const { user, login } = useContext(UserContext);

  const getPatient = async () => {
    const patientData = await API.getRandomPatient();
    login(patientData.body);
  }

  useEffect(() => {
    let ignore = false;
    if (!ignore) getPatient();
    return () => { ignore = true; }
  }, []);

  return (
    <div className="entrance-wrapper">
      <div className="entrance-container">
        <div className="entrance-background">
          <div className="entrance-display">
            <div className="entrance-text">
              <h3> Welcome </h3>
              <p> Thank you for taking the time to participate in this study. <br/> <br/>
                By using this platform,
                you are contributing to the academic landscape of new tools
                and technologies that can improve patient care and health outcomes. 
                Your participation in this study is greatly appreciated and will
                help us better understand how to design and develop future healthcare
                technologies. Thank you for being a part of this research project.
              </p>
              <Link className="entrance-text-button" to="/app"> Explore › </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Entrance;
