import React, { useState } from 'react'
import UserContext from './UserContext'

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

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