import React, { useState } from "react";
import TabNavItem from "./TabNavItem";
// import TabContent from "./TabContent";
// import { UpdateUserSetting } from "./update/UpdateUser";
import {
  TabContent,
  TabContentItem,
  DashCard,
  TabElement,
} from "../../styles/DashboardStyles/TabStyles/TabStyles";
import Withdraw from "./TabContent/Withdraw";
import SellAirTime from "./TabContent/SellAirTime";
import { ManageAcount } from "../../pages/ManageAcount";
import DashBoardWallet from "./TabContent/DashBoardWallet";
import { DashboardStyle } from "../../styles/DashboardStyles/HomeStyles";

const Tabs = () => {
  const tabs = [
    "Sell Airtime",
    "Withdraw balance",
    "Manage Bank Account",
    "Transaction History",
  ];
  const [active, setActive] = useState(tabs[0]);

  return (
    <>
      <DashboardStyle>
        <div className="top"></div>
        <div className="dashboard">
          {active === tabs[0] || active === tabs[1] ? (
            <DashBoardWallet />
          ) : (
            <h1>{active}</h1>
          )}
          <DashCard>
            <TabContent>
              {tabs.map((tab) => (
                <TabElement>
                  <div
                    className="nav"
                    key={tab}
                    active={active === tab}
                    onClick={() => setActive(tab)}
                  >
                    {tab}
                  </div>
                </TabElement>
              ))}{" "}
            </TabContent>

            <TabContentItem>
              {active === tabs[0] ? (
                <SellAirTime />
              ) : active === tabs[1] ? (
                <h3>withdraw balance component Here</h3>
              ) : active === tabs[2] ? (
                <ManageAcount />
              ) : (
                <h3>Transaction History Here</h3>
              )}
            </TabContentItem>
          </DashCard>
        </div>
      </DashboardStyle>
    </>
  );
};
export default Tabs;
