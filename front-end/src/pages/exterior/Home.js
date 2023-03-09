
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style/home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-container">
        <div className="hero-text">
          <div className="hero-text-title">
            Your Health, <br/> Your Way.
          </div>
          <div className="hero-text-subtitle">
          Explore Ireland's first Electronic Health Record application, <br/> designed to make viewing laboratory results easier.
          </div>
          <div className="hero-button-group">
            <button className="hero-button-sign-up"> Sign up </button>
            <Link to="/login">
              <button className="hero-button-log-in"> Log in </button>
            </Link>
          </div>
        </div>
      </div>s
    </div> 
  )
}

export default Home;