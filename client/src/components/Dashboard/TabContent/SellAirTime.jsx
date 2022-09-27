import React, { useState } from "react";
import { StyledInput, SellAirTimeWrapper } from "../../../styles/DashboardStyles/TabStyles/SellAirTimeStyles";
import { CustomStyles } from "../../../styles/DashboardStyles/TabStyles/selectOptionStyle";
import StyledButton from '../../../styles/ButtonStyles'
import Select from "react-select";

const Network = [
  { value: "MTN", label: "MTN" },
  { value: "GLO", label: "GLO" },
  { value: "AIRTEL", label: "AIRTEL" },
];

const SellAirTime = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <SellAirTimeWrapper>
      <form action="" className="form-group">
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
            name="Phone Number"
            placeholder="Enter your Phone Number"
          />
        </div>
        <div className="input-element">
          <label htmlFor="Amount to Sell">Amount to Sell</label>
          <StyledInput
            type="number"
            name="Amount to Sell"
            placeholder="NGN"
          />
        </div>

        <div className="input-element">
          <label htmlFor="USSD">USSD</label>
          <StyledInput
           disabled
            type="text"
            name="USSD"
            placeholder="*780*amount*09088756433*5000#"
          />
        </div>
        <div className="input-element">
          <label htmlFor="Amount to Receive">Amount to Receive</label>
          <StyledInput
          disabled
            type="number"
            name="Amount to Receive"
            placeholder="NGN"
          />
        </div>
        <div className="input-element">
          <label htmlFor="Destination Phone Number">
            Destination Phone Number
          </label>
          <StyledInput
            type="number"
            name="Destination Phone Number"
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
