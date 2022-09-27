import React, { useEffect, useState } from "react";
import Select from "react-select";
import Button from "../../../styles/ButtonStyles";
import { CustomStyles } from "../../../styles/DashboardStyles/TabStyles/selectOptionStyle";
import { ButtonWrapper, TabTitle, WithdrawWrapper } from "../../../styles/DashboardStyles/TabStyles/WithdrawStyles";
import useFetch from "../../../context/useFetch";

const Withdraw = () => {
const [watchData, setWatchData] = useState(false);

const  [bankList, setBankList] = useState([])
const [accountNumber, setAccountNumber] = useState(0)
const [accountName, setAccountName] = useState("")
// const [amount, setAmount] = useState(0)

const [formData, setFormData] = useState({
  bank: "",
  accountNumber: "",
  accountName: "",
  amount: 0,
  password: "",
});

const { result } =useFetch(`user/userAccount/${localStorage.getItem("id")}`);
let bankArr = result?.map((bank) => bank.bankName);
let banks = [...new Set(bankArr)];

useEffect  (()=>{ 
setBankList(banks?.map(val=>({ value: val, label: val })));
}, [result])


const handleSelectBank = (e) => {
let newArr = result.filter((bank)=>{return bank.bankName === e.value});
setAccountNumber(newArr?.map((val)=>({ value: val.accountNumber, label: val.accountNumber, accountName: val.accountName })));
setFormData({ ...formData, bank: e.value.trim() });
};


const handleSelectAccountNumber = (e) => {
setAccountName(e.accountName); 
setFormData({ ...formData, accountNumber: e.value.trim(), accountName:e.accountName.trim()});
};

const handleSubmit = (e) => {
e.preventDefault();
console.log(formData);
};

  return (
    <WithdrawWrapper>
      <TabTitle><b>Withdraw</b></TabTitle>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
        <label>Select Account</label>
        <Select
            styles={CustomStyles}
            onChange={(e)=>handleSelectBank(e)}
            options={bankList}
            defaultValue={{ label: "Select Bank", value: 0 }}
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
        <label>Account Number</label>
         <Select
            styles={CustomStyles} 
            type="number"
            onChange={(e)=>handleSelectAccountNumber(e)}
            options={accountNumber}
            defaultValue={{ label: "Select Account Number", value: 0 }}
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
        <label>Account Name</label>
        <input required disabled value={formData.accountName} onChange={(e)=>setFormData({...formData, accountName:e.accountName.trim()})} placeholder="Account Name"/>
        </div>

        <div className="form-group">
        <label>Amount</label>
        <input required type='number' value={formData.amount} onChange={(e)=>setFormData({...formData, amount:e.target.value.trim()})} placeholder="NGN"/>
        </div>

        <div className="form-group">
        <label>Password</label>
        <input required type='password' value={formData.password} onChange={(e)=>setFormData({...formData, password:e.target.value.trim()})} placeholder="Password"/>

        </div>
        <ButtonWrapper>
        <Button borderRadius='0%' disabled={watchData} type="submit" height='48px' width='198px'>Withdraw</Button>
        </ButtonWrapper>
      </form>
    </WithdrawWrapper>
  );
};

export default Withdraw;
