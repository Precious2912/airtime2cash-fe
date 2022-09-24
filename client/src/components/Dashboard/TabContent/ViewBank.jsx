import React from "react";
import {
  BankStyle,
  AccountStyle,
  BankHeader,
} from "../../../styles/DashboardStyles/TabStyles/addBankStyle";
import StyleButton from "../../../styles/ButtonStyles";


const dummyAccount = [
  {
    bankName: "First Bank",
    accountName: "Folashade Ayande",
    accountNumber: 1234567891,
  },
  {
    bankName: "First Bank",
    accountName: "Obed James",
    accountNumber: 5432167891,
  },
  {
    bankName: "First Bank",
    accountName: "Adeyemi Raji",
    accountNumber: 9876543219,
  },
  {
    bankName: "First Bank",
    accountName: "Folashade Ayande",
    accountNumber: 1234567891,
  },
  {
    bankName: "First Bank",
    accountName: "Obed James",
    accountNumber: 5432167891,
  },
];



const ViewBank = ({ show }) => {

  return (
    <>
      <BankHeader>
        <h3 className="bank-acct">Bank Account</h3>
      </BankHeader>
      <BankStyle>
        <>
          <div className="accounts">
            {dummyAccount.map((acct, index) => {
              return (
                <AccountStyle key={index}>
                  <div className="content">
                    <p>{acct.bankName}</p>
                    <p>{acct.accountNumber}</p>
                    <p>{acct.accountName}</p>
                  </div>
                  <button className="remove-btn">Remove</button>
                </AccountStyle>
              );
            })}
          </div>

          <StyleButton
            borderRadius="0px"
            height="48px"
            width="35%"
            style={{
              marginTop: "2rem",
            }}
            onClick={show}
          >
            Add New Bank
          </StyleButton>
        </>
      </BankStyle>
    </>
  );
};

export default ViewBank;
