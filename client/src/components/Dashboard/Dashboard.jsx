import React from "react";
// import { Header } from './Header'
import { DashboardStyle } from "../../styles/dashboardStyle";
// import { Footer } from '../Landing/Footer'
import { Navbar } from "../Landing/Navbar";

export const Dashboard = () => {
  return (
    <>
      <Navbar dashboard />
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

