import React, { useEffect, useState } from "react";
import Select from "react-select";
import Button from "../../../styles/ButtonStyles";
import { CustomStyles } from "../../../styles/DashboardStyles/TabStyles/selectOptionStyle";
import { ButtonWrapper, TabTitle, WithdrawWrapper } from "../../../styles/DashboardStyles/TabStyles/WithdrawStyles";
import { UseAuth } from "../../../context/useAuth";

const banks = [
  { value: "First Bank", label: "First Bank" },
  { value: "Access Bank", label: "Access Bank" },
  { value: "Zenith Bank", label: "Zenith Bank" },
];

const Withdraw = () => {
const { getAllAccount, bState } = UseAuth();
const [userBanks, setUserBanks] = useState([{value: "Select Bank", label: "Select Account"}]);
  const [selectedOption, setSelectedOption] = useState(null);



  // const getAllBanks = async () => {
  //  await getAllAccount(localStorage.getItem("id"))
  //  banks.push( { value: bState.data.data[0].accounts.bankName, label: bState.data.data[0].accounts.bankName} )
  //   setUserBanks(banks)
  // }


useEffect (() =>{
  getAllAccount(localStorage.getItem("id"))
console.log(bState)

}, []) 



  return (
    <WithdrawWrapper>
      <TabTitle><b>Withdraw</b></TabTitle>
      <form>
        <div className="form-group">
        <label>Select Account</label>
        <Select
            styles={CustomStyles}
            onChange={setSelectedOption}
            options={userBanks}
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
        <label>Account Name</label>
        <input required disabled value='Babatunde Ola' placeholder="Bank Name"/>
        </div>

        <div className="form-group">
        <label>Account Number</label>
        <input required type='number' disabled value='9234532567' placeholder="Account Number"/>
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
        <Button borderRadius='0%' height='48px' width='198px'>Withdraw</Button>
        </ButtonWrapper>
      </form>
    </WithdrawWrapper>
  );
};

export default Withdraw;
