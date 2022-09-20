import { createContext, useReducer } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export const AuthContext = createContext();

const initialState = {
  loggedIn: false,
  token: localStorage.getItem("token") || "",
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
    const navigate = useNavigate();
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

      await axios
        .post(`http://localhost:7000/user/register`, registerUser)
        .then((res) => {
          if (res.status === 201) {
            dispatch({ type: "REGISTER", payload: res.data });
            toast.success(res.data.message);
            setTimeout(() => {
               navigate("/login");
            }, 2000)
            
            return;
          }
        })
        .catch((err) => {
        
          toast.error(err.response.data.message)
        });
    } catch (err) {
      throw new Error(`${err}`);
    }
  };

  const login = async (formData) => {
    try {
      const loginUser = {
        emailOrUsername: formData.emailOrUsername,
        password: formData.password,
      };

      await axios
        .post(`http://localhost:7000/user/login`, loginUser)
        .then((res) => {
          if (res.status === 200) {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("id", res.data.id);
            dispatch({ type: "LOGIN", payload: res.data });
            return;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      throw new Error(`${err}`);
    }
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const updateProfile = async (formData) => {
    try {
      const form = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        username: formData.username,
        phoneNumber: formData.phoneNumber,
        avatar: formData.avatar,
      };
      await axios
        .patch("http://localhost:7000/user/update/", form)
        .then((response) => {
          localStorage.setItem(
            "user",
            JSON.stringify({
              id: response.data.User.id,
              firstName: response.data.User.firstName,
              lastName: response.data.User.lastName,
              phoneNumber: response.data.User.phoneNumber,
              username: response.data.User.username,
              avatar: response.data.User.avatar,
              email: response.data.User.email,
            })
          );
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ register, login, logout, updateProfile, state }}
    >
      {children}
    </AuthContext.Provider>
  );
};
