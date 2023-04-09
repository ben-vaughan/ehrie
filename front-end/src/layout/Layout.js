import "./style/layout.css";

import Header from "../components/layout/Header";
import { Outlet } from "react-router-dom";
import UserContext from '../contexts/UserContext';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Layout = () => {
  // Get user object and navigate function from UserContext and react-router-dom respectively
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  // Redirect to the home page if there's no user or the user hasn't signed in yet
  useEffect(() => {
    if(!user || user.patient_id === "") {
      navigate('/')
    }
  })

  return (
    <div>
      <Header/>
      <div className="content">
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout;