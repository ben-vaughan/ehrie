import "./style/dashboard-navbar.css";
import { useState } from "react";

const DashboardNavbar = ({ callback, defaultIndex, categories }) => {
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex || 0)  

  const handleClick = (selection) => {
    setSelectedIndex(selection)
    callback(selection)
  }

  const listItemStyle = (index) => {
    return selectedIndex === index ? { backgroundColor: '#6640DD', color: '#FFFFFF' } : {};
  };

  return(
    <div className="dashboard-navbar">
      <ul>
        {
         categories.map((category) => 
          <li onClick={() => handleClick(category.id)} style={listItemStyle(category.id)}> {category.name} </li>
         ) 
        }
      </ul>      
    </div>
  )
}

export default DashboardNavbar;