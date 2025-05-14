import React from 'react'

function RiskIndicators() {
    const riskIndicators = [
        { name: 'High Credit Utilization', level: 'Medium', description: 'Using more than 30% of available credit' },
        { name: 'Recent Hard Inquiries', level: 'Low', description: '2 inquiries in last 12 months' },
        { name: 'Short Credit History', level: 'High', description: 'Oldest account is 2 years' },
        { name: 'Credit Mix', level: 'Medium', description: 'Only credit cards, no installment loans' }
      ];
    

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow dark:bg-gray-800">
          <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white mb-3">Risk Indicators</h3>
          <div className="space-y-3">
            {riskIndicators.map((risk, index) => (
              <div key={index} className="p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{risk.name}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    risk.level === 'High' ? 'bg-red-100 text-red-800' :
                    risk.level === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {risk.level}
                  </span>
                </div>
                <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">{risk.description}</p>
              </div>
            ))}
          </div>
 </div>
  )
}

export default RiskIndicators