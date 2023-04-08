import './style/header.css'

import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/icons/heart-pulse.svg';
import settings from '../../assets/icons/settings.svg';
import x from '../../assets/icons/x.svg';

const Header = () => {
  const [modalActive, setModalActive] = useState(false);
  const [selectedPage, setSelectedPage] = useState(0);
  const [preferences, setPreferences] = useState([false, false, false, false])

  const navigate = useNavigate();

  const listItemStyle = (index) => {
    return selectedPage === index ? { backgroundColor: '#6640DD', color: '#FFFFFF', width: '100%', padding:"2px 10px", borderRadius: '25px'} : {};
  }

  const navHome = () => {
    navigate('/')
  }

  const flipSettings = () => {
    if (modalActive) { setModalActive(false); }
    else { setModalActive(true); }
  }

  const handlePreferenceChange = (index) => {
    const newPreferences = [...preferences];
    newPreferences[index] = !newPreferences[index];
    setPreferences(newPreferences)
  }

  return (
    <div>
      <div className="header-container">
        <div className="header-logo">
          <img style={{cursor: "pointer"}} onClick={navHome} src={logo} alt="A heartbeat pulse icon."/>
        </div>
        <div className="header-navbar">
          <ul>
            <li> <Link onClick={() => setSelectedPage(0)} style={listItemStyle(0)} className="navbar-link" to="/app"> Dashboard </Link> </li>
            <li> <Link onClick={() => setSelectedPage(1)} style={listItemStyle(1)} className="navbar-link" to="/app/history"> History </Link> </li>
          </ul>
        </div>
        <div className="">
          <img style={{cursor: "pointer"}} onClick={flipSettings} src={settings} alt="A settings slider."/>
        </div>
      </div>
      {
        modalActive ?
        (
          <>
            <div className="settings-outer">
              <div className="settings-inner">
                <div className="settings-inner-exit">
                  <img style={{cursor: "pointer"}} onClick={flipSettings} src={x} alt="An exit button."/>
                </div>
                <div className="settings-inner-title">
                  Preferences
                </div>
                <div className="settings-inner-content">
                  <div className="settings-inner-content-row">
                    <div className="settings-inner-content-label">
                      I consent to sharing my health data with healthcare professionals to support improvements and innovation in the healthcare industry.
                    </div>
                    <div className="settings-inner-content-select">
                      <label class="switch">
                        <input type="checkbox" checked={preferences[0]} onChange={() => handlePreferenceChange(0)}/>
                        <span class="slider"></span>
                      </label>
                    </div>
                  </div>
                  <div className="settings-inner-content-row">
                    <div className="settings-inner-content-label">
                      I consent to sharing my health data with government bodies aiming to improve health-related policies.
                    </div>
                    <div className="settings-inner-content-select">
                      <label class="switch">
                        <input type="checkbox" checked={preferences[1]} onChange={() => handlePreferenceChange(1)}/>
                        <span class="slider"></span>
                      </label>
                    </div>
                  </div>
                  <div className="settings-inner-content-row">
                    <div className="settings-inner-content-label">
                      I consent to sharing my health data with academic researchers aiming to complete health research.
                    </div>
                    <div className="settings-inner-content-select">
                      <label class="switch">
                        <input type="checkbox" checked={preferences[2]} onChange={() => handlePreferenceChange(2)}/>
                        <span class="slider"></span>
                      </label>
                    </div>
                  </div>
                  <div className="settings-inner-content-row">
                    <div className="settings-inner-content-label">
                      I consent to sharing my health data with private organisations seeking to use health data for research or development.
                    </div>
                    <div className="settings-inner-content-select">
                      <label class="switch">
                        <input type="checkbox" checked={preferences[3]} onChange={() => handlePreferenceChange(3)}/>
                        <span class="slider"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
          </>
        )
      }
    </div>
  )
}

export default Header;