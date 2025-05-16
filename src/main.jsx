// index.js
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

import './index.css';

import App from './App';
import Login from './components/Login';
import Signup from './components/Signup';
import ConsumerDashboard from './components/ConsumerDashboard';
import LendersDashboard from './components/LendersDashboard';
import AdminDashboard from './components/AdminDashboard';
import PageNotFound from './components/PageNotFound';

import AboutUs from './components/AboutUs';
import Services from './components/Services';
import ContactUs from './components/ContactUs';

import VerificationAccount from './components/VerificationAccount'; 
import EmailConfirmation from './components/EmailConfirmation';

const root = createRoot(document.getElementById('root'));
  
root.render(
  <StrictMode>
    <SnackbarProvider 
      maxSnack={3}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      autoHideDuration={3000}
    >
      <BrowserRouter>
        <Routes>
          {/* landing page*/}
          <Route path="/" element={<App />} />
          
          {/* Auth routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* navigation links routes */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />

          {/* Dashboards */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/consumer" element={<ConsumerDashboard />} />
          <Route path="/lender" element={<LendersDashboard />} />


           <Route path="/auth/verify-email" element={<VerificationAccount />} />
           <Route path="/email-confirmation" element={<EmailConfirmation />} />

          {/* 404 - Catch-all */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </SnackbarProvider>
  </StrictMode>
);
