import React from "react";
import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { LandingPage } from "../pages/LandingPage";
import { RegisterPage } from "../pages/RegisterPage";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";
import {ForgottenPasswordPage} from "../pages/ForgottenPasswordPage";
import { ResetPasswordPage } from "../pages/ResetPasswordPage";
import { EmailSent } from "../pages/EmailSent";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const BaseRoute = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route> 
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/forgottenpassword" element={<ForgottenPasswordPage />}></Route>
        <Route path="/resetpassword/:token" element={<ResetPasswordPage />}></Route>
        <Route path="/emailsent" element={<EmailSent text=" We sent a password reset link to your email Please click the link to
            reset your password" />}></Route>
          <Route path="/verify-emailsent" element={<EmailSent text=" We send a verification link to your email Please click the link to
            reset your password" />}></Route>



        {/* Protected Routes */}
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <DashboardPage />
          </ProtectedRoute>
          }
        />
        

        {/* Error Route */}
        <Route path="*" element={<h1>Error Page</h1>}></Route>
      </Routes>
    </>
  );
};
