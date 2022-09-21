import React, { useState } from "react";
import StyleButton from "../styles/Button.styles.js";
import { UseAuth } from "../context/useAuth";
import logo from "../assets/icon/logo2.svg";

import {
  StyledContainer,
  StyledFormArea,
  StyledTitle, 
  ResetPassword,
  FormInput,
  Logo,
  FormLabel
} from "../styles/resetPassStyle";
import { RestForm } from "../styles/forgetPassStyle";
import { useParams } from "react-router-dom";

export const ResetPasswordPage = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const { resetPassword } = UseAuth();
  const {token} = useParams()

  const handleResetPassword = async (e) => {
    e.preventDefault();
    await resetPassword(formData, token);
  };

  return (
    <div>
      <StyledContainer>
        <StyledFormArea>
          
          <Logo><img src={logo} alt="" /></Logo>
          <StyledTitle>Password Reset</StyledTitle>
          <RestForm onSubmit={handleResetPassword}>
            <label className="formLabel">New Password</label>
            <FormInput
              name="password"
              type="password"
              placeholder="Enter new password"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  password: e.target.value,
                });
              }}
            />
            <label className="formLabel">Confirm Password</label>
            <FormInput
              name="confirmPassword"
              type="password"
              placeholder="Confirm password"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  confirmPassword: e.target.value,
                });
              }}
            />

            <StyleButton width="100%" borderRadius="0" type="submit">
              <ResetPassword type='submit'>Reset Password</ResetPassword>
            </StyleButton>
          </RestForm>
        </StyledFormArea>
      </StyledContainer>
    </div>
  );
};
