import React, { useState } from "react";
// import { Error } from "./../../pages/ErrorPage";
// import UploadAvatar from "./../../pages/VerifyStatus";
// import Button from  '../../styles/ButtonStyles'
import TabNavItem from "./TabNavItem";
import TabContent from "./TabContent";
// import { UpdateUserSetting } from "./update/UpdateUser";
import { TabStyle } from "../../styles/DashboardStyles/TabStyles/TabStyles";
import Withdraw from "./TabContent/Withdraw";
import { ManageAcount } from "../../pages/ManageAcount";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <TabStyle>
      <ul className="nav">
        <TabNavItem
          title="Sell airtime"
          id="tab1"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Withdraw Balance"
          id="tab2"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Manage Bank Account"
          id="tab3"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Transaction History"
          id="tab4"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </ul>
      <div className="outlet">
        {/* {activeTab === "tab1" ? <Error /> : <UploadAvatar />} */}

        <TabContent id="tab1" activeTab={activeTab}>
          <p>
            {/* <UploadAvatar /> */}
            <h1>Sell airtime</h1>
          </p>
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <div>
            <Withdraw />
          </div>
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
          <p>
            {/* <UpdateUserSetting /> */}
            <ManageAcount />
            {/* <h1>Manage Bank Account Here</h1> */}
          </p>
        </TabContent>
        <TabContent id="tab4" activeTab={activeTab}>
          <p>
            {/* <Error /> */}
            <h1>Transaction History Here</h1>
          </p>
        </TabContent>
      </div>
      {/* <Button>Sell Airtime</Button> */}
    </TabStyle>
  );
};
export default Tabs;