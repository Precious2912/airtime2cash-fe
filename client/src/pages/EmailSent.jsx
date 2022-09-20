import React, {useState} from "react";

import {
  StyledContainer,
  StyledFormArea,
  StyledTitle,
  StyledSubTitle,
  ExtraText,
  TextLink,
  StyledFormButton,
  colors
} from "../styles/emailStyle";

export const EmailSent = () => {

  return (
    <div>
      <StyledContainer>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            backgroundColor: "transparent",
            width: "100%",
            padding: "15px",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          {/* <Avatar image={Logo} /> */}
        </div>
        <StyledFormArea bg={colors.dark2}>
          <StyledTitle>Check your email</StyledTitle>
          <StyledSubTitle>
            We sent a password reset link to your email Please click the link to
            reset your password
          </StyledSubTitle>

          <ExtraText>
            Don't receive the email?{" "}
            <TextLink to="/forgotpassword">Click to Resend Link</TextLink>
          </ExtraText>

          <StyledFormButton to="#">Back to login</StyledFormButton>
        </StyledFormArea>
      </StyledContainer>
    </div>
  );
};

// const mapStateToProps = ({session}) => ({
// user: session.user
// })

// export default EmailSent;
