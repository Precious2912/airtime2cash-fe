import { createContext, useReducer } from "react";

export const AuthContext = createContext();

const initialState = {
  loggedIn: false,
  token: "",
  user: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        token: localStorage.getItem("token"),
        user: action.payload,
      };

    case "LOGOUT":
      return {
        ...state,
        token: localStorage.removeItem("token"),
      };
  }
}

export const AuthProvider = ({ children }) => {
const [state, dispatch] = useReducer(reducer, initialState);

const login = () => {
  dispatch({type: 'LOGIN'})
}

const logout = () => {
  dispatch({ type: "LOGOUT" });
};


  return (
    <AuthContext.Provider value={{login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};
