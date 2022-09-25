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
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const AddBankSchema = yup.object().shape({
  bankName: yup
    .object()
    .shape({
      label: yup.string().required("bank is required (from label)"),
      value: yup.string().required("bank is required"),
    })
    .nullable() // for handling null value when clearing options via clicking "x"
    .required("Bank is required"),
  // bank: yup.string().required(),
  accountName: yup.string().required(),
  accountNumber: yup.number().required().positive().integer(),
});

export const AddBank = ({ show }) => {
  const [showModal, setShowModal] = useState(false);

  //api call
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

  const banks = banklist.map((bank) => {
    return bank.name;
  });

  const allBanks = [];

  banks.forEach((element) => {
    let temp = {};
    temp["value"] = element;
    temp["label"] = element;
    allBanks.push(temp);
    temp = {};
  });

  //yup
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AddBankSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    setShowModal((p) => !p);
  };

  const [selectedBank, setSelectedBank] = useState("");

  // const handleBankChange = (selectedBank) => {
  //   console.log(selectedBank);
  //   setSelectedBank(selectedBank);
  // };

  return (
    <>
      <BankHeader>
        <h3 className="bank-acct">Bank Account</h3>
        <p onClick={show}>View Bank Accounts</p>
      </BankHeader>
      <BankStyle>
        <FormStyle onSubmit={handleSubmit(onSubmit)}>
          <StyledLabel>Bank Name</StyledLabel>
          {/* <Select
            name="bank"
            styles={CustomStyles}
            placeholder={"Select bank"}
            onChange={(selectedOption) => {
              handleBankChange(selectedOption);
              console.log(selectedBank);
            }}
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
          /> */}
          <Controller
            name="bankName"
            control={control}
            styles={CustomStyles}
            render={({ field }) => (
              <Select
                // defaultValue={options[0]}
                styles={CustomStyles}
                placeholder={"Select bank"}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    primary: "#de3d6d",
                  },
                })}
                {...field}
                isClearable // enable isClearable to demonstrate extra error handling
                isSearchable={false}
                // className="react-dropdown"
                // classNamePrefix="dropdown"
                options={allBanks}
              />
            )}
          />
          {errors.bankName && (
            <p style={{ color: "#de3d6d", fontSize: 12 }}>Bank is required</p>
          )}

          <StyledLabel>Account Name</StyledLabel>
          <StyledInput
            {...register("accountName")}
            placeholder="Account name"
            type="text"
            name="accountName"
            // value={accountName}
            // onChange={handleInputChange}
          ></StyledInput>
          {errors.accountName && (
            <p style={{ color: "#de3d6d", fontSize: 12 }}>
              Account name is required
            </p>
          )}

          <StyledLabel> Account Number</StyledLabel>
          <StyledInput
            {...register("accountNumber")}
            placeholder="Account Number"
            type="number"
            name="accountNumber"
            // value={accountNumber}
            // onChange={handleInputChange}
          ></StyledInput>
          {errors.accountNumber && (
            <p style={{ color: "#de3d6d", fontSize: 12 }}>
              Account number is required{" "}
            </p>
          )}
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
