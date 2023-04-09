import "./style/Entrance.css"
import { useNavigate } from "react-router-dom";

import React, { useState, useEffect } from 'react';
import Loading from "./Loading";

const Entrance = () => {
  const [isLoading, setIsLoading] = useState(false);              // state to keep track of loading status
  const [finishedLoading, setFinishedLoading] = useState(false);  // state to keep track of whether loading is finished
  const navigate = useNavigate();                                 // hook for navigating to a different page

  const handleClick = () => {
    setIsLoading(true);                                           // set loading state to true when user clicks the button
  }

  const finishedLoadingCallback = () => {
    setIsLoading(false);                                          // set loading state to false when loading is finished
    setFinishedLoading(true);                                     // set finished loading state to true when loading is finished
  };

  useEffect(() => {
    // check if finished loading state is true
    if (finishedLoading) {
       // navigate to the app page if finished loading
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
