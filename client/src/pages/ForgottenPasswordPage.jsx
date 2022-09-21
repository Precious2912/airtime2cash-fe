import React from "react";
import { Formik, Form } from "formik";
import { TextInput } from "../components/Forms";
import { FiMail } from "react-icons/fi";
import * as Yup from "yup";
import StyleButton from '../styles/Button.styles.js'

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
// import { backicon } from "../assets/icons/backicon.svg";

// import {mobile} from "../Responsive";
const submitData =(e)=>{

}
export const ForgottenPasswordPage = ({ ForgottenPasswordPage }) => {
  return (
      <StyledContainer>
        <StyledFormArea>
          <StyledTitle>Forget Password</StyledTitle>
          <StyledSubTitle>
            Enter the email associated with your account and we'll send an email
            with instruction to reset your password
          </StyledSubTitle>
          <Formik
            initialValues={{
              email: "",
              redirectUrl: "http://localhost:3000/passwordreset",
            }}
            validationSchema={Yup.object({
              email: Yup.string() 
                .email("Invalid email address")
                .required("Required"),
            })}
            onSubmit={(values) => {
              console.log(values);
              ForgottenPasswordPage(values);
            }}
          >
            {() => (
              <RestForm onSubmit={(e)=>submitData()}>
                <label >Email</label>
                <EmailInput 
                type="email"
                placeholder="Enter your email"
                required
                />
               
                <StyleButton width="100%" height='48px' type="submit">Submit</StyleButton>
                
                <Back><Link to="/login">Back to Login</Link></Back>
              </RestForm>
            )}
          </Formik>
        </StyledFormArea>
      </StyledContainer>
  );
};

// export default ForgottenPasswordPage;
