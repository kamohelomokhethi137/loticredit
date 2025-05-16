import React, { useEffect, useState } from 'react';

function LoansDashboard() {
  const [loanHistory, setLoanHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLoanHistory = async () => {
      try {
        const token = localStorage.getItem('token'); // Assuming you store the token in localStorage
        const response = await fetch('/api/loanhistory/me', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch loan history');
        }

        const data = await response.json();
        setLoanHistory(data.loanHistory);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchLoanHistory();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow dark:bg-gray-800 overflow-hidden">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Loan History</h2>
      <div className="overflow-x-auto">
        <div className="min-w-[500px] sm:min-w-0">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-4 py-3 sm:px-6">Loan ID</th>
                <th scope="col" className="px-4 py-3 sm:px-6">Amount</th>
                <th scope="col" className="px-4 py-3 sm:px-6">Type</th>
                <th scope="col" className="px-4 py-3 sm:px-6">Status</th>
                <th scope="col" className="px-4 py-3 sm:px-6">Due Date</th>
              </tr>
            </thead>
            <tbody>
              {loanHistory.map((loan, index) => (
                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-4 py-4 sm:px-6 font-medium text-gray-900 dark:text-white">{loan._id}</td>
                  <td className="px-4 py-4 sm:px-6">{loan.amount}</td>
                  <td className="px-4 py-4 sm:px-6">{loan.loan.loanType}</td>
                  <td className="px-4 py-4 sm:px-6">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      loan.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {loan.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 sm:px-6">{loan.endDate || 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default LoansDashboard;