import React from 'react'
import { Header } from './Header'
import { DashboardStyle } from '../../styles/dashboardStyle'

export const Dashboard = () => {
  return (
    <>
    <Header dashboard />
    <DashboardStyle>
      <div className='top'></div>
      <div className='dashboard'>
        <h1>Dashboard</h1>
        <div className='balance'></div>
      </div>
    </DashboardStyle>
    </>
  )
}