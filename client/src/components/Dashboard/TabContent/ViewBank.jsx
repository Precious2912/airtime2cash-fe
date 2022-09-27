import React, { useEffect } from "react";
import { UseAuth } from "../../../context/useAuth";
import {
  BankStyle,
  AccountStyle,
  BankHeader,
  BankWrapper,
} from "../../../styles/DashboardStyles/TabStyles/addBankStyle";
import StyleButton from "../../../styles/ButtonStyles";

const ViewBank = ({ show }) => {
  const { getUserAccount, userbank, deleteBank } = UseAuth();

  useEffect(() => {
    getUserAccount(`${localStorage.getItem("id")}`);
  }, []);

  return (
    <BankWrapper>
      <BankHeader>
        <h3 className="bank-acct">Bank Account</h3>
      </BankHeader>
      <BankStyle>
        <div className="accounts">
          {userbank.map((user) => (
            <>
              {user.accounts.map((account) => (
                <AccountStyle key={account.id}>
                  <div className="content">
                    <p>{account.bankName}</p>
                    <p>{account.accountNumber}</p>
                    <p>{account.accountName}</p>
                  </div>
                  <button
                    type="submit"
                    className="remove-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      const thisClicked = e.currentTarget;
                      deleteBank(account.id);
                      thisClicked.closest('div').remove();
                      console.log("deleted");
                    }}
                  >
                    Remove
                  </button>
                </AccountStyle>
              ))}
            </>
          ))}
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
        </div>
      </BankStyle>
    </BankWrapper>
  );
};

export default ViewBank;
