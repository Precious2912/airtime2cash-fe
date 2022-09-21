import React from "react";
import { Link } from "react-router-dom";
import mailIcon from "../assets/icon/mail.svg"; 
import StyleButton from '../styles/Button.styles.js'

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


export const EmailSent = ({text}) => {
  return (
      <StyledContainer>
        
        <StyledFormArea>
          <Icon>
          <img src={mailIcon} alt="" />
          </Icon>
          <StyledTitle>Check your email</StyledTitle>
          <StyledSubTitle>
           {text}
          </StyledSubTitle>

          <ExtraText>
            Don't receive the email?
            <TextLink><Link to="/forgottenpassword"> Click to Resend Link</Link></TextLink>
          </ExtraText>
          <ButtonWrapper>
          <StyleButton borderRadius="0" width="100%" height="54px"><Link to="/login">Back to login</Link></StyleButton>
          </ButtonWrapper>
        </StyledFormArea>
      </StyledContainer>
  );
};

