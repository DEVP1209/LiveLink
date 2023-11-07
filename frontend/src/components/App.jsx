import React from "react";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResetPassword from "./ResetPassword";
import { ContextProvider } from "../contexts/Context";

export default function App() {
  return (
    <AuthProvider>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/forgot-password" element={<ResetPassword />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <ContextProvider>
                    <Dashboard />
                  </ContextProvider>
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}
