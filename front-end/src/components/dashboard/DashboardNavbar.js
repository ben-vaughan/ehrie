import "./style/dashboard-navbar.css";
import { useState } from "react";

// Define a functional component called DashboardNavbar that takes in a callback, a defaultIndex, and an array of categories
const DashboardNavbar = ({ callback, defaultIndex, categories }) => {
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex || 0)  

  // Declare a function handleClick that takes in a selection and sets the selectedIndex state to that selection, and then calls the callback function with that selection
  const handleClick = (selection) => {
    setSelectedIndex(selection)
    callback(selection)
  }

  // Declare a function listItemStyle that takes in an index and returns a style object with a background color of '#6640DD' and a text color of '#FFFFFF' if the selected index matches the given index, or an empty object otherwise
  const listItemStyle = (index) => {
    return selectedIndex === index ? { backgroundColor: '#6640DD', color: '#FFFFFF' } : {};
  };

  return(
    <div className="dashboard-navbar">
      <ul>
        {
          // Map over each category in the categories array and display its name in a list item
         categories.map((category) => 
          <li key={category.id} onClick={() => handleClick(category.id)} style={listItemStyle(category.id)}> {category.name} </li>
         ) 
        }
      </ul>      
    </div>
  )
}

export default DashboardNavbar;