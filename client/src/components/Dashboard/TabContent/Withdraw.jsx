import React, { useEffect, useState } from "react";
import Select from "react-select";
import Button from "../../../styles/ButtonStyles";
import * as yup from "yup";
import { WithdrawSchema } from "../../../Validations/WithdrawValidation";
import { CustomStyles } from "../../../styles/DashboardStyles/TabStyles/selectOptionStyle";
import {
  ButtonWrapper,
  TabTitle,
  WithdrawWrapper,
} from "../../../styles/DashboardStyles/TabStyles/WithdrawStyles";
import useFetch from "../../../context/useFetch";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";

const Withdraw = () => {
  const [isValid, setIsValid] = useState(false);
  const [toggleEnable, setToggleEnable] = useState(true);

  const [bankList, setBankList] = useState([]);
  const [accountNumber, setAccountNumber] = useState(0);
  const [accountName, setAccountName] = useState("");
  // const [amount, setAmount] = useState(0)

  const [formData, setFormData] = useState({
    bank: "",
    accountNumber: "",
    accountName: "",
    amount: 0,
    password: "",
  });

  const { result } = useFetch(`user/userAccount/${localStorage.getItem("id")}`);
  let bankArr = result?.map((bank) => bank.bankName);
  let banks = [...new Set(bankArr)];

  useEffect(() => {
    setBankList(banks?.map((val) => ({ value: val, label: val })));
  }, [result]);

  const handleSelectBank = (e) => {
    setAccountNumber(null)
    let newArr = result.filter((bank) => {
      return bank.bankName === e.value;
    });
    setAccountNumber(
      newArr?.map((val) => ({
        value: val.accountNumber,
        label: val.accountNumber,
        accountName: val.accountName,
      }))
    );
    setFormData({ ...formData, bank: e.value.trim() });
    setToggleEnable(false);
 
  };

  const handleSelectAccountNumber = (e) => {
    setAccountName(e.accountName);
    setFormData({
      ...formData,
      accountNumber: e.value.trim(),
      accountName: e.accountName.trim(),
    });
  };


  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(WithdrawSchema),
  });

  const Submit = async (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    console.log(formData);
    setIsValid(await WithdrawSchema.isValid(formData));
    // console.log(isValid);
    // setFormData({ ...formData, bank:"", accountNumber:null, accountName:"",  amount: 0 , password: "" });
  };

  return (
    <WithdrawWrapper>
      <TabTitle>
        <b>Withdraw</b>
      </TabTitle>
      <form onSubmit={handleSubmit(Submit)}>
        <div className="form-group">
          <label>Select Account
          {errors.bank && ( <span style={{ color: "#de3d6d", fontSize: 12 }}> | Select your bank</span>)}
          </label> 
          {/* <Controller
          name="bank"
          control={control}
          render={({ field }) => ( */}
          <Select 
          {...register("bank")}

          name="bank"
            styles={CustomStyles}
            noOptionsMessage={() => "Bank not found"}
            onChange={(e) => handleSelectBank(e)}
            options={bankList}
            defaultValue={{ label: "Select Bank", value: 1 }}
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,

              colors: {
                ...theme.colors,
                primary: "#de3d6d",
              },
            })}
          />
          {/* // )}
          // /> */}
        </div>

        <div className="form-group">
          <label>Account Number
          {errors.accountNumber && ( <span style={{ color: "#de3d6d", fontSize: 12 }}> | Select your bank</span>)}
          </label>
        
          <Select 
          {...register("accountNumber")}
          
          control={control} 
            name="accountNumber"
            styles={CustomStyles}
            noOptionsMessage={() => "Account not found"}
            // isDisabled={toggleEnable}
            type="number" 
            onChange={(e) => handleSelectAccountNumber(e)}
            options={accountNumber}
            defaultValue={{ label: "Select Account Number", value: 0}}
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary: "#de3d6d",
              },
            })}
        
          />
         
        </div>

        <div className="form-group">
          <label>Account Name  </label>
          <input
            {...register("accountName")}
            disabled
            value={formData.accountName}
            onChange={(e) =>
              setFormData({ ...formData, accountName: e.accountName.trim() })
            }
            placeholder="Account Name"
          />
        </div>

        <div className="form-group">
          <label>Amount
          {errors.amount && ( <span style={{ color: "#de3d6d", fontSize: 12 }}> | Amount is required</span>)}
          </label>
          <input
            {...register("amount")}
            type="number"
            value={formData.amount}
            onChange={(e) =>
              setFormData({ ...formData, amount: e.target.value.trim() })
            }
            placeholder="NGN"
          />
        </div>

        <div className="form-group">
          <label>
            Password 
            {errors.password && (
              <span style={{ color: "#de3d6d", fontSize: 12 }}> | Password is required
              </span>
            )}
          </label>

          <input
            {...register("password")}
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value.trim() })
            }
            name="password"
            placeholder="Password"
          />
        </div>
        <ButtonWrapper>
          <Button borderRadius="0%" type="submit" height="48px" width="198px">
            Withdraw
          </Button>
        </ButtonWrapper>
      </form>
    </WithdrawWrapper>
  );
};

export default Withdraw;
