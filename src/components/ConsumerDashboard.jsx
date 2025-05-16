import React, { useState, useRef } from 'react';
import { useSnackbar } from 'notistack';
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

function calculateCreditScore({
  paymentHistory,
  utilization,
  lengthOfHistory,
  creditMix,
  inquiries
}) {
  const baseScore = 300;
  const maxScore = 850;

  const paymentScore = paymentHistory * 100 * 0.35;
  const utilizationScore = (1 - utilization) * 100 * 0.3;
  const historyScore = Math.min(lengthOfHistory / 10, 1) * 100 * 0.15;
  const mixScore = creditMix * 100 * 0.1;
  const inquiryScore = Math.max(0, (1 - inquiries / 5)) * 100 * 0.1;

  const totalScore =
    paymentScore + utilizationScore + historyScore + mixScore + inquiryScore;

  const normalized = Math.round(
    baseScore + (totalScore / 100) * (maxScore - baseScore)
  );

  return Math.min(maxScore, Math.max(baseScore, normalized));
}

function ConsumerDashboard() {
  const { enqueueSnackbar } = useSnackbar();
  const userProfile = {
    name: 'nkhahle makara',
    email: 'neo.mk@example.com',
    avatar: 'https://via.placeholder.com/150',
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
  
  // State for credit score calculator
  const [paymentHistory, setPaymentHistory] = useState(0.95);
  const [utilization, setUtilization] = useState(0.2);
  const [lengthOfHistory, setLengthOfHistory] = useState(5);
  const [creditMix, setCreditMix] = useState(0.7);
  const [inquiries, setInquiries] = useState(1);
  
  // Calculate the score
  const calculatedScore = calculateCreditScore({
    paymentHistory,
    utilization,
    lengthOfHistory,
    creditMix,
    inquiries
  });

  // Refs for capturing components
  const creditTrendRef = useRef(null);
  const creditUtilizationRef = useRef(null);
  const paymentHistoryRef = useRef(null);
  const riskIndicatorsRef = useRef(null);

  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

  const getScoreRating = (score) => {
    if (score >= 800) return 'Excellent';
    if (score >= 740) return 'Very Good';
    if (score >= 670) return 'Good';
    if (score >= 580) return 'Fair';
    return 'Poor';
  };

  const getScoreColor = (score) => {
    if (score >= 800) return 'text-green-500';
    if (score >= 740) return 'text-teal-500';
    if (score >= 670) return 'text-blue-500';
    if (score >= 580) return 'text-yellow-500';
    return 'text-red-500';
  };

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
      
      {/* Credit Score Calculator Section */}
      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Credit Score Calculator</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Payment History (%)
              </label>
              <input
                type="number"
                min="0"
                max="100"
                value={paymentHistory * 100}
                onChange={e => setPaymentHistory(Math.min(Math.max(e.target.value / 100, 0), 1))}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Credit Utilization (%)
              </label>
              <input
                type="number"
                min="0"
                max="100"
                value={utilization * 100}
                onChange={e => setUtilization(Math.min(Math.max(e.target.value / 100, 0), 1))}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Length of Credit History (years)
              </label>
              <input
                type="number"
                min="0"
                max="20"
                value={lengthOfHistory}
                onChange={e => setLengthOfHistory(Math.min(Math.max(Number(e.target.value), 0), 20))}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Credit Mix (0 to 1)
              </label>
              <input
                type="number"
                min="0"
                max="1"
                step="0.01"
                value={creditMix}
                onChange={e => setCreditMix(Math.min(Math.max(Number(e.target.value), 0), 1))}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                New Credit Inquiries
              </label>
              <input
                type="number"
                min="0"
                max="10"
                value={inquiries}
                onChange={e => setInquiries(Math.min(Math.max(Number(e.target.value), 0), 10))}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Credit Score Result Card */}
      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Your Calculated Credit Score
          </h3>
          <div className={`text-5xl font-bold ${getScoreColor(calculatedScore)} mb-2`}>
            {calculatedScore}
          </div>
          <div className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-4">
            {getScoreRating(calculatedScore)}
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <div 
              className="bg-blue-600 h-2.5 rounded-full" 
              style={{ width: `${(calculatedScore / 850) * 100}%` }}
            ></div>
          </div>
          <div className="flex justify-between w-full mt-2 text-sm text-gray-500 dark:text-gray-400">
            <span>300</span>
            <span>850</span>
          </div>
        </div>
      </div>

      {/* Dashboard Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        <div ref={creditUtilizationRef}>
          <CreditUtilization utilization={utilization * 100} />
        </div>
        <div ref={paymentHistoryRef}>
          <PaymentHistory paymentHistory={paymentHistory * 100} />
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
