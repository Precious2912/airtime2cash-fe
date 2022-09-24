import styled from 'styled-components';

export const TransactionHistoryWrapper = styled.div`
font-size: 14px;
font-weight: 300;

`

export const Transaction = styled.div`

box-shadow: 0px 1px 10px 0px rgba(0,0,0,0.1);
padding: 15px;
margin: 25px 0;
display: flex;
justify-content: space-between;
& .status{ 
    display: flex;
    flex-direction: column; 
text-align: right;

}
& p{
    margin:10px 0;
    font-weight: 300;
}

& label{
    color: #34A853;
    background-color: #34A8531A;
    padding: 8px;
    border-radius: 100px;
    width: 61px;
    height: 17px;
    line-height: 17px;
}

`