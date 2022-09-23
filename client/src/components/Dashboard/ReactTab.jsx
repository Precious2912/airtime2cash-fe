import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./Dashboard.css";

function DashTab() {
  

  return (
    <div className="App">
      <Tabs className="Tabs">
        <TabList>
          <Tab>Sell airtime</Tab>
          <Tab>Withdraw Balance</Tab>
          <Tab>Manage Bank Account</Tab>
          <Tab>Transaction History</Tab>
        </TabList>
        <TabPanel>
          <p>Tab 1 works!</p>
        </TabPanel>
        <TabPanel>
          <p>Tab 2 works!</p>
        </TabPanel>
        <TabPanel>
          <p>Tab 3 works!</p>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default DashTab;
