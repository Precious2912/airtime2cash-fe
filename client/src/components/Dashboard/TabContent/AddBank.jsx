import React, {useState} from 'react'
import { BankStyle, AccountStyle } from "../../../styles/DashboardStyles/TabStyles/addBankStyle";
import {
  FormStyle,
  StyledLabel,
  StyledInput,
} from "../../../styles/registerStyle";
import StyleButton from "../../../styles/ButtonStyles";
import { Modal } from '../../modal/Modal';

export const AddBank = () => {
    const [showModal, setShowModal] = useState(false);

    const[addTab, showAddTab] = useState(true);
    const [viewTab, showViewTab] = useState(false);

    const handleAddBank = (e) => {
        e.preventDefault()
        setShowModal((p) => !p);
    }

    const displayViewBank = () => {
        console.log('clicked')
        showViewTab(p => !p);
        showAddTab((p) => !p);
    }

  return (
    <>
      <BankStyle>
        <div className="bank-header">
          <h3 className="bank-acct">Bank Account</h3>
          {addTab && <p onClick={displayViewBank}>View Bank Accounts</p>}
        </div>

        {addTab && (
          <FormStyle>
            <StyledLabel>Bank Name</StyledLabel>
            <select name="banks" className="bank-option">
              <option value="first-bank">Select bank</option>
              <option value="first-bank">First Bank</option>
              <option value="zenith">Zenith</option>
              <option value="access">Access</option>
              <option value="sterling">Sterling</option>
            </select>
            <StyledLabel>Account Name</StyledLabel>
            <StyledInput
              required
              placeholder="Account name"
              type="text"
              name="accountName"
            ></StyledInput>

            <StyledLabel> Account Number</StyledLabel>
            <StyledInput
              required
              placeholder="Account Number"
              type="number"
              name="number"
            ></StyledInput>
            <StyleButton
              borderRadius="0px"
              height="48px"
              width="35%"
              style={{
                marginTop: "2rem",
              }}
              onClick={handleAddBank}
            >
              Add Bank
            </StyleButton>
            {showModal && <Modal setShowModal={setShowModal} />}
          </FormStyle>
        )}

        {viewTab && (
          <>
            <AccountStyle>
              <div className="content">
                <p>Bank name</p>
                <p>Account Number</p>
                <p>Account name</p>
              </div>
              <button className="remove-btn">Remove</button>
            </AccountStyle>

            <AccountStyle>
              <div className="content">
                <p>Bank name</p>
                <p>Account Number</p>
                <p>Account name</p>
              </div>
              <button className="remove-btn">Remove</button>
            </AccountStyle>
            <StyleButton
              borderRadius="0px"
              height="48px"
              width="35%"
              style={{
                marginTop: "2rem",
              }}
              onClick={displayViewBank}
            >
              Add New Bank
            </StyleButton>
          </>
        )}
      </BankStyle>
    </>
  );
}