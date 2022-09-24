import React from 'react'
import { Transaction, TransactionHistoryWrapper } from '../../../styles/DashboardStyles/TabStyles/TransactionHistoryStyle'

const TransactionHistory = () => {
  return (
    <TransactionHistoryWrapper>
        <Transaction>
            <div>
                <p><b>Today,</b>10:15AM</p>
                <p>Withdraw fund</p>
                <p>25/5/2022</p>
            </div>
            <div className='status'>
                <label>Received</label>
                <p>N5,000</p>
            </div>
        </Transaction>

        <Transaction>
            <div>
                <p><b>Today,</b>10:15AM</p>
                <p>Withdraw fund</p>
                <p>25/5/2022</p>
            </div>
            <div className='status'>
                <label>Received</label>
                <p>N5,000</p>
            </div>
        </Transaction>

        <Transaction>
            <div>
                <p><b>Today,</b>10:15AM</p>
                <p>Withdraw fund</p>
                <p>25/5/2022</p>
            </div>
            <div className='status'>
                <label>Received</label>
                <p>N5,000</p>
            </div>
        </Transaction>

        <Transaction>
            <div>
                <p><b>Today,</b>10:15AM</p>
                <p>Withdraw fund</p>
                <p>25/5/2022</p>
            </div>
            <div className='status'>
                <label>Received</label>
                <p>N5,000</p>
            </div>
        </Transaction>

     
      
    </TransactionHistoryWrapper>
  )
}

export default TransactionHistory