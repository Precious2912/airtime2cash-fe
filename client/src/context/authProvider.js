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
        loggedIn: false,
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
    case "GETUSER":
      return {
        ...state,
        loggedIn: true,
        user: action.payload,
      };

    case "FORGOT_PASSWORD":
      return {
        ...state,
        loggedIn: false,
        user: action.payload,
      };

    case "RESET_PASSWORD":
      return {
        ...state,
        loggedIn: false,
        user: action.payload,
      };

    case "LOGOUT":
      return {
        ...state,
        loggedIn: false,
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
        .post(
          `${process.env.REACT_APP_BACKEND_URL}/user/register`,
          registerUser
        )
        .then((res) => {
          if (res.status === 201) {
            dispatch({ type: "REGISTER", payload: res.data });
            toast.success(res.data.message, {
              autoClose: 1000,
            });
            setTimeout(() => {
              navigate("/emailsent");
              toast.success("Verify your email", {
                autoClose: 3000,
              });
            }, 2000);

            return res;
          }
        })
        .catch((err) => {
          toast.error(err.response.data.Error, {
            autoClose: 3000,
          });
        });
    } catch (err) {
      toast.error(err.response.data.Error, {
        autoClose: 3000,
      });
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
        .post(`${process.env.REACT_APP_BACKEND_URL}/user/login`, loginUser)
        .then((res) => {
          if (res.status === 200) {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("id", res.data.id);
            // localStorage.setItem("firstName", res.data.user_info.firstName);
            // localStorage.setItem("lastName", res.data.user_info.lastName);
            // localStorage.setItem("name", res.data.user_info.phoneNumber);
            // localStorage.setItem("phoneNumber", res.data.user_info.email);
            // localStorage.setItem("avatar", res.data.user_info.avatar);
            // localStorage.setItem("userName", res.data.user_info.userName);
            dispatch({ type: "LOGIN", payload: res.data });
            toast.success(res.data.message, {
              autoClose: 3000,
            });
            const id = localStorage.getItem("id");
            setTimeout(() => {
              navigate(`/dashboard/${id}`);
            }, 2000);
            return;
          }
        })
        .catch((err) => {
          toast.error("Invalid login credentials", {
            autoClose: 3000,
          });
        });
    } catch (err) {
      console.log(err.response.data);
      toast.error("Please kindly register", {
        autoClose: 3000,
      });
      throw new Error(`${err}`);
    }
  };

  const forgotPassword = async (formData) => {
    try {
      const email = {
        email: formData.email,
      };

      await axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/user/forgetPassword`, email)
        .then((res) => {
          if (res.status === 200) {
            console.log(res);
            // should take you to a check your email-for-reset-password-link page
            navigate("/emailsent");
            toast.success("Reset password sent to you email", {
              autoClose: 3000,
            });
            dispatch({ type: "FORGOT_PASSWORD", payload: res.data });
          }
        });
    } catch (err) {
      toast.error("No user found, kindly register", {
        autoClose: 3000,
      });
      throw new Error(`${err}`);
    }
  };

  const resetPassword = async (formData, token) => {
    try {
      const password = {
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      };

      await axios
        .patch(
          `${process.env.REACT_APP_BACKEND_URL}/user/resetPassword/${token}`,
          password
        )
        .then((res) => {
          if (res.status === 202) {
            dispatch({
              type: "RESET_PASSWORD",
              payload: res.data,
            });
            setTimeout(() => {
              navigate("/login");
              toast.success("Password reset successfully", {
                autoClose: 1500,
              });
            }, 2000);
          }
        });
    } catch (err) {
      toast.error(err.response.data.Error, {
        autoClose: 3000,
      });
      throw new Error(`${err}`);
    }
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.clear();
    navigate("/login");
  };

  const getUser = async (id) => {
    try {
      //
      await axios
        .get(`http://localhost:7000/user/singleUser/${id}`)
        .then((res) => {
          //  localStorage.setItem("user", res.data.user.id);
          if (res.status === 200) {
            dispatch({ type: "GETUSER", payload: res.data });
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

  const updateProfile = async (formData) => {
    try {
      const form = {
        firstName: formData.firstName || localStorage.getItem("firstName"),
        lastName: formData.lastName || localStorage.getItem("lastName"),
        userName: formData.username || localStorage.getItem("userName"),
        phoneNumber:
          formData.phoneNumber || localStorage.getItem("phoneNumber"),
        avatar: formData.avatar || localStorage.getItem("avatar"),
      };
      const id = localStorage.getItem("id");
      await axios
        .patch(`http://localhost:7000/user/update/${id}`, form)
        .set("Authorization", `Bearer ${localStorage.getItem("token")}`)
        .then((response) => {
          toast.success(response.data.message);
          console.log(response);
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
      value={{
        register,
        login,
        getUser,
        forgotPassword,
        updateProfile,
        resetPassword,
        logout,
        state,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
