import React from "react";
import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { LandingPage } from "../pages/LandingPage";
import { RegisterPage } from "../pages/RegisterPage";
import { LoginPage } from "../pages/LoginPage";

import { UpdateUserSetting } from "../components/Dashboard/update/UpdateUser";

import { DashboardPage } from "../pages/DashboardPage";

export const BaseRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>

      

        {/* Protected Routes */}
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashboardPage />}></Route>
         <Route path="/dashboard/UpdateUser" element={<UpdateUserSetting />}></Route>
        </Route>

        {/* Error Route */}
        <Route path="*" element={<h1>Error Page</h1>}></Route>
      </Routes>
    </div>
  );
};
