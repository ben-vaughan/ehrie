import "./style/Dashboard.css"

import DashboardProfile from "../components/dashboard/DashboardProfile";
import DashboardInfo from "../components/dashboard/DashboardInfo";
import DashboardGauges from "../components/dashboard/DashboardGauges";
import DashboardNavbar from "../components/dashboard/DashboardNavbar";

import { useContext, useState } from 'react';

import UserContext from "../contexts/UserContext";

const Dashboard = () => {
  const { user } = useContext(UserContext);

  // Set the current category and test to display by default to the first category and its first test.
  const [currentCategory, setCurrentCategory] = useState(user.tests[0].category.id);
  const [currentTest, setCurrentTest] = useState(user.tests[0]);

  // Create an array of unique categories from the user's tests data.
  const userCategories = [];
  for (let test of user.tests) {
    const exists = userCategories.some(category => category.id === test.category.id);
    if(!exists) {
      userCategories.push(test.category)
    }
  }

  // Handle the click event on the category navbar and update the current category and test to display.
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
        {
          user.patient_id !== "" && 
          // Render the category navbar component only if the user is logged in.
          <DashboardNavbar callback={handleNavbarClick} defaultIndex={currentCategory} categories={userCategories} />
        }
        <div className="dashboard-content">
          <div className="dashboard-content-container">
            {
              user.patient_id !== "" && 
              // Render the user's profile component only if the user is logged in.
              <DashboardProfile {...user.details} />
            }
          </div>
            <div className="dashboard-content-container">
            {
              user.patient_id !== "" && 
              // Render the test info component for the current test only if the user is logged in.
              <DashboardInfo test = {currentTest}/>
            }
            </div>
            <div/>
            <div style={{width: '100%'}}>
            {
              user.patient_id !== "" && 
              // Render the gauges component for the current test results only if the user is logged in.
                <DashboardGauges testResults = {currentTest.results} />
            }
            </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;