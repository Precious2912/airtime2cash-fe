import React from 'react'
// import { Header } from './Header'
import { DashboardStyle } from '../../styles/dashboardStyle'
// import { Footer } from '../Landing/Footer'

export const Dashboard = () => {
  return (
    <>
    <DashboardStyle>
      <div className='top'></div>
      <div className='dashboard'>
        <h1>Dashboard</h1>
        <div className='balance-wrapper'>
          <div className="balance">
            
          </div>
        </div>
      </div>
    </DashboardStyle>
    </>
  )
}