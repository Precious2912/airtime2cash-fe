import React from "react";
import { Formik, Form } from "formik";
import { TextInput } from "../components/Forms";
import { FiMail} from "react-icons/fi";
import * as Yup from "yup";

import {StyledContainer, StyledFormArea, StyledTitle, StyledSubTitle, StyledFormButton, Back, } from '../styles/forgetPassStyle'
// import { backicon } from "../assets/icons/backicon.svg"; 

// import {mobile} from "../Responsive";






 export const ForgottenPasswordPage = ({ ForgottenPasswordPage }) => {
    return (
        <div>
            <StyledContainer>
            <StyledFormArea>
                <StyledTitle>Forget Password</StyledTitle>
                <StyledSubTitle>Enter the email associated with your account and  we'll
                     send an email with instruction to reset your password</StyledSubTitle>
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
                        <Form>
                        <TextInput
                                name="email"
                                type="email"
                                label="Email"
                                placeholder="Enter your email"
                                icon={<FiMail style={{marginLeft:290}} />}
                                style={{ color: 'blue', lineHeight : 10, marginLeft: 278, opacity:0.8, width: 250, height: 20, background: '#FFFFFF', border: '1px solid  #03435F', borderRadius: 6 }}
                            />                                

                                <StyledFormButton type="submit">Submit</StyledFormButton>
                                {/* <Back>
              <img src={backicon} alt="logo" />
              Go back
            </Back> */}
                          <Back to="/login">Back to Login</Back>

                        </Form>
                    )}
                </Formik>
            </StyledFormArea>
            </StyledContainer>
        </div>

    )
}


// export default ForgottenPasswordPage;



