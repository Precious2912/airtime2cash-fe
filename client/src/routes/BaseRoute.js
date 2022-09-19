import React from "react";
import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { NavRoutes } from "./NavRoutes";
import { LandingPage } from "../pages/LandingPage";
import { RegisterPage } from "../pages/RegisterPage";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";
import { Navbar } from "../components/Landing/Navbar";
import { Footer } from "../components/Landing/Footer";

export const BaseRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="*" element={<NavRoutes />} />

        {/* Protected Routes */}
        <Route path="/dashboard" element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashboardPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
};
