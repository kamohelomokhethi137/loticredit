import React from 'react';
import { Scatter } from 'react-chartjs-2';

const RiskAssessment = () => {
  const riskData = {
    datasets: [
      {
        label: 'Low Risk',
        data: [
          { x: 720, y: 25 },
          { x: 750, y: 22 },
          { x: 780, y: 18 },
          { x: 690, y: 28 },
          { x: 810, y: 15 }
        ],
        backgroundColor: '#10B981',
        borderColor: '#059669',
        borderWidth: 1
      },
      {
        label: 'Medium Risk',
        data: [
          { x: 650, y: 35 },
          { x: 680, y: 32 },
          { x: 620, y: 38 },
          { x: 670, y: 30 },
          { x: 630, y: 40 }
        ],
        backgroundColor: '#F59E0B',
        borderColor: '#D97706',
        borderWidth: 1
      },
      {
        label: 'High Risk',
        data: [
          { x: 580, y: 45 },
          { x: 550, y: 50 },
          { x: 600, y: 42 },
          { x: 520, y: 55 },
          { x: 590, y: 48 }
        ],
        backgroundColor: '#EF4444',
        borderColor: '#DC2626',
        borderWidth: 1
      }
    ]
  };

  const riskFactors = [
    { name: 'Credit Score Below 600', risk: 'High', impact: '5.8x more likely to default' },
    { name: 'DTI Ratio > 40%', risk: 'High', impact: '4.2x more likely to default' },
    { name: 'Recent Credit Inquiries > 3', risk: 'Medium', impact: '2.1x more likely to default' },
    { name: 'Credit Age < 2 Years', risk: 'Medium', impact: '1.8x more likely to default' }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow dark:bg-gray-800">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Risk Distribution</h3>
        <div className="h-96">
          <Scatter 
            data={riskData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                x: {
                  title: {
                    display: true,
                    text: 'Credit Score',
                    color: '#6B7280'
                  },
                  min: 500,
                  max: 850,
                  ticks: {
                    color: '#6B7280'
                  }
                },
                y: {
                  title: {
                    display: true,
                    text: 'Debt-to-Income Ratio (%)',
                    color: '#6B7280'
                  },
                  min: 15,
                  max: 60,
                  ticks: {
                    color: '#6B7280'
                  }
                }
              },
              plugins: {
                tooltip: {
                  callbacks: {
                    label: (context) => {
                      return `${context.dataset.label}: Score ${context.parsed.x}, DTI ${context.parsed.y}%`;
                    }
                  }
                }
              }
            }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow dark:bg-gray-800">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Risk Factors</h3>
          <div className="space-y-4">
            {riskFactors.map((factor, index) => (
              <div key={index} className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900 dark:text-white">{factor.name}</span>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    factor.risk === 'High' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                    'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                  }`}>
                    {factor.risk} Risk
                  </span>
                </div>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{factor.impact}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow dark:bg-gray-800">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Risk Mitigation Strategies</h3>
          <ul className="space-y-3 list-disc pl-5 text-gray-700 dark:text-gray-300">
            <li>Require higher down payments for borrowers with DTI  35%</li>
            <li>Implement stricter documentation requirements for credit scores below 650</li>
            <li>Offer credit counseling for medium-risk applicants</li>
            <li>Adjust interest rates based on risk tier</li>
            <li>Implement automated fraud detection systems</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RiskAssessment;