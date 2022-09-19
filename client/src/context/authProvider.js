import { createContext, useEffect, useReducer } from "react";
import axios from "axios";

export const AuthContext = createContext();

const initialState = {
  loggedIn: false,
  token: "",
  user: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "REGISTER":
      return {
        ...state,
        user: action.data,
      };

    case "LOGIN":
      return {
        ...state,
        loggedIn: true,
        token: localStorage.getItem("token"),
        user: action.payload,
      };

    case "LOGOUT":
      return {
        ...state,
        token: localStorage.removeItem("token"),
      };

    default:
      throw new Error();
  }
}

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const register = async (formData) => {
    try {
      const registerUser = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        userName: formData.userName,
        phoneNumber: formData.phoneNumber,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      };

      const registernewUser = async () => {
        await axios
          .post(`http://localhost:7000/user/register`, registerUser)
          .then((res) => {
            if (res.status === 201) {
              dispatch({ type: "REGISTER", payload: res.data });
              return;
            }
          })
          .catch((err) => {
            console.log(err);
          });
      };
      registernewUser();
    } catch (err) {
      throw new Error(`${err}`);
    }
  };

  const login = (formData) => {
    dispatch({ type: "LOGIN" });
    const loginUser = {
      email: formData.email,
      password: formData.password,
    };
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider value={{ register, login, logout, state }}>
      {children}
    </AuthContext.Provider>
  );
};
