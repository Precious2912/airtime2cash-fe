import { Formik, Form } from "formik";
import { TextInput } from "../components/Forms";
import { FiMail, FiLock } from "react-icons/fi";
import * as Yup from "yup";
import styled from 'styled-components';

import { Link } from 'react-router-dom';




export const colors = {
    theme: 'lemon',
    light1: 'antiquewhite',
    light2: '#E5E7EB',
    dark1: '#1F2937',
    dark2: '#B7C4CF',
    dark3: '#9CA3AF',
    dark4: '#6B7280',
    red: '#DC2626',
}


export const StyledTitle = styled.h2`
width: 141px;
height: 22px;
margin-top: 30px;
margin-left: -180px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 22px;
color: #21334F;
flex: none;
order: 0;
flex-grow: 0;
`;

export const StyledIcon = styled.p`
color: ${colors.dark1};
position: absolute;
font-size: 20px;
margin-left: 275px;
top: 35%;
${(props) => props.right && `right: 15%;`}
${(props) => props.left && `left: 15%;`}
`;


export const StyledSubTitle = styled.p`
width: 432px;
height: 38px;
margin-left: 275px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
text-align: center;
color: #C4C4C4;
display: flex;
order: 1;
flex-grow: 0;
`;

export const StyledFormButton = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 16px;
gap: 10px;
border-radius: 6px;
width: 320px;
height: 48px;

background: linear-gradient(92.1deg, #DE3D6D 55.67%, #F5844C 101.51%);

/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
`;

export const StyledButton = styled(Link)`
width: 104px;
height: 19px;
margin-left: 295px;
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
flex: none;
order: 0;
flex-grow: 0;
background-color: #D8D8D8;
`;




export const CopyrightText = styled.p`
padding: 5px;
margin: 20px;
text-align: center;
color: ${colors.light2};
`;

export const StyledFormArea = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 80px;
gap: 40px;
background-color: white;
width: 600px;
height: 400px;
flex: none;
order: 0;
flex-grow: 0;
margin-top: 100px;
`;


export const StyledLabel = styled.p`
text-align: left;
font-size: 15px;
font-weight: bold;
margin-right: 250px;
`;

export const ButtonGroup = styled.div`
display: flex;
justify-content: space-around;
flex-direction: row;
margin-top: 25px;
`;

export const StyledContainer = styled.div`
background: #E5E5E5;
justify-content: center;
display: grid;
height: 100vh;

`;



export const ResetPasswordPage = () => {
    return (
        <div>
          <StyledContainer>
            <StyledFormArea>
            {/* <Avatar image={Logo} /> */}
                <StyledTitle>Password Reset</StyledTitle>
                <Formik
                    initialValues={{
                        newPassword: "",
                       confirmNewPassword: "",
                    }}
                    validationSchema={Yup.object({
                            newPassword: Yup.string()
                            .min(8, "Password is too short - should be 8 characters minimum.")
                            .max(25, "Password is too long - should be 25 characters maximum.")
                            .required("Required"),
                            confirmNewPassword: Yup.string()
                            .required("Required")
                            .oneOf([Yup.ref("newPassword")], "Passwords must match"),
})}

                    onSubmit={(values, { setSubmitting }) => {
                        console.log(values);
                    }}
                >

                    {() => (
                        <Form>
                        <TextInput
                                name="newPassword"
                                type="password"
                                label="New Password"
                                placeholder="********"
                                icon={<FiLock />}
                            />

                            <TextInput
                                name="confirmPassword"
                                type="password"
                                label="Confirm Password"
                                placeholder="********"
                                icon={<FiLock />}
                            />

                           <StyledFormButton type="submit">Submit</StyledFormButton>


                         
                        </Form>
                    )}
                </Formik>
               </StyledFormArea>
               </StyledContainer>
        </div>

    )
}


