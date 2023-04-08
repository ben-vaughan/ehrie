import "./style/Entrance.css"
import { useNavigate } from "react-router-dom";

import React, { useState, useEffect } from 'react';
import Loading from "./Loading";

const Entrance = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [finishedLoading, setFinishedLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsLoading(true);
  }

  const finishedLoadingCallback = () => {
    setIsLoading(false);
    setFinishedLoading(true);
  };

  useEffect(() => {
    if (finishedLoading) {
      navigate('/app');
    }
  }, [finishedLoading, navigate])


  return (
    <div className="entrance-wrapper">
      <div className="entrance-container">
        <div className="entrance-background">
          <div className="entrance-display">
            <div className="entrance-text">
              {isLoading ? 
                (
                  <Loading callback={finishedLoadingCallback} />
                ) : (
                  <>
                    <h3> Welcome </h3>
                    <p> Thank you for taking the time to participate in this study. <br/> <br/>
                      By using this platform,
                      you are contributing to the academic landscape of new tools
                      and technologies that can improve patient care and health outcomes. 
                      Your participation in this study is greatly appreciated and will
                      help us better understand how to design and develop future healthcare
                      technologies. Thank you for being a part of this research project.
                    </p>
                    {/* <Link className="entrance-text-button" to="/app"> Explore › </Link> */}
                    <button className="entrance-text-button" onClick={handleClick}> Explore </button>
                  </>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Entrance;
