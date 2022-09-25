import React from "react";

function DashBoardWallet() {
  return (
    <div>
      <h1>Dashboard</h1>
    <div style={{padding:"0 3%"}}>
      <div className="balance-wrapper">
        <div className="balance">
          <p className="text">Wallet Balance</p>
          <p className="acct-bal">N21,350.00</p>
          <button>Active is active</button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default DashBoardWallet;
