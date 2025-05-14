import React from 'react';
import { Bar, Line } from 'react-chartjs-2';

const BorrowerAnalysis = () => {
  const creditScoreData = {
    labels: ['300-579', '580-669', '670-739', '740-799', '800-850'],
    datasets: [{
      label: 'Borrowers by Credit Score',
      data: [5, 15, 30, 35, 15],
      backgroundColor: '#3B82F6',
      borderColor: '#2563EB',
      borderWidth: 1
    }]
  };

  const defaultRateData = {
    labels: ['300-579', '580-669', '670-739', '740-799', '800-850'],
    datasets: [{
      label: 'Default Rate (%)',
      data: [18.2, 7.5, 3.1, 1.2, 0.5],
      backgroundColor: '#EF4444',
      borderColor: '#DC2626',
      borderWidth: 2,
      tension: 0.3
    }]
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow dark:bg-gray-800">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Average Borrower Score</h3>
          <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">732</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Industry average: 698</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow dark:bg-gray-800">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Approval Rate</h3>
          <p className="text-3xl font-bold text-green-600 dark:text-green-400">68%</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Last month: 65%</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow dark:bg-gray-800">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Average Debt-to-Income</h3>
          <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">28%</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Below recommended max of 36%</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow dark:bg-gray-800">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Credit Score Distribution</h3>
          <div className="h-64">
            <Bar 
              data={creditScoreData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  y: {
                    beginAtZero: true,
                    ticks: {
                      color: '#6B7280'
                    }
                  },
                  x: {
                    ticks: {
                      color: '#6B7280'
                    }
                  }
                }
              }}
            />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow dark:bg-gray-800">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Default Rate by Credit Score</h3>
          <div className="h-64">
            <Line 
              data={defaultRateData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  y: {
                    beginAtZero: true,
                    ticks: {
                      color: '#6B7280'
                    }
                  },
                  x: {
                    ticks: {
                      color: '#6B7280'
                    }
                  }
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BorrowerAnalysis;