import React, { useState } from 'react';
import { Rocket, AlertTriangle, Lightbulb, ShieldAlert, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Modal from './Modal';

const QuickActions = ({ setActiveTab }) => {
  const [showLoanModal, setShowLoanModal] = useState(false);
  const [showTipsModal, setShowTipsModal] = useState(false);
  const [showDisputeModal, setShowDisputeModal] = useState(false);
  const [showClaimForm, setShowClaimForm] = useState(false);
  const [selectedLoan, setSelectedLoan] = useState(null);
  const [personalDetails, setPersonalDetails] = useState({
    idNumber: '',
    fullName: '',
    address: '',
  });

  const availableLoans = [
    {
      id: 1,
      lender: "Prime Capital",
      amount: "$5,000 - $50,000",
      rate: "5.99% APR",
      term: "12-60 months",
      description: "Personal loan with competitive rates for good credit",
      requirements: "680+ credit score, $3k+ monthly income",
      darkColor: "bg-gray-800 border-gray-700"
    },
    {
      id: 2,
      lender: "QuickCash Solutions",
      amount: "$1,000 - $10,000",
      rate: "8.49% APR",
      term: "6-36 months",
      description: "Fast approval for emergency expenses",
      requirements: "600+ credit score, $2k+ monthly income",
      darkColor: "bg-gray-800 border-gray-700"
    },
    {
      id: 3,
      lender: "Elite Lending",
      amount: "$10,000 - $100,000",
      rate: "4.75% APR",
      term: "24-84 months",
      description: "Low-interest loans for excellent credit",
      requirements: "720+ credit score, $5k+ monthly income",
      darkColor: "bg-gray-800 border-gray-700"
    },
    {
      id: 4,
      lender: "Fresh Start Finance",
      amount: "$500 - $5,000",
      rate: "12.99% APR",
      term: "3-24 months",
      description: "Credit builder loans with flexible terms",
      requirements: "No minimum credit score",
      darkColor: "bg-gray-800 border-gray-700"
    },
    {
      id: 5,
      lender: "Business Growth Capital",
      amount: "$25,000 - $250,000",
      rate: "6.49% APR",
      term: "12-120 months",
      description: "Business expansion loans with deferred payments",
      requirements: "2+ years in business, $10k+ monthly revenue",
      darkColor: "bg-gray-800 border-gray-700"
    }
  ];

  const creditTips = [
    "Compare multiple loan offers before choosing",
    "Lower APRs typically save you money long-term",
    "Shorter terms mean higher payments but less interest",
    "Check for prepayment penalties before accepting",
    "Your debt-to-income ratio affects approval chances"
  ];

  const handleClaimLoan = (loan) => {
    setSelectedLoan(loan);
    setShowClaimForm(true);
  };

  const handlePersonalDetailChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitClaim = (e) => {
    e.preventDefault();
    console.log('Loan Claimed:', selectedLoan);
    console.log('Personal Details:', personalDetails);
    // Reset form
    setPersonalDetails({ idNumber: '', fullName: '', address: '' });
    setShowClaimForm(false);
    setShowLoanModal(false);
    alert('Loan Claim Submitted Successfully!');
  };

  const actions = [
    {
      icon: <Rocket className="h-5 w-5" />,
      label: "View Loans",
      onClick: () => setShowLoanModal(true),
      color: "bg-indigo-100 text-indigo-700 hover:bg-indigo-200 dark:bg-indigo-900 dark:text-indigo-100 dark:hover:bg-indigo-800"
    },
    {
      icon: <AlertTriangle className="h-5 w-5" />,
      label: "Dispute Report",
      onClick: () => setShowDisputeModal(true),
      color: "bg-rose-100 text-rose-700 hover:bg-rose-200 dark:bg-rose-900 dark:text-rose-100 dark:hover:bg-rose-800"
    },
    {
      icon: <Lightbulb className="h-5 w-5" />,
      label: "Loan Tips",
      onClick: () => setShowTipsModal(true),
      color: "bg-amber-100 text-amber-700 hover:bg-amber-200 dark:bg-amber-900 dark:text-amber-100 dark:hover:bg-amber-800"
    },
    {
      icon: <ShieldAlert className="h-5 w-5" />,
      label: "Set Alerts",
      onClick: () => console.log("Set Alerts clicked"),
      color: "bg-emerald-100 text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-900 dark:text-emerald-100 dark:hover:bg-emerald-800"
    }
  ];

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Quick Actions</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {actions.map((action, index) => (
          <motion.button
            key={index}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={action.onClick}
            className={`flex items-center justify-center p-3 rounded-lg transition-colors ${action.color} shadow-sm`}
          >
            <div className="flex items-center space-x-2">
              {action.icon}
              <span className="text-sm font-medium">{action.label}</span>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Available Loans Modal */}
      <Modal isOpen={showLoanModal} onClose={() => setShowLoanModal(false)} title="Available Loan Offers">
        <div className="space-y-4">
          {availableLoans.map((loan) => (
            <div
              key={loan.id}
              className={`border rounded-lg p-4 ${loan.darkColor} border-gray-700 shadow-sm`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-white">{loan.lender}</h4>
                  <p className="text-gray-300 text-sm">{loan.description}</p>
                </div>
                <span className="bg-indigo-900 text-indigo-100 text-xs px-2 py-1 rounded">
                  {loan.rate}
                </span>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                <div className="text-gray-400">Amount:</div>
                <div className="text-white">{loan.amount}</div>

                <div className="text-gray-400">Term:</div>
                <div className="text-white">{loan.term}</div>

                <div className="text-gray-400">Requirements:</div>
                <div className="text-white">{loan.requirements}</div>
              </div>

              <div className="mt-4 flex justify-end">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleClaimLoan(loan)}
                  className="flex items-center space-x-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md text-sm"
                >
                  <CheckCircle className="h-4 w-4" />
                  <span>Claim Offer</span>
                </motion.button>
              </div>
            </div>
          ))}
        </div>
      </Modal>

      {/* Claim Loan Personal Details Modal */}
      <Modal isOpen={showClaimForm} onClose={() => setShowClaimForm(false)} title="Enter Personal Details">
        <form className="space-y-4" onSubmit={handleSubmitClaim}>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">ID Number</label>
            <input
              type="text"
              name="idNumber"
              value={personalDetails.idNumber}
              onChange={handlePersonalDetailChange}
              placeholder="Enter your ID Number"
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={personalDetails.fullName}
              onChange={handlePersonalDetailChange}
              placeholder="Enter your full name"
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Address</label>
            <textarea
              name="address"
              value={personalDetails.address}
              onChange={handlePersonalDetailChange}
              placeholder="Enter your address"
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-indigo-500"
              rows={3}
              required
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md transition-colors"
            >
              Submit Claim
            </button>
          </div>
        </form>
      </Modal>

      {/* Loan Tips Modal */}
      <Modal isOpen={showTipsModal} onClose={() => setShowTipsModal(false)} title="Loan Tips & Advice">
        <div className="space-y-4">
          <div className="bg-amber-900/30 border border-amber-800 rounded-lg p-4">
            <h4 className="font-medium text-amber-200 mb-2">Before You Borrow</h4>
            <ul className="space-y-2">
              {creditTips.map((tip, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-amber-400 mr-2 mt-1">•</span>
                  <span className="text-gray-300">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Modal>

      {/* Dispute Report Modal */}
      <Modal isOpen={showDisputeModal} onClose={() => setShowDisputeModal(false)} title="Credit Report Dispute">
        {/* (keep your dispute form here as you had it before) */}
      </Modal>
    </div>
  );
};

export default QuickActions;
