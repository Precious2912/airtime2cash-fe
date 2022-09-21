import React, { useState } from "react";
import logo from "../../assets/icon/logo2.svg";
import { Link } from "react-router-dom";
import backicon from "../../assets/icon/backicon.svg";
import StyleButton from "../../styles/Button.styles.js";
import {
  Wrapper,
  Wrapper2,
  Logo,
  HeaderAndButton,
  Back,
  FormHeader,
  FormStyle,
  StyledLabel,
  StyledInput,
  StyledFooter,
} from "../../styles/registerStyle";

import { UseAuth } from "../../context/useAuth";

export const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    userName: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const { register } = UseAuth();

  // console.log(formData);

  const handleRegister = async (e) => {
    e.preventDefault();
    
    await register(formData);
  };

  return (
    <Wrapper>
      <Wrapper2>
        <Link to="/">
          <Logo src={logo} alt="logo" />
        </Link>

        <HeaderAndButton>
          <Link to="/">
            <Back>
              <img src={backicon} alt="logo" />
              Go back
            </Back>
          </Link>
          <FormHeader>Create an account</FormHeader>
        </HeaderAndButton>

        <FormStyle onSubmit={handleRegister}>
          <StyledLabel>First Name</StyledLabel>
          <StyledInput
            required
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
            required
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
          required
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
          required
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
          required
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
          required
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
          required
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
          <StyleButton borderRadius="0px" height="48px" width="100%">
            Sign Up
          </StyleButton>
        </FormStyle>

        <StyledFooter>
          Already have an an account? <Link to="/login"> Sign In </Link>
        </StyledFooter>
      </Wrapper2>
    </Wrapper>
  );
};
