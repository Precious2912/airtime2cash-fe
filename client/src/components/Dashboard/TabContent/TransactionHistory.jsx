import React, { useState } from "react";
import {
  TransactionWrapper,
  WrapperLeft,
  TimeStyle,
  DayStyle,
  WrapperRight,
  ReceivedStyle,
  AmountStyle,
} from "../../../styles/DashboardStyles/TabStyles/TransactionHistoryStyle"; 
import InfiniteScroll from "react-infinite-scroll-component";
const TransactionHistory = ({ amount, date, transactionType }) => {
  const initialData = [
    {
      amount: "N5,000",
      transactionType: "Received",
      date: new Date(),
    },
    {
      amount: "N6,000",
      transactionType: "Paid",
      date: new Date(),
    },
    {
      amount: "N4,000",
      transactionType: "Received",
      date: new Date(),
    },
    {
      amount: "N3,000",
      transactionType: "Received",
      date: new Date(),
    },
  ];
  const [transactions, setTransactions] = useState(initialData);

  const handleAdd = () => {
    console.log("Presssure");
    setTransactions([...transactions, ...initialData]);
  };

  const handleRefresh = () => {
    console.log("refreshing...");
    setTransactions(initialData);
  };

  return (
    <div
      id="scrollableDiv"
      style={{
        height: "100vh",
        overflow: "auto",
        Width: "100%",
      }}
    >
      <InfiniteScroll
        dataLength={transactions.length} //This is important field to render the next data
        next={handleAdd}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        refreshFunction={handleRefresh}
        pullDownToRefresh
        onScroll={() => console.log("scrolling")}
        pullDownToRefreshThreshold={50}
        pullDownToRefreshContent={
          <h3 style={{ textAlign: "center" }}>&#8595; Pull down to refresh</h3>
        }
        releaseToRefreshContent={
          <h3 style={{ textAlign: "center" }}>&#8593; Release to refresh</h3>
        }
      >
        {transactions.map((transaction,index) => (
          <TransactionWrapper key={index}>
            <WrapperLeft>
              <TimeStyle>
                <DayStyle>Today,</DayStyle> 10:15AM
              </TimeStyle>
              <div>Withdraw fund</div>
              <div>25/5/2022</div>
            </WrapperLeft>
            <WrapperRight>
              <ReceivedStyle>{transaction.transactionType}</ReceivedStyle>
              <AmountStyle>{transaction.amount}</AmountStyle>
            </WrapperRight>
          </TransactionWrapper>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default TransactionHistory;
