import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
// import DashboardOverview from './pages/restaurant/DashboardOverview';
import RestaurantRegistration from './pages/auth/RestaurantRegistration';
// import MenuManagement from './pages/restaurant/MenuManagement';
// import AdminApproval from './pages/admin/AdminApproval';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import OtpVerification from './pages/auth/OtpVerification';
import RegisterBusiness from './pages/auth/RegisterBusiness';
import VerifyNumber from './pages/auth/VerifyNumber';
import SetupBusiness from './pages/auth/SetupBusiness';
import Step1Start from './pages/auth/steps/Step1Start';
import Step2Location from './pages/auth/steps/Step2Location';
import Step3Documents from './pages/auth/steps/Step3Documents';
import Step4Legal from './pages/auth/steps/Step4Legal';
import Step5BankDetails from './pages/auth/steps/Step5BankDetails';
import Step6BankDocuments from './pages/auth/steps/Step6BankDocuments';
import Step7Partnership from './pages/auth/steps/Step7Partnership';
import Step8Confirmation from './pages/auth/steps/Step8Confirmation';
import Step2Menu from './pages/auth/step2/Step2Menu';
import Step2BankOwnerId from './pages/auth/step2/Step2BankOwnerId';
import Step2CallPreference from './pages/auth/step2/Step2CallPreference';
import Step2FinalStep from './pages/auth/step2/Step2FinalStep';

// Simple placeholder for separate orders and profile pages or reuse dashboard
const PlaceholderPage = ({ title }) => (
  <div className="flex items-center justify-center h-64 border-2 border-dashed border-gray-200 rounded-xl bg-gray-50 text-gray-400">
    {title} Page - Under Construction
  </div>
);

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verify-otp" element={<OtpVerification />} />
          <Route path="/register-business" element={<RegisterBusiness />} />
          <Route path="/verify-number" element={<VerifyNumber />} />
          <Route path="/setup-business" element={<SetupBusiness />} />
          <Route path="/step-1-start" element={<Step1Start />} />
          <Route path="/step-2-location" element={<Step2Location />} />
          <Route path="/step-3-documents" element={<Step3Documents />} />
          <Route path="/step-4-legal" element={<Step4Legal />} />
          <Route path="/step-5-bank" element={<Step5BankDetails />} />
          <Route path="/step-6-bank-documents" element={<Step6BankDocuments />} />
          <Route path="/step-7-partnership" element={<Step7Partnership />} />
          <Route path="/step-8-confirmation" element={<Step8Confirmation />} />
          <Route path="/step-2-menu" element={<Step2Menu />} />
          <Route path="/step-2-bank-owner-id" element={<Step2BankOwnerId />} />
          <Route path="/step-2-call-preference" element={<Step2CallPreference />} />
          <Route path="/step-2-final" element={<Step2FinalStep />} />

          {/* Dashboard & Admin Routes - Temporarily Disabled
          <Route path="/dashboard" element={<DashboardOverview />} />
          <Route path="/menu" element={<MenuManagement />} />
          <Route path="/admin" element={<AdminApproval />} />
          <Route path="/orders" element={<PlaceholderPage title="Orders" />} />
          <Route path="/profile" element={<PlaceholderPage title="Profile" />} />
          <Route path="/settings" element={<PlaceholderPage title="Settings" />} /> 
          */}

          <Route path="/register" element={<RestaurantRegistration />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
