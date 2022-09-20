import { useState } from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";
import logo from "../../assets/icon/logo2.svg";
import { useNavigate } from "react-router-dom";
import {
  BackDiv,
  Container,
  UpdateUserPageStyle,
} from "../Dashboard/update/UpdateUserStyles";
import { UseAuth } from "../../context/useAuth";

export const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    userName: "",
    password: "",
  });
  const { login } = UseAuth();

  console.log(formData);

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(formData);
    navigate("/dashboard");
  };

  return (
    <UpdateUserPageStyle>
      <BackDiv />
      <Container>
        <div className="container">
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>

          <h2 className="login-header-text">Login</h2>

          <form action="" className="form-group" onSubmit={handleLogin}>
            <div className="input-element">
              <label htmlFor="">Email/Username</label>
              <input
                type="text"
                name="emailOrUsername"
                placeholder="Enter your email or username"
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    emailOrUsername: e.target.value.trim(),
                  });
                }}
              />
            </div>
            <div className="input-element">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    password: e.target.value.trim(),
                  });
                }}
              />
            </div>
            <Link to="/user/forgotpassword">
              <p
                style={{
                  color: "#4285F4",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "12px",
                  lineHeight: "15px",
                  cursor: "pointer",
                }}
              >
                Forgot Password?
              </p>
            </Link>
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
        </div>
        <p className="create-account">
          Don't have an account ?
          <Link to="/register" className="create-btn">
            Create Account
          </Link>
        </p>
      </Container>
    </UpdateUserPageStyle>
  );
};
