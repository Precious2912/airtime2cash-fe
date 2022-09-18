import React from "react";
import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { LandingPage } from "../pages/LandingPage";
import { RegisterPage } from "../pages/RegisterPage";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";
import { Navbar } from "../components/Landing/Navbar";
import { Footer } from "../components/Landing/Footer";

export const BaseRoute = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>

        {/* Protected Routes */}
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashboardPage />}></Route>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};
