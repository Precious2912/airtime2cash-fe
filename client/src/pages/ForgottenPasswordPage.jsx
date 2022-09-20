import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
// import { UseAuth } from "../context/useAuth";
import { Formik, Form } from "formik";
import { TextInput } from "../components/Forms";
import { FiMail } from "react-icons/fi";
import * as Yup from "yup";

import {
  StyledContainer,
  StyledFormArea,
  StyledTitle,
  StyledSubTitle,
  StyledFormButton,
  Back,
} from "../styles/forgetPassStyle";
// import { backicon } from "../assets/icons/backicon.svg";

// import {mobile} from "../Responsive";

export const ForgottenPasswordPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

//   const { forgotPassword } = UseAuth();
//   console.log(forgotPassword())

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {

      await axios
        .post(`http://localhost:7000/user/forgetPassword`, email)
        .then((res) => {
          if (res.status === 200) {
            console.log(res)
            // add toastify promise here
            console.log('sucess')
              navigate("/resetpassword");
          }
        }) 
    } catch (err) {
      console.log(err)
      throw new Error(`${err}`);
      // add toastify here
    }

    
    // await forgotPassword(email);
    // navigate("/resetpassword");
  };

  const mystyle={
                    color: "blue",
                    lineHeight: 10,
                    marginLeft: 278,
                    opacity: 0.8,
                    width: 250,
                    height: 20,
                    background: "#FFFFFF",
                    border: "1px solid  #03435F",
                    borderRadius: 6,
                  }
  return (
    <div>
      <StyledContainer>
        <StyledFormArea>
          <StyledTitle>Forget Password</StyledTitle>
          <StyledSubTitle>
            Enter the email associated with your account and we'll send an email
            with instruction to reset your password
          </StyledSubTitle>
          {/* <Formik
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
            {() => ( */}
              <Form onSubmit={handleForgotPassword}>
                <TextInput
                  name="email"
                  type="email"
                  label="Email"
                  placeholder="Enter your email"
                  icon={<FiMail style={{ marginLeft: 290 }} />}
                  style={mystyle}
                  value = {email}
                  onChange={(e) => {
                    setEmail({
                        email: e.target.value.trim()
                    });
                  }}
                />

                <StyledFormButton type="submit">Submit</StyledFormButton>
                {/* <Back>
              <img src={backicon} alt="logo" />
              Go back
            </Back> */}
                <Back to="/login">Back to Login</Back>
              </Form>
             {/* )} 
        </Formik>  */}
        </StyledFormArea>
      </StyledContainer>
    </div>
  );
};

// export default ForgottenPasswordPage;
