// index.js
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

import './index.css';

import App from './App';
import Signin from './components/Signin';
import Signup from './components/Signup';
import ConsumerDashboard from './components/ConsumerDashboard';
import LendersDashboard from './components/LendersDashboard';
import AdminDashboard from './components/AdminDashboard';
import PageNotFound from './components/PageNotFound';

import AboutUs from './components/AboutUs';
import Services from './components/Services';

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
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />

          {/* navigation links routes */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />

          {/* Dashboards */}
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/consumer-dashboard" element={<ConsumerDashboard />} />
          <Route path="/lenders-dashboard" element={<LendersDashboard />} />

          {/* 404 - Catch-all */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </SnackbarProvider>
  </StrictMode>
);
