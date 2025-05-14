import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SnackbarProvider } from 'notistack'; 
import './index.css';
import Signin from './components/Signin';
import Signup from './components/Signup';
import App from './App';
import ConsumerDashboard from './components/ConsumerDashboard';
import LendersDashboard from './components/LendersDashboard';
import AdminDashboard from './components/AdminDashboard';
import PageNotFound from './components/PageNotFound'; 


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SnackbarProvider 
      maxSnack={3}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }} // position
      autoHideDuration={3000} // how long snackbars show
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="admin" element={<AdminDashboard/>} />
          <Route path="/ConsumerDashboard" element={<ConsumerDashboard />} />
          <Route path="/lendersDashboard" element={<LendersDashboard/>} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </BrowserRouter>
    </SnackbarProvider>
  </StrictMode>
);
