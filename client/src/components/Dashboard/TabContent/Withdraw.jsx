import React, { useEffect, useState } from "react";
import Select from "react-select";
import Button from "../../../styles/ButtonStyles";
import { CustomStyles } from "../../../styles/DashboardStyles/TabStyles/selectOptionStyle";
import { ButtonWrapper, TabTitle, WithdrawWrapper } from "../../../styles/DashboardStyles/TabStyles/WithdrawStyles";
import useFetch from "../../../context/useFetch";

const Withdraw = () => {
 
const [selectedOption, setSelectedOption] = useState(null);
const [watchData, setWatchData] = useState(false);

const  [bankList, setBankList] = useState([])
const [accountnumber, setAccountnumber] = useState(null)
const [accountName, setAccountName] = useState(null)
const [amount, setAmount] = useState(0)

const { result } =useFetch(`user/userAccount/${localStorage.getItem("id")}`);
let bankArr = result?.map((bank) => bank.bankName);
let banks = [...new Set(bankArr)];

useEffect  (()=>{ 
setBankList(banks?.map(val=>({ value: val, label: val })));
}, [result])

const handleSelectBank = (e) => {
let newArr = result.filter((bank)=>{return bank.bankName === e.value});
setAccountnumber(newArr?.map((val)=>({ value: val.accountNumber, label: val.accountNumber, accountName: val.accountName })));

};

const handleSelectAccount = (e) => {
setSelectedOption(e);
console.log(e)
setAccountName(e.accountName)
console.log(accountName)


};


  return (
    <WithdrawWrapper>
      <TabTitle><b>Withdraw</b></TabTitle>
      <form>
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
        {/* <input required type='number' disabled value='9234532567' placeholder="Account Number"/> */}  <Select
            styles={CustomStyles}
            onChange={(e)=>handleSelectAccount(e)}
            options={accountnumber}
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
        <input required disabled value={accountName} placeholder="Bank Name"/>
        </div>

        <div className="form-group">
        <label>Amount</label>
        <input required type='number' placeholder="NGN"/>
        </div>

        <div className="form-group">
        <label>Password</label>
        <input required placeholder="Password"/>
        </div>
        <ButtonWrapper>
        <Button borderRadius='0%' disabled={true} height='48px' width='198px'>Withdraw</Button>
        </ButtonWrapper>
      </form>
    </WithdrawWrapper>
  );
};

export default Withdraw;
