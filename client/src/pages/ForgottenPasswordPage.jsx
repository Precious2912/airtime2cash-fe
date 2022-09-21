import React, { useState } from "react";
import { UseAuth } from "../context/useAuth";
import StyleButton from "../styles/Button.styles.js";

import {
  StyledContainer,
  StyledFormArea,
  StyledTitle,
  StyledSubTitle,
  Back,
  RestForm,
  EmailInput,
} from "../styles/forgetPassStyle";
import { Link } from "react-router-dom";

export const ForgottenPasswordPage = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const { forgotPassword } = UseAuth();

  const handleForgetPassword = async (e) => {
    e.preventDefault();
    await forgotPassword(formData);
  };
  return (
    <StyledContainer>
      <StyledFormArea>
        <StyledTitle>Forgot Password</StyledTitle>
        <StyledSubTitle>
          Enter the email associated with your account and we'll send an email
          with instruction to reset your password
        </StyledSubTitle>
        <RestForm onSubmit={handleForgetPassword}>
          <label>Email</label>
          <EmailInput
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            onChange={(e) => {
              setFormData({
                ...formData,
                email: e.target.value.trim(),
              });
            }}
          />

          <StyleButton width="100%" height="48px" type="submit">
            Submit
          </StyleButton>

          <Back>
            <Link to="/login">Back to Login</Link>
          </Back>
        </RestForm>
      </StyledFormArea>
    </StyledContainer>
  );
};

// export default ForgottenPasswordPage;
