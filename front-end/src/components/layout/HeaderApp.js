import './style/header.css'

import { Link } from 'react-router-dom';
import logo from '../../assets/icons/heart-pulse.svg';

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-logo">
        <img src={logo} alt="A heartbeat pulse icon."/>
      </div>
      <div className="header-navbar">
        <ul>
          <li> <Link className="navbar-link" to="/app"> Dashboard </Link> </li>
          <li> <Link className="navbar-link" to="/app/history"> My History </Link> </li>
        </ul>
      </div>
      <div className="header-signin">
        <span> Log in </span>
        <span className="header-signin-signup"> Sign up </span>
      </div>
    </div>
  )
}

export default Header;