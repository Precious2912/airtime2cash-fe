import React from "react";
import Button from "../../../styles/ButtonStyles";
import { ButtonWrapper, WithdrawWrapper } from "../../../styles/DashboardStyles/TabStyles/WithdrawStyles";

const Withdraw = () => {
  return (
    <WithdrawWrapper>
      <small>Withdraw</small>
      <form>
        <div className="form-group">
        <label>Select Account</label>
        <select required placeholder="Select Bank">
          <option value="javascript">GTBank</option>
          <option value="php">First Bank</option>
          <option value="java">Sterling Bank</option>
        </select>
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
