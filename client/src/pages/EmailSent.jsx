import React, {useState} from "react";
import { Link } from "react-router-dom";
import mailIcon from "../assets/icon/mail.svg"; 
import StyleButton from '../styles/Button.styles.js'
import { UseAuth } from "../context/useAuth";

import {
  StyledContainer,
  StyledFormArea,
  StyledTitle,
  StyledSubTitle,
  ExtraText,
  TextLink,
  StyledFormButton,
  colors,
  Icon,
  ButtonWrapper
} from "../styles/emailStyle";


export const EmailSent = ({text, password, email}) => {
  const user_email = localStorage.getItem('email')

    const { forgotPassword } = UseAuth();
     const [formData, setFormData] = useState({
       email: user_email,
     });

    const handleForgetPassword = async (e) => {
      e.preventDefault();
      await forgotPassword(formData);
    };
  return (
    <StyledContainer>
      <StyledFormArea>
        <Icon>
          <img src={mailIcon} alt="" />
        </Icon>
        <StyledTitle>Check your email</StyledTitle>
        <StyledSubTitle>{text}</StyledSubTitle>

        <ExtraText>
          Don't receive the email?
          <TextLink>
            {password && (
              <Link to="/forgottenpassword"> Click to Resend Link</Link>
            )}
            {email && (
              <Link to="/#" > Click to Resend Link</Link>
            )}
          </TextLink>
        </ExtraText>
        <ButtonWrapper>
          <StyleButton borderRadius="0" width="100%" height="54px">
            <Link to="/login">Back to login</Link>
          </StyleButton>
        </ButtonWrapper>
      </StyledFormArea>
    </StyledContainer>
  );
};

