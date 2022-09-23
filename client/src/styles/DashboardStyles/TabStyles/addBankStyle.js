import styled from "styled-components";

export const BankStyle = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 10%;

  .bank-header {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .bank-acct {
      font-weight: 600;
      font-size: 24px;
      color: #012a4a;
    }

    p {
        cursor: pointer;
      font-weight: 400;
      font-size: 14px;
      color: #de3d6d;
    }
  }

  .bank-option {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    width: 100%;
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
  }

  @media screen and (max-width: 387px) {
    .bank-header {
      flex-direction: column;
      margin-bottom: 0.5rem;
      gap: -10px;
    }
  }
`;

export const AccountStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 8px 16px;
  margin-bottom: 2rem;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);

  .content p {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #012a4a;
  }

  .remove-btn {
    padding: 10px;
    border: none;

    background: rgba(0, 0, 0, 0.05);
    border-radius: 100px;

    font-weight: 400;
    font-size: 14px;
    line-height: 17px;

    color: #012a4a;
  }

  @media screen and (max-width: 387px) {
    flex-direction: column;
  }
`;
