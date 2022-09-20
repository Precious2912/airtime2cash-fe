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

    case "VERIFY_EMAIL":
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

    // case "FORGOT_PASSWORD":
    //   return {
    //     ...state,
    //     loggedIn: false,
    //     user: action.payload,
    //   };

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
              navigate("/emailsent");
            }, 2000);

            return res;
          }
        })
        .catch((err) => {
          toast.error(err.response.data.Error, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
    } catch (err) {
      throw new Error(`${err}`);
    }
  };

  // const forgotPassword = async (formData) => {
  //   try {
  //     const email = formData.email

  //     await axios
  //       .post(`http://localhost:7000/user/forgetPassword`, email)
  //       .then((res) => {
  //         if (res.status === 200) {
  //           console.log(res)
  //           // add toastify promise here
  //           console.log('sucess')
  //           dispatch({ type: "FORGOT_PASSWORD", payload: res.data });
  //         }
  //       });
  //   } catch (err) {
  //     console.log(err)
  //     throw new Error(`${err}`);
  //     // add toastify here
  //   }
  // };

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

  return (
    <AuthContext.Provider value={{ register, login, logout, state }}>
      {children}
    </AuthContext.Provider>
  );
};
