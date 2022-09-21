import React, { useEffect } from "react";
import { DashboardStyle } from "../../styles/dashboardStyle";
//eslint-disable-next-line
import { Navbar } from "../Landing/Navbar";
import axios from "axios";

export const Dashboard = () => {
  const id = localStorage.getItem("id");

  const apiCall = async () => {
    const result = await axios.get(
      `http://localhost:7000/user/singleUser/${id}`
    );
    console.log(result.data.user.lastName);
    localStorage.setItem("firstName", result.data.user.firstName);
    localStorage.setItem("lastName", result.data.user.lastName);
    localStorage.setItem("name", result.data.user.phoneNumber);
    localStorage.setItem("phoneNumber", result.data.user.email);
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
        </div>
      </DashboardStyle>
    </>
  );
};
