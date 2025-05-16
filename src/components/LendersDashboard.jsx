import React, { useState } from 'react';
import axios from 'axios';
import LenderPortfolio from './Lender/LenderPortfolio';
import LoanApplications from './Lender/LoanApplications';
import BorrowerAnalysis from './Lender/BorrowerAnalysis';
import RiskAssessment from './Lender/RiskAssessment';
import LenderSettings from './Lender/LenderSettings';
import LenderNavBar from './Lender/LenderNavBar';
import LenderSidebar from './Lender/LenderSidebar';
import NewLoanModal from './Lender/NewLoanModal';
import { motion, AnimatePresence } from 'framer-motion';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

function LenderDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('portfolio');
  const [showNewLoanModal, setShowNewLoanModal] = useState(false);
  const [notification, setNotification] = useState('');

  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

  const handleLogin = async (credentials) => {
    try {
      const response = await axios.post('/api/auth/login', credentials);
      const { token, user, lenderProfile } = response.data;
      localStorage.setItem('authToken', token);
      localStorage.setItem('user', JSON.stringify(user));
      if (user.role === 'lender') {
        localStorage.setItem('lenderProfile', JSON.stringify(lenderProfile));
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const getLenderProfile = () => {
    const storedProfile = localStorage.getItem('lenderProfile');
    if (storedProfile) {
      return JSON.parse(storedProfile);
    }
    return null;
  };

  const updateLenderProfile = async (updates) => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await axios.patch('/api/lender/profile', updates, {
        headers: { Authorization: `Bearer ${token}` }
      });
      localStorage.setItem('lenderProfile', JSON.stringify(response.data.profile));
      return response.data.profile;
    } catch (error) {
      console.error('Update failed:', error);
      throw error;
    }
  };

  const saveSettings = async (settingsData) => {
    try {
      const response = await fetch('/api/lender/save-settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settingsData),
      });
      if (!response.ok) throw new Error('Failed to save settings');
      const data = await response.json();
      alert('Settings saved successfully!');
      console.log('Lender settings saved:', data);
    } catch (error) {
      alert('Failed to save settings');
      console.error('Error saving lender settings:', error);
    }
  };

  const LenderQuickActions = () => (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow dark:bg-gray-800 mb-4 sm:mb-6">
      <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white mb-3">
        Quick Actions
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <button
          onClick={() => setShowNewLoanModal(true)}
          className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
        >
          Create New Loan
        </button>
        <button
          onClick={() => setActiveTab('applications')}
          className="p-3 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium transition-colors"
        >
          Review Applications
        </button>
        <button
          onClick={() => setActiveTab('risk')}
          className="p-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition-colors"
        >
          Risk Dashboard
        </button>
        <button
          onClick={() => setActiveTab('reports')}
          className="p-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors"
        >
          Generate Reports
        </button>
      </div>
    </div>
  );

  const lenderProfile = getLenderProfile() || {
    name: 'Acme Lending',
    email: 'lending@acme.com',
    avatar:
      'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="150" height="150"><rect width="100" height="100" fill="%23348feb"/><text x="50" y="65" font-family="Arial" font-size="60" fill="white" text-anchor="middle">L</text></svg>',
    institutionType: 'Commercial Bank',
    totalPortfolio: 'M15,750,000'
  };

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      <LenderSidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        lenderProfile={lenderProfile}
      />

      <div className="flex-1 flex flex-col">
        <LenderNavBar
          toggleSidebar={toggleSidebar}
          activeTab={activeTab}
          lenderProfile={lenderProfile}
        />

        <main className="h-full flex-1 mt-16 p-4 sm:ml-64">
          <AnimatePresence mode="wait">
            {activeTab === 'portfolio' && (
              <motion.div
                key="portfolio"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <LenderQuickActions />
                <LenderPortfolio />
              </motion.div>
            )}

            {activeTab === 'applications' && (
              <motion.div
                key="applications"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <LoanApplications />
              </motion.div>
            )}

            {activeTab === 'analysis' && (
              <motion.div
                key="analysis"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <BorrowerAnalysis />
              </motion.div>
            )}

            {activeTab === 'risk' && (
              <motion.div
                key="risk"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <RiskAssessment />
              </motion.div>
            )}

            {activeTab === 'settings' && (
              <motion.div
                key="settings"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <LenderSettings saveSettings={saveSettings} />
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>

      {/* New Loan Modal controlled by state */}
      <AnimatePresence>
        {showNewLoanModal && (
          <NewLoanModal
            onClose={() => setShowNewLoanModal(false)}
            setNotification={setNotification}
          />
        )}
      </AnimatePresence>

      {/* Optional: show notification */}
      {notification && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50">
          {notification}
        </div>
      )}
    </div>
  );
}

export default LenderDashboard;
