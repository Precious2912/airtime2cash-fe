import React, { useEffect, useState } from "react";
import { DashboardStyle } from "../../styles/dashboardStyle";
//eslint-disable-next-line
import axios from "axios";

import Tabs from "./Tabs";
export const Dashboard = () => {
  // eslint-disable-next-line
  const [isLogin, setIsLogin] = useState(false);
  const id = localStorage.getItem("id");

  const apiCall = async () => {
    const result = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/user/singleUser/${id}`
    );
    localStorage.setItem("firstName", result.data.user.firstName);
    localStorage.setItem("lastName", result.data.user.lastName);
    localStorage.setItem("phoneNumber", result.data.user.phoneNumber);
    localStorage.setItem("avatar", result.data.user.avatar);
    localStorage.setItem("userName", result.data.user.userName);
    localStorage.setItem("email", result.data.user.email);
  };

  useEffect(() => {
    apiCall();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <DashboardStyle>
        <div className="top"></div>
        <div className="dashboard">
          <h1>Dashboard</h1>
          <div className="balance-wrapper">
            <div className="balance">
              <p className="text">Wallet Balance</p>
              <p className="acct-bal">N21,350.00</p>
              <button>Active is active</button>
            </div>
    
    

          </div>
          <Tabs />
        </div>
      </DashboardStyle>
    </>
  );
};
