import React, { useState } from "react";
import logo from "../../assets/icon/logo2.svg";
import { Link } from "react-router-dom";
import backicon from "../../assets/icon/backicon.svg";
import { useNavigate } from "react-router-dom";
import {
  Wrapper,
  Wrapper2,
  Logo,
  HeaderAndButton,
  Back,
  FormHeader,
  StyledLabel,
  StyledInput,
  StyledFooter,
  StyledFooterButton,
} from "../../styles/registerStyle";

import { UseAuth } from "../../context/useAuth";

export const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    userName: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const { state, register } = UseAuth();
  console.log("outside-----" + register);
  console.log(state.user);

  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("here");
    await register(formData);
    navigate("/login");
  };

  return (
    <Wrapper>
      <Wrapper2>
        <Logo src={logo} alt="logo" />

        <HeaderAndButton>
          <Back>
            <Link to="/">
              <img
                src={backicon}
                style={{
                  width: 13,
                  height: 13,
                }}
                alt="logo"
              />{" "}
              Go back
            </Link>
          </Back>
          <FormHeader>Create an account</FormHeader>
        </HeaderAndButton>

        <form onSubmit={handleSubmit}>
          <StyledLabel>First Name</StyledLabel>
          <StyledInput
            placeholder="Enter your first name"
            type="text"
            name="firstName"
            onChange={(e) =>
              setFormData({
                ...formData,
                firstName: e.target.value.trim(),
              })
            }
          ></StyledInput>
          <StyledLabel>Last Name</StyledLabel>
          <StyledInput
            placeholder="Enter your last name"
            type="text"
            name="lastName"
            onChange={(e) =>
              setFormData({
                ...formData,
                lastName: e.target.value.trim(),
              })
            }
          ></StyledInput>
          <StyledLabel> Email</StyledLabel>
          <StyledInput
            placeholder="Enter your email"
            type="email"
            name="email"
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value.trim(),
              })
            }
          ></StyledInput>

          <StyledLabel> Username</StyledLabel>
          <StyledInput
            placeholder="Enter your username"
            type="text"
            name="userName"
            onChange={(e) =>
              setFormData({
                ...formData,
                userName: e.target.value.trim(),
              })
            }
          ></StyledInput>

          <StyledLabel> Phone Number</StyledLabel>
          <StyledInput
            placeholder="Enter your phone number"
            type="text"
            name="phoneNumber"
            onChange={(e) =>
              setFormData({
                ...formData,
                phoneNumber: e.target.value.trim(),
              })
            }
          ></StyledInput>
          <StyledLabel> Password</StyledLabel>
          <StyledInput
            placeholder="Enter your password"
            type="password"
            name="password"
            onChange={(e) =>
              setFormData({
                ...formData,
                password: e.target.value.trim(),
              })
            }
          ></StyledInput>
          <StyledLabel> Confirm Password</StyledLabel>
          <StyledInput
            placeholder="Confirm password"
            type="password"
            name="confirmPassword"
            onChange={(e) =>
              setFormData({
                ...formData,
                confirmPassword: e.target.value.trim(),
              })
            }
          ></StyledInput>
          <StyledFooterButton>Sign Up</StyledFooterButton>
        </form>
        <StyledFooter>
          Already have an an account? <Link to="/login"> Sign In </Link>
        </StyledFooter>
      </Wrapper2>
    </Wrapper>
  );
};
