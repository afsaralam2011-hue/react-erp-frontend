// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Auth Pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

// Dashboard
import Dashboard from "./pages/dashboard/Dashboard";

// Department Dashboards
import HRDashboard from "./pages/departments/HR/HRDashboard";
import FinanceDashboard from "./pages/departments/Finance/FinanceDashboard";
import ProductionDashboard from "./pages/departments/Production/ProductionDashboard";
import SalesDashboard from "./pages/departments/Sales/SalesDashboard";
import ITDashboard from "./pages/departments/IT/ITDashboard";
import LogisticsDashboard from "./pages/departments/Logistics/LogisticsDashboard";

// Production Sections
import ProductionSections from "./pages/ProductionSections/Production";

// Flattening Section Pages
import FlatteningPage from "./pages/ProductionSections/FlatteningSection/FlatteningPage";
import FlatteningForm from "./pages/ProductionSections/FlatteningSection/FlatteningForm";
import FlatteningEditForm from "./pages/ProductionSections/FlatteningSection/FlatteningEditForm";

// Layout
import Layout from "./components/common/Layout";

function App() {
  return (
    <Router>
      <Routes>
        {/* ========== AUTH ROUTES ========== */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* ========== DASHBOARD ROUTE ========== */}
        <Route path="/dashboard" element={
          <Layout title="ERP Dashboard" subtitle="Welcome to Pakistan Wire Industries ERP System">
            <Dashboard />
          </Layout>
        } />
        
        {/* ========== DEPARTMENT ROUTES ========== */}
        <Route path="/hr" element={
          <Layout title="HR Department" subtitle="Manage employees, recruitment, payroll, and HR operations">
            <HRDashboard />
          </Layout>
        } />
        
        <Route path="/finance" element={
          <Layout title="Finance Department" subtitle="Financial planning, accounting, budgeting, and reporting">
            <FinanceDashboard />
          </Layout>
        } />
        
        <Route path="/production" element={
          <Layout title="Production Department" subtitle="Manufacturing operations, production planning, and quality control">
            <ProductionDashboard />
          </Layout>
        } />
        
        <Route path="/sales" element={
          <Layout title="Sales Department" subtitle="Sales strategies, customer relations, and revenue generation">
            <SalesDashboard />
          </Layout>
        } />
        
        <Route path="/it" element={
          <Layout title="IT Department" subtitle="IT infrastructure, software development, and technical support">
            <ITDashboard />
          </Layout>
        } />
        
        <Route path="/logistics" element={
          <Layout title="Logistics Department" subtitle="Supply chain management, transportation, and distribution">
            <LogisticsDashboard />
          </Layout>
        } />
        
        {/* ========== PRODUCTION SECTIONS ROUTES ========== */}
        <Route path="/production-sections" element={
          <Layout title="Production Sections" subtitle="All production sections management">
            <ProductionSections />
          </Layout>
        } />
        
        {/* Flattening Section Routes */}
        <Route path="/production-sections/flattening" element={
          <Layout title="Flattening Section" subtitle="Wire flattening process management">
            <FlatteningPage />
          </Layout>
        } />
        
        <Route path="/production-sections/flattening/new" element={
          <Layout title="New Flattening Record" subtitle="Create new flattening section record">
            <FlatteningForm />
          </Layout>
        } />
        
        <Route path="/production-sections/flattening/edit/:id" element={
          <Layout title="Edit Flattening Record" subtitle="Edit existing flattening section record">
            <FlatteningEditForm />
          </Layout>
        } />
        
        {/* ========== DEFAULT ROUTES ========== */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  );
}

export default App;