import React, { useState } from "react";
import Select from "react-select";
import Button from "../../../styles/ButtonStyles";
import { CustomStyles } from "../../../styles/DashboardStyles/TabStyles/selectOptionStyle";
import { ButtonWrapper, WithdrawWrapper } from "../../../styles/DashboardStyles/TabStyles/WithdrawStyles";

const banks = [
  { value: "First Bank", label: "First Bank" },
  { value: "Access Bank", label: "Access Bank" },
  { value: "Zenith Bank", label: "Zenith Bank" },
];

const Withdraw = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <WithdrawWrapper>
      <small>Withdraw</small>
      <form>
        <div className="form-group">
        <label>Select Account</label>
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
