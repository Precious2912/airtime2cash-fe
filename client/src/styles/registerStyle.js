import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.05);
  min-height: 100vh;
`;

export const Wrapper2 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px;
  background: #fff;
  width: 50%;
  margin: 0 auto;
  padding-top: 80px;
`;

export const Logo = styled.img`
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

export const HeaderAndButton = styled.div`
  width: 100%;
`;

export const Back = styled.div`
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

export const FormHeader = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  color: #21334f;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const StyledLabel = styled.label`
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

export const StyledInput = styled.input`
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

export const StyledFooter = styled.div`
  width: 15rem;

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

export const StyledFooterButton = styled.button`
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
