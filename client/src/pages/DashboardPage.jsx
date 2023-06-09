import React from 'react'
import { Dashboard } from '../components/Dashboard/Dashboard'
import { UpdateUserSetting } from "../components/Dashboard/update/UpdateUser";
import { Routes, Route } from "react-router-dom";
import { Navbar } from '../components/Landing/Navbar';

export const DashboardPage = () => {
  return (
    <>
    <Navbar dashboard />
    <Routes>
        <Route path="/:token" element={<Dashboard />}></Route> 
        <Route path="/UpdateUser" element={<UpdateUserSetting />}></Route> 
        <Route path="/*" element={<h1>Error Page</h1>}></Route>
     </Routes>
     </>
  )
}