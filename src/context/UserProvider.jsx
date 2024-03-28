import React, { useState, useContext } from "react";

const userContext = React.createContext();
const userLoginContext = React.createContext();


export function useUserContex() {
  return useContext(userContext);
}

export function useSetUser() {
  return useContext(userLoginContext);
}
export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const setLogin = (name, email, nickname, avatar) => {
    localStorage.setItem("profileObj", JSON.stringify({ name, email, nickname, avatar }));
    setUser({
      name: name,
      email: email,
      avatar: avatar,
      nickname: nickname,
    });
  };
  return (
    <userContext.Provider value={user}>
      <userLoginContext.Provider value={setLogin}>
        {children}
      </userLoginContext.Provider>
    </userContext.Provider>
  );
}
