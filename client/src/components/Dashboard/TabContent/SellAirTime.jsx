import React from 'react'
import {SellAirTimeWrapper} from '../../../styles/DashboardStyles/TabStyles/SellAirTimeStyles'

const SellAirTime = () => {
  return (
    <SellAirTimeWrapper>
          <form action="" className="form-group" >
        <div className="input-element">
       <label>Network</label>
        <select name="Network" id="Network" placeholder="select Network">
              <option value="MTN">MTN</option>
              <option value="GLO">GLO</option>
              <option value="AIRTEL">AIRTEL  </option>
                </select>
                <div className="input-element">
              <label htmlFor="Phone Number">Phone Number</label>
              <input
                type="Phone Number"
                name="Phone Number"
                placeholder="Enter your Phone Number" />
            </div>
            <div className="input-element">
              <label htmlFor="Amount to Sell">Amount to Sell</label>
              <input
                type="Amount to Sell"
                name="Amount to Sell"
                placeholder="NGN"
               
              />
            </div>

            <div className="input-element">
              <label htmlFor="USSD">USSD</label>
              <input
                type="USSD"
                name="USSD"
                placeholder="*780*amount*09088756433*5000#"
               
              />
            </div>
            <div className="input-element">
              <label htmlFor="Amount to Receive">Amount to Receive</label>
              <input
                type="Amount to Receive"
                name="Amount to Receive"
                placeholder="NGN"
              
              />
            </div>
            <div className="input-element">
              <label htmlFor="Destination Phone Number">Destination Phone Number</label>
              <input
                type="Destination Phone Number"
                name="Destination Phone Number"               placeholder="Destination phone number"
                
                 
              />
            </div>
            <button type="submit" className="Sell Airtime-btn">
              Sell Airtime
            </button>
            </div>
            </form>
         </SellAirTimeWrapper>
  )
}

export default SellAirTime