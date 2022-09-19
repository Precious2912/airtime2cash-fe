import { useState } from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";
import logo from "../../assets/icon/logo2.svg";
import {
  BackDiv,
  Container,
  UpdateUserPageStyle,
} from "../Dashboard/update/UpdateUserStyles";

export const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleChange = (e) => {
    switch (e.target.name) {
      case "email":
        setemail(e.target.value);
        break;
      case "password":
        setpassword(e.target.value);
        break;
      default:
    }
  };

  return (
    <UpdateUserPageStyle>
      <BackDiv />
      <Container>
        <div className="container">
          <img src={logo} alt="logo" className="logo" />

          <h2 className="login-header-text">Login</h2>

          <form action="" className="form-group">
            <div className="input-element">
              <label htmlFor="">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className="input-element">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Phone Number"
                value={password}
                onChange={handleChange}
              />
            </div>

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
