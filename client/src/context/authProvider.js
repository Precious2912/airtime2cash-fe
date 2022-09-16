import { createContext, useState } from "react";

export const AuthContext = createContext({
  loggedIn: false,
  userName: null,
  id: null,
  token: null,
});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    loggedIn: false,
    username: "",
    id: "",
    token: "",
  });

  const login = (userName, id, token) => {
    setAuth((prevState) => ({
      ...prevState,
      loggedIn: true,
      userName,
      id,
      token,
    }));
  };

  const logout = (userName, id, token) => {
    setAuth((prevState) => ({
      ...prevState,
      loggedIn: false,
      userName,
      id,
      token,
    }));
  };

  return (
    <AuthContext.Provider value={{ ...auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

