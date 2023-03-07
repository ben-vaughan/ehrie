import { Link } from 'react-router-dom';
import './style/header.css'
import logo from '../../assets/icons/heart-pulse.svg';

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-logo">
        <img src={logo} alt="A heartbeat pulse icon."/>
      </div>
      <div className="header-navbar">
        <ul>
          <li> <Link className="navbar-link" to="/about"> About </Link> </li>
          <li> <Link className="navbar-link" to="/privacy"> Privacy </Link> </li>
          <li> <Link className="navbar-link" to="/faq"> FAQ </Link> </li>
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