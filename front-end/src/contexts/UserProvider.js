import React, { useState } from 'react'
import UserContext from './UserContext'

const UserProvider = ({ children }) => {
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

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      { children }
    </UserContext.Provider>
  )
}

export default UserProvider;


