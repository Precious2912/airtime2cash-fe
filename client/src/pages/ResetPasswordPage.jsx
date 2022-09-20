import { Formik, Form } from "formik";
import { TextInput } from "../components/Forms";
import { FiLock } from "react-icons/fi";
import * as Yup from "yup";

import {
  StyledContainer,
  StyledFormArea,
  StyledTitle,
  StyledFormButton
} from "../styles/resetPassStyle";

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
  );
};
