import React from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';

const LenderPortfolio = () => {
  const portfolioData = {
    labels: ['Personal Loans', 'Mortgages', 'Auto Loans', 'Business Loans'],
    datasets: [{
      data: [35, 40, 15, 10],
      backgroundColor: [
        '#3B82F6',
        '#10B981',
        '#F59E0B',
        '#6366F1'
      ],
      borderWidth: 1
    }]
  };

  const performanceData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Loan Performance (%)',
      data: [92, 94, 96, 95, 97, 98],
      backgroundColor: '#3B82F6',
      borderColor: '#2563EB',
      borderWidth: 2
    }]
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow dark:bg-gray-800">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Total Portfolio</h3>
          <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">M 15,750,000</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">+2.5% from last quarter</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow dark:bg-gray-800">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Active Loans</h3>
          <p className="text-3xl font-bold text-green-600 dark:text-green-400">1,248</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">42 new this month</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow dark:bg-gray-800">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Delinquency Rate</h3>
          <p className="text-3xl font-bold text-red-600 dark:text-red-400">2.3%</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Below industry average</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow dark:bg-gray-800">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Portfolio Composition</h3>
          <div className="h-64">
            <Doughnut 
              data={portfolioData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'right',
                    labels: {
                      color: '#6B7280'
                    }
                  }
                }
              }}
            />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow dark:bg-gray-800">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Loan Performance</h3>
          <div className="h-64">
            <Bar 
              data={performanceData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  y: {
                    beginAtZero: false,
                    min: 90,
                    max: 100,
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

export default LenderPortfolio;