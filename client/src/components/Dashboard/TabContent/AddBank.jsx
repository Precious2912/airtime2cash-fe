import React, { useState, useEffect } from "react";
import axios from "axios";
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

export const AddBank = ({ show }) => {
  const [banklist, setBankList] = useState([]);

  const getBanks = async () => {
    try {
      const response = await axios.get("https://api.paystack.co/bank", {
        headers: {
          Authorization: `Bearer sk_test_ca29cc7657234aff06291fba0d1b47380afbd8be`,
        },
      });
      setBankList(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBanks();
  }, []);

  const allBanks = [];

  const banks = banklist.map((bank) => {
    return bank.name;
  });

  banks.forEach((element) => {
    let temp = {};
    temp["value"] = element;
    temp["label"] = element;
    allBanks.push(temp);
    temp = {};
  });

  const [showModal, setShowModal] = useState(false);

  const [selectedBank, setSelectedBank] = useState("Select bank");
  const [inputs, setInputs] = useState({
    accountName: "",
    accountNumber: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
      const valid =
        selectedBank !== "Select bank" &&
        inputs.accountName.length > 0 &&
        inputs.accountNumber.length > 0;

  const handleSubmit = (e) => {
    e.preventDefault();
      console.log(selectedBank, inputs.accountName, inputs.accountNumber);
      setShowModal((p) => !p);
  };

  const handleBankChange = (selectedBank) => {
    setSelectedBank(selectedBank);
  };

  return (
    <>
      <BankHeader>
        <h3 className="bank-acct">Bank Account</h3>
        <p onClick={show}>View Bank Accounts</p>
      </BankHeader>
      <BankStyle>
        <FormStyle onSubmit={(e) => handleSubmit(e)}>
          <StyledLabel>Bank Name</StyledLabel>
          <Select
            name="bank"
            styles={CustomStyles}
            placeholder={"Select bank"}
            onChange={(selectedBank) => handleBankChange(selectedBank)}
            value={selectedBank}
            noOptionsMessage={() => "Bank not found"}
            options={allBanks}
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary: "#de3d6d",
              },
            })}
          />

          <StyledLabel style={{ color: "#012a4a" }}>Account Name</StyledLabel>
          <StyledInput
            placeholder="Account name"
            type="text"
            name="accountName"
            value={inputs.accountName}
            onChange={handleInputChange}
          ></StyledInput>

          <StyledLabel> Account Number</StyledLabel>
          <StyledInput
            placeholder="Account Number"
            type="number"
            name="accountNumber"
            value={inputs.accountNumber}
            onChange={handleInputChange}
          ></StyledInput>
          <StyleButton
            type="submit"
            borderRadius="0px"
            height="48px"
            width="35%"
            style={{
              marginTop: "1.5rem",
            }}
            disabled={!valid}
          >
            Add Bank
          </StyleButton>
          {showModal && <Modal setShowModal={setShowModal} />}
        </FormStyle>
      </BankStyle>
    </>
  );
};
