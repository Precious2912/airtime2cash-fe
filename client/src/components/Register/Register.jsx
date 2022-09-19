import React from "react";
import logo from "../../assets/icon/logo2.svg";
import { Link } from "react-router-dom";
import backicon from "../../assets/icon/backicon.svg";
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

export const Register = () => {
  return (
    <Wrapper>
      <Wrapper2>
        <Logo src={logo} alt="logo" />

        <HeaderAndButton>
          <Back>
            <img
              src={backicon}
              style={{
                width: 13,
                height: 13,
              }}
              alt="logo"
            />{" "}
            Go back
          </Back>
          <FormHeader>Create an account</FormHeader>
        </HeaderAndButton>

        <form>
          <StyledLabel> Name</StyledLabel>
          <StyledInput placeholder="Enter your name"></StyledInput>
          <StyledLabel> Email</StyledLabel>
          <StyledInput placeholder="Enter your email"></StyledInput>
          <StyledLabel> Phone Number</StyledLabel>
          <StyledInput placeholder="Enter your phone number"></StyledInput>
          <StyledLabel> Password</StyledLabel>
          <StyledInput placeholder="Enter your password"></StyledInput>
          <StyledLabel> Confirm Password</StyledLabel>
          <StyledInput placeholder="Confirm password"></StyledInput>
          <StyledFooterButton>Sign Up</StyledFooterButton>
        </form>
        <StyledFooter>
          Already have an an account? <Link to="/login"> Sign In </Link>
        </StyledFooter>
      </Wrapper2>
    </Wrapper>
  );
};
