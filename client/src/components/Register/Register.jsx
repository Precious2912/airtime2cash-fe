import React from "react";
import logo from "../../assets/icon/logo2.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
`;

const Wrapper2 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px;
  width: 320px;
  height: 680px;
  margin: 0 auto;
  margin-top: 80px;
`;

const Logo = styled.img`
  /* Auto layout */

  display: flex;
  flex-direction: row;

  padding: 0px;
  gap: 12px;
  margin-top: 80px;

  width: 151px;
  height: 56px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const HeaderAndButton = styled.div`
  width: 100%;
`;
const Back = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;
  font-weight: 400;
  color: #21334f;
  border: none;
  width: 87px;
  height: 32px;

  background: rgba(0, 0, 0, 0.05);
  border-radius: 50px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin-top: 40px;
`;

const FormHeader = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  color: #21334f;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const StyledLabel = styled.label`
  width: 34px;
  height: 15px;

  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */

  color: #21334f;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  gap: 10px;
  width: 320px;
  height: 48px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin-top: 8px;
  margin-bottom: 16px;

  ::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #c4c4c4;
  }
`;

const StyledFooter = styled.div`
  width: 189px;
  height: 15px;

  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #21334f;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin-top: 40px;
  a {
    color: #de3d6d;
    text-decoration: none;
  }
`;

const StyledFooterButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  width: 320px;
  height: 48px;
  background: linear-gradient(91.85deg, #de3d6d 49.47%, #f5844c 100.15%);
  flex: none;
  order: 1;
  flex-grow: 0;
  margin-top: 8px;

  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #ffffff;
  border: none;
`;
export const Register = () => {
  return (
    <Wrapper>
      <Wrapper2>
        <div>
          <Logo src={logo} alt="logo" />
        </div>
        <HeaderAndButton>
          <Back> Go back</Back>
          <FormHeader>Create an account</FormHeader>
        </HeaderAndButton>

        <form>
          <StyledLabel> Name</StyledLabel>
          <StyledInput placeholder="Enter your name"></StyledInput>
          <StyledLabel> Email</StyledLabel>
          <StyledInput placeholder="Enter your email"></StyledInput>
          <StyledLabel> Phone Number</StyledLabel>
          <StyledInput placeholder="Enter your phone number"></StyledInput>
          <StyledLabel> Password</StyledLabel>
          <StyledInput placeholder="Enter your password"></StyledInput>
          <StyledLabel> Confirm Password</StyledLabel>
          <StyledInput placeholder="Confirm password"></StyledInput>
          <StyledFooterButton>Sign Up</StyledFooterButton>
        </form>
        <StyledFooter>
          Already have an an account? <Link to="/login"> Sign In </Link>
        </StyledFooter>
      </Wrapper2>
    </Wrapper>
  );
};
