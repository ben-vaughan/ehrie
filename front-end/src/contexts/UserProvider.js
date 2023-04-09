import React, { useState } from 'react'
import UserContext from './UserContext'

// Define a component called `UserProvider`
const UserProvider = ({ children }) => {

  // Initialize user state with default values
  const [user, setUser] = useState(
    {
      patient_id: "",
      gp_id: "",
      
      details: {
        first_name: "",
        last_name: "",
        date_of_birth: "",
        sex: "",
        address: "",
        weight: "",
        height: "",
        blood: ""
      },
    
      tests: [
        {
          test_id: "",
          date: "",
          category: {
            id: 0,
            name: ""
          },
          laboratory: {
            id: "",
            name: "",
            address: "",
            phone: ""
          }
        }
      ],
    }
  );

  // Define a function to set user data on login
  const login = (userData) => {
    setUser(userData);
  };

  // Define a function to clear user data on logout
  const logout = () => {
    setUser(null);
  };

  // Render the `UserProvider` component, providing context with user data and login/logout functions to its children
  return (
    <UserContext.Provider value={{ user, login, logout }}>
      { children }
    </UserContext.Provider>
  )
}

export default UserProvider;


