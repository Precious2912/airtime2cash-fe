import React from "react";
import logo from "../../assets/icon/logo2.svg";
import { Link } from "react-router-dom";
import backicon from "../../assets/icon/backicon.svg";
import StyleButton from '../../styles/Button.styles.js'
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

export const Register = () => {
  return (
    <Wrapper>
      <Wrapper2>
        <Logo src={logo} alt="logo" />

        <HeaderAndButton>
          <Link to="/">
          <Back>
            <img src={backicon} alt="logo" />
            Go back
          </Back>
          </Link>
          <FormHeader>Create an account</FormHeader>
        </HeaderAndButton>
        <FormStyle>
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
        <StyleButton borderRadius='0px' height='48px' width='100%'>Sign Up</StyleButton>

        </FormStyle>
        <StyledFooter>
          Already have an an account? <Link to="/login"> Sign In </Link>
        </StyledFooter>
      </Wrapper2>
    </Wrapper>
  );
};
