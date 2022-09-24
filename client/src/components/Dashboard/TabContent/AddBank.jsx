import React, { useState} from "react";
import {
  BankStyle,
  BankHeader,
} from "../../../styles/DashboardStyles/TabStyles/addBankStyle";
import { CustomStyles } from "../../../styles/DashboardStyles/TabStyles/selectOptionStyle";
import {
  FormStyle,
  StyledLabel,
  StyledInput,
} from "../../../styles/registerStyle";
import StyleButton from "../../../styles/ButtonStyles";
import { Modal } from "../../modal/Modal";
import Select from "react-select";

const banks = [
  { value: "First Bank", label: "First Bank" },
  { value: "Access Bank", label: "Access Bank" },
  { value: "Zenith Bank", label: "Zenith Bank" },
];

export const AddBank = ({show}) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const changeHandler = (e) => {
    e.preventDefault();
    setShowModal((p) => !p)
  };


  return (
    <>
      <BankHeader>
        <h3 className="bank-acct">Bank Account</h3>
        <p onClick={show}>View Bank Accounts</p>
      </BankHeader>
      <BankStyle>
        <FormStyle onSubmit={changeHandler}>
          <StyledLabel>Bank Name</StyledLabel>
          <Select
            styles={CustomStyles}
            onChange={setSelectedOption}
            options={banks}
            defaultValue={{ label: "Select Bank", value: 0 }}
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              // height: 200,
              // minHeight: 200,
              // paddingTop: 7,
              // paddingBottom: 7,

              colors: {
                ...theme.colors,
                // primary25: "#012a4a",
                primary: "#de3d6d",
              },
            })}
          />

          <StyledLabel style={{color: '#012a4a'}}>Account Name</StyledLabel>
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
            // max="10"
          ></StyledInput>
          <StyleButton
            type="submit"
            borderRadius="0px"
            height="48px"
            width="35%"
            style={{
              marginTop: "1.5rem",
            }}
          >
            Add Bank
          </StyleButton>
          {showModal && <Modal setShowModal={setShowModal} />}
        </FormStyle>
      </BankStyle>
    </>
  );
};
