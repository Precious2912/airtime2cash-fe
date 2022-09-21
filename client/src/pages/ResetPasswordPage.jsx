import { Formik, Form } from "formik";
import { TextInput } from "../components/Forms";
import { FiLock } from "react-icons/fi";
import * as Yup from "yup";
import StyleButton from '../styles/Button.styles.js'
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

export const ResetPasswordPage = () => {
  return (
    <div>
      <StyledContainer>
        <StyledFormArea>
          
          <Logo><img src={logo} alt="" /></Logo>
          <RestForm>
          <StyledTitle>Password Reset</StyledTitle>
         
              
                <FormLabel>New Password</FormLabel>
                <FormInput
                  name="newPassword"
                  type="password" 
                  placeholder="Enter new password"
                />
                <FormLabel>Confirm Password</FormLabel>
                <FormInput
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm password"
                />

                <StyleButton width="100%" height="48px" borderRadius="0" type="submit">
                  <ResetPassword>Reset Password</ResetPassword></StyleButton>
              </RestForm>
     
        </StyledFormArea>
      </StyledContainer>
    </div>
  );
};
