import React, { useState, useEffect, useContext, createContext } from 'react'

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) return;

    setUser(JSON.parse(user));
    // eslint-disable-next-line
  }, [])
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider