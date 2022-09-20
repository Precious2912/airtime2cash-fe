import { Formik, Form } from "formik";
import { TextInput } from "../components/Forms";
import { FiLock } from "react-icons/fi";
import * as Yup from "yup";
import StyleButton from '../styles/Button.styles.js'


import {
  StyledContainer,
  StyledFormArea,
  StyledTitle,
  StyledFormButton,
  ResetPassword,
  FormInput
} from "../styles/resetPassStyle";
import { RestForm } from "../styles/forgetPassStyle";

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
                .min(
                  8,
                  "Password is too short - should be 8 characters minimum."
                )
                .max(
                  25,
                  "Password is too long - should be 25 characters maximum."
                )
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
              <RestForm>
                <label className="formLabel">New Password</label>
                <FormInput
                  name="newPassword"
                  type="password" 
                  placeholder="Enter new password"
                />
                <label className="formLabel">Confirm Password</label>
                <FormInput
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm password"
                />

                <StyleButton width="100%" borderRadius="0" type="submit">
                  <ResetPassword>Reset Password</ResetPassword></StyleButton>
              </RestForm>
            )}
          </Formik>
        </StyledFormArea>
      </StyledContainer>
    </div>
  );
};
