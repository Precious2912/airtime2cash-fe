import React, { useState } from "react";
import { StyledInput, SellAirTimeWrapper } from "../../../styles/DashboardStyles/TabStyles/SellAirTimeStyles";
import { CustomStyles } from "../../../styles/DashboardStyles/TabStyles/selectOptionStyle";
import StyledButton from '../../../styles/ButtonStyles'
import Select from "react-select";
import {sellAirtimeSchema} from "../../../Validations/SellAirtime"

const Network = [
  { value: "MTN", label: "MTN" },
  { value: "GLO", label: "GLO" },
  { value: "AIRTEL", label: "AIRTEL" },
];

const SellAirTime = ()=>{
  // async (e) => {
  // e.preventDefault()
  // let formData = {
  //   PhoneNumber:e.target[0].value,
  //   AmountToSell:e.target[1].value,
  //   USSD:e.target[2].value,
  //   AmountToReceieve:e.target[3].value,
  //   DestinationPhoneNumber:e.target[4].value
  // };
  // const isValid = await sellAirtimeSchema.isValid(formData)

  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <SellAirTimeWrapper>
      <form action="" onsubmit={SellAirTime} className="form-group">
        <h5 className="SellAirtime">Sell Airtime</h5>
        <div className="input-element">
          <label>Network</label>
          <Select
            styles={CustomStyles}
            onChange={setSelectedOption}
            options={Network}
            defaultValue={{ label: "Select Network", value: 0 }}
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
        <div className="input-element">
          <label htmlFor="Phone Number">Phone Number</label>
          <StyledInput
            type="number"
            name="PhoneNumber"
            placeholder="Enter your Phone Number"
          />
        </div>
        <div className="input-element">
          <label htmlFor="Amount to Sell">Amount to Sell</label>
          <StyledInput
            type="number"
            name="AmountToSell"
            placeholder="NGN"
          />
        </div>

        <div className="input-element">
          <label htmlFor="USSD">USSD</label>
          <StyledInput
            type="text"
            name="USSD"
            placeholder="*780*amount*09088756433*5000#"
          />
        </div>
        <div className="input-element">
          <label htmlFor="Amount to Receive">Amount to Receive</label>
          <StyledInput
            type="number"
            name="AmountToReceive"
            placeholder="NGN"
          />
        </div>
        <div className="input-element">
          <label htmlFor="Destination Phone Number">
            Destination Phone Number
          </label>
          <StyledInput
            type="number"
            name="DestinationPhoneNumber"
            placeholder="Destination phone number"
          />
        </div>
        <StyledButton 
        borderRadius="0%" 
        marginTop="3.5%" 
        width="198px" 
        height="48px" 
        type="submit">
          Sell Airtime
        </StyledButton>
      </form>
    </SellAirTimeWrapper>
  );
};

export default SellAirTime;
