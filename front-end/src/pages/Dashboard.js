import "./style/Dashboard.css"

import DashboardProfile from "../components/dashboard/DashboardProfile";
import DashboardInfo from "../components/dashboard/DashboardInfo";
import DashboardGauges from "../components/dashboard/DashboardGauges";
import DashboardNavbar from "../components/dashboard/DashboardNavbar";

import { useContext, useState, useEffect } from 'react';

import UserContext from "../contexts/UserContext";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const [currentCategory, setCurrentCategory] = useState(user.tests[0].category.id);
  const [currentTest, setCurrentTest] = useState(user.tests[0]);

  const userCategories = [];
  for (let test of user.tests) {
    const exists = userCategories.some(category => category.id === test.category.id);
    if(!exists) {
      userCategories.push(test.category)
    }
  }

  const handleNavbarClick = (categoryId) => {
    for (let test of user.tests) {
      if(categoryId === test.category.id) {
        setCurrentTest(test);
      }
    }
    setCurrentCategory(categoryId)
  }

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-container">
        <div className="dashboard-title">
          <h1> My Health </h1>
        </div>
        <DashboardNavbar callback={handleNavbarClick} defaultIndex={currentCategory} categories={userCategories} />
        <div className="dashboard-content">
          <div>
            <div className="dashboard-content-container">
              <DashboardProfile {...user.details} />
            </div>
          </div>
          <div>
            <div className="dashboard-content-container">
              <DashboardInfo test = {currentTest}/>
            </div>
            <div>
              <DashboardGauges testResults = {currentTest.results} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;