import React, { useState } from 'react';

const LoanApplications = () => {
  const [applications, setApplications] = useState([
    {
      id: 'LA-1001',
      name: 'John Smith',
      amount: '$25,000',
      type: 'Personal Loan',
      score: 720,
      status: 'Pending',
      date: '2023-06-15'
    },
    {
      id: 'LA-1002',
      name: 'Acme Corp',
      amount: '$150,000',
      type: 'Business Loan',
      score: 680,
      status: 'Under Review',
      date: '2023-06-14'
    },
    {
      id: 'LA-1003',
      name: 'Sarah Johnson',
      amount: '$35,000',
      type: 'Auto Loan',
      score: 750,
      status: 'Approved',
      date: '2023-06-12'
    },
    {
      id: 'LA-1004',
      name: 'Mike Brown',
      amount: '$200,000',
      type: 'Mortgage',
      score: 710,
      status: 'Pending',
      date: '2023-06-10'
    }
  ]);

  const handleStatusChange = (id, newStatus) => {
    setApplications(applications.map(app => 
      app.id === id ? { ...app, status: newStatus } : app
    ));
  };

  return (
    <div className="bg-white rounded-lg shadow dark:bg-gray-800 overflow-hidden">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Loan Applications</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Recent loan applications awaiting review</p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Applicant</th>
              <th className="px-6 py-3">Amount</th>
              <th className="px-6 py-3">Type</th>
              <th className="px-6 py-3">Credit Score</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{app.id}</td>
                <td className="px-6 py-4">{app.name}</td>
                <td className="px-6 py-4">{app.amount}</td>
                <td className="px-6 py-4">{app.type}</td>
                <td className="px-6 py-4">{app.score}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    app.status === 'Approved' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                    app.status === 'Under Review' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                    'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                  }`}>
                    {app.status}
                  </span>
                </td>
                <td className="px-6 py-4">{app.date}</td>
                <td className="px-6 py-4 space-x-2">
                  <button 
                    onClick={() => handleStatusChange(app.id, 'Approved')}
                    className="text-green-600 hover:text-green-900 dark:text-green-400 dark:hover:text-green-300"
                  >
                    Approve
                  </button>
                  <button 
                    onClick={() => handleStatusChange(app.id, 'Rejected')}
                    className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LoanApplications;