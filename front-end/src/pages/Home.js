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
            <button className="hero-button-log-in"> Log in </button>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default Home;