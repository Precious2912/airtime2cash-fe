import React, { useState, useEffect } from "react";
import axios from "axios";
import { UseAuth } from "../../../context/useAuth";
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
  accountName: yup.string().required(),
  accountNumber: yup.string().required()
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

  const {AddBank} = UseAuth();

  const [formData, setFormData] = useState({
    bankName: "",
    accountNumber: "",
    accountName: ""
  })

    const handleInputChange = (e) => {
      e.preventDefault();
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }; 

  const onSubmit = (data) => {
   AddBank({
      ...data,
      bankName: data.bankName.label
    }).then(res => {
      if(res.status === 201){
        setShowModal((p) => !p);
      }
    }).catch(err => {
      console.log(err)
    })
  };


  return (
    <>
      <BankHeader>
        <h3 className="bank-acct">Bank Account</h3>
        <p onClick={show}>View Bank Accounts</p>
      </BankHeader>
      <BankStyle>
        <FormStyle onSubmit={handleSubmit(onSubmit)}>
          <StyledLabel>Bank Name</StyledLabel>
          <Controller
            name="bankName"
            control={control}
            styles={CustomStyles}
            render={({ field }) => (
              <Select
                styles={CustomStyles}
                placeholder={"Select bank"}
                theme={(theme) => ({
                  ...theme,
                  colors: {
                    ...theme.colors,
                    primary: "#0000ff",
                  },
                })}
                {...field}
                isClearable // enable isClearable to demonstrate extra error handling
                isSearchable={true}
                options={allBanks}
                noOptionsMessage={() => "Bank not found"}
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
            value={formData.accountName}
            onChange={handleInputChange}
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
            value={formData.accountNumber}
            onChange={handleInputChange}
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
