import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion for animations
import { gsap } from 'gsap'; // Import GSAP for advanced animations

const availableLoans = [
  {
    id: 1,
    name: 'Personal Loan',
    amount: 5000,
    interestRate: 5.5,
    payTime: '12 months',
  },
  {
    id: 2,
    name: 'Car Loan',
    amount: 15000,
    interestRate: 7.2,
    payTime: '24 months',
  },
  {
    id: 3,
    name: 'Home Loan',
    amount: 50000,
    interestRate: 4.8,
    payTime: '36 months',
  },
  {
    id: 4,
    name: 'Student Loan',
    amount: 10000,
    interestRate: 3.9,
    payTime: '48 months',
  },
];

function LoanRequest() {
  const [selectedLoan, setSelectedLoan] = useState(null);

  const handleLoanSelect = (loan) => {
    setSelectedLoan(loan);
  };

  const handleRequestLoan = () => {
    if (selectedLoan) {
      alert(`You have requested a ${selectedLoan.name} with an amount of $${selectedLoan.amount}`);
    }
  };

  // GSAP animation: trigger when component mounts
  React.useEffect(() => {
    gsap.fromTo(
      '.loan-card',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 }
    );
  }, []);

  return (
    <div className="p-4 space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Available Loans</h2>

      {/* Available Loans Cards with Framer Motion */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {availableLoans.map((loan) => (
          <motion.div
            key={loan.id}
            className="loan-card p-4 border rounded-lg cursor-pointer transition-colors duration-200 ease-in-out"
            onClick={() => handleLoanSelect(loan)}
            whileHover={{ scale: 1.05, opacity: 0.9 }} // Hover animation
            whileTap={{ scale: 0.95 }} // Tap animation
            animate={{
              borderColor: selectedLoan?.id === loan.id ? '#3b82f6' : '#d1d5db',
              backgroundColor: selectedLoan?.id === loan.id ? '#e0f2fe' : '#fff',
            }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{loan.name}</h3>
            <p className="text-lg text-gray-600 dark:text-gray-400">Amount: ${loan.amount}</p>
            <p className="text-sm text-gray-500 dark:text-gray-300">Interest Rate: {loan.interestRate}%</p>
            <p className="text-sm text-gray-500 dark:text-gray-300">Pay Time: {loan.payTime}</p>
          </motion.div>
        ))}
      </div>

      {/* Loan Request Section */}
      <div>
        {selectedLoan ? (
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              You have selected: {selectedLoan.name}
            </h3>
            <motion.button
              onClick={handleRequestLoan}
              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request Loan
            </motion.button>
          </div>
        ) : (
          <p className="text-gray-600 dark:text-gray-400">Please select a loan to request.</p>
        )}
      </div>
    </div>
  );
}

export default LoanRequest;
