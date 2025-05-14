import React from 'react'
import { Bar} from 'react-chartjs-2';

function CreditUtilization() {

    const creditUtilizationData = {
        labels: ['Credit Card 1', 'Credit Card 2', 'Personal Loan', 'Auto Loan'],
        datasets: [
          { label: 'Used Credit', data: [2500, 1800, 5000, 7500], backgroundColor: 'rgba(239, 68, 68, 0.8)' },
          { label: 'Available Credit', data: [5000, 5000, 10000, 15000], backgroundColor: 'rgba(16, 185, 129, 0.8)' }
        ]
      };

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow dark:bg-gray-800">
              <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white mb-3">Credit Utilization</h3>
              <div className="h-64">
                <Bar
                  data={creditUtilizationData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: { x: { stacked: true }, y: { stacked: true } }
                  }}
                />
              </div>
              <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">
                Total Utilization: 42% (Recommended: under 30%)
              </p>
    </div>
  )
}

export default CreditUtilization