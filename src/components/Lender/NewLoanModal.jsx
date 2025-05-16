import React, { useState } from 'react';

export default function NewLoanModal({ onClose }) {
  const [loanType, setLoanType] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [term, setTerm] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [notification, setNotification] = useState('');

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-md dark:bg-gray-800">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Create New Loan Product
          </h3>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              setIsCreating(true);

              try {
                const response = await fetch('/api/loans', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    loanType,
                    interestRate: parseFloat(interestRate),
                    term: parseInt(term, 10),
                  }),
                });

                if (!response.ok) throw new Error('Failed to create loan');

                await response.json();
                setNotification('✅ Loan product created successfully!');
                onClose(); // close modal on success
                setLoanType('');
                setInterestRate('');
                setTerm('');
              } catch (err) {
                setNotification('❌ Failed to create loan product.');
              } finally {
                setIsCreating(false);
                setTimeout(() => setNotification(''), 3000);
              }
            }}
          >
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Loan Type
              </label>
              <select
                value={loanType}
                onChange={(e) => setLoanType(e.target.value)}
                className="w-full border rounded-lg p-2 text-sm dark:bg-gray-700 dark:border-gray-600"
                required
              >
                <option value="">Select loan type</option>
                <option value="personal">Personal Loan</option>
                <option value="mortgage">Mortgage</option>
                <option value="auto">Auto Loan</option>
                <option value="business">Business Loan</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Interest Rate (%)
              </label>
              <input
                type="number"
                step="0.01"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                className="w-full border rounded-lg p-2 text-sm dark:bg-gray-700 dark:border-gray-600"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Term (months)
              </label>
              <input
                type="number"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                className="w-full border rounded-lg p-2 text-sm dark:bg-gray-700 dark:border-gray-600"
                required
              />
            </div>
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isCreating}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
              >
                {isCreating ? 'Creating...' : 'Create Loan Product'}
              </button>
            </div>
          </form>
        </div>

        {/* Notification */}
        {notification && (
          <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50">
            {notification}
          </div>
        )}
      </div>
    </>
  );
}
