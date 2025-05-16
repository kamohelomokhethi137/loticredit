import React, { useState, useRef } from 'react';
import { useSnackbar } from 'notistack';
import CreditScoreCard from './consumer/CreditScoreCard';
import CreditScoreTrend from './consumer/CreditScoreTrend';
import CreditUtilization from './consumer/CreditUtilization';
import PaymentHistory from './consumer/PaymentHistory';
import RiskIndicators from './consumer/RiskIndicators';
import LoansDashboard from './consumer/LoansDashboard';
import LoanRequest from './consumer/LoanRequest';
import NavBar from './consumer/NavBar';
import QuickActions from './consumer/QuickActions';
import SettingsDashboard from './consumer/SettingsDashboard';
import Sidebar from './consumer/Sidebar';
import ReportGenerator from './consumer/ReportGenerator';
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

function ConsumerDashboard() {
  const { enqueueSnackbar } = useSnackbar();
  const userProfile = {
    name: 'John Doe',
    email: 'neo.mk@example.com',
    avatar: 'https://via.placeholder.com/150',
    creditScore: 720,
    creditUtilization: '30%',
    paymentHistory: '100% on time',
    totalAccounts: 5,
    totalDebt: '$15,000'
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('credit');
  const [showLoanModal, setShowLoanModal] = useState(false);
  const [showDisputeModal, setShowDisputeModal] = useState(false);
  const [isGeneratingReport, setIsGeneratingReport] = useState(false);
  
  // Refs for capturing components
  const creditScoreRef = useRef(null);
  const creditTrendRef = useRef(null);
  const creditUtilizationRef = useRef(null);
  const paymentHistoryRef = useRef(null);
  const riskIndicatorsRef = useRef(null);

  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

  const saveSettings = async (settingsData) => {
    try {
      const response = await fetch('/api/save-settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settingsData),
      });

      if (!response.ok) throw new Error('Failed to save settings');

      const data = await response.json();
      enqueueSnackbar('Settings saved successfully!', { variant: 'success' });
      console.log('Settings saved:', data);
    } catch (error) {
      console.error('Error saving settings:', error);
      enqueueSnackbar('Failed to save settings', { variant: 'error' });
    }
  };

  const handleGenerateReport = async () => {
    setIsGeneratingReport(true);
    try {
      await generatePDFReport(
        userProfile,
        creditScoreRef.current,
        creditTrendRef.current,
        creditUtilizationRef.current,
        paymentHistoryRef.current,
        riskIndicatorsRef.current,
        enqueueSnackbar
      );
      enqueueSnackbar('Report generated successfully!', { variant: 'success' });
    } catch (error) {
      console.error('Error generating report:', error);
      enqueueSnackbar('Failed to generate report', { variant: 'error' });
    } finally {
      setIsGeneratingReport(false);
    }
  };

  const CreditDashboard = () => (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Credit Dashboard</h2>
        <ReportGenerator 
          generateReport={handleGenerateReport} 
          isGenerating={isGeneratingReport} 
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        <div ref={creditScoreRef}>
          <CreditScoreCard />
        </div>
        <div ref={creditTrendRef}>
          <CreditScoreTrend />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        <div ref={creditUtilizationRef}>
          <CreditUtilization />
        </div>
        <div ref={paymentHistoryRef}>
          <PaymentHistory />
        </div>
        <div ref={riskIndicatorsRef}>
          <RiskIndicators />
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        userProfile={userProfile}
      />
      <div className="flex-1 flex flex-col">
        <NavBar toggleSidebar={toggleSidebar} activeTab={activeTab} />

        <main className="h-full flex-1 mt-16 p-4 sm:ml-64">
          <AnimatePresence mode="wait">
            {activeTab === 'credit' && (
              <motion.div
                key="credit"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <QuickActions 
                  setShowLoanModal={setShowLoanModal}
                  setShowDisputeModal={setShowDisputeModal}
                  setActiveTab={setActiveTab}
                />
                <CreditDashboard />
              </motion.div>
            )}

            {activeTab === 'loans' && (
              <motion.div
                key="loans"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <LoansDashboard />
              </motion.div>
            )}

            {activeTab === 'loanRequest' && (
              <motion.div
                key="loanRequest"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <LoanRequest />
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
                <SettingsDashboard saveSettings={saveSettings} />
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

export default ConsumerDashboard;