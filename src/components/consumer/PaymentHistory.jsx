import React from 'react'
import {Pie } from 'react-chartjs-2';

function PaymentHistory() {

    const paymentHistoryData = {
        labels: ['On Time', '30+ Days Late', '60+ Days Late', '90+ Days Late'],
        datasets: [{
          data: [48, 2, 0, 0],
          backgroundColor: [
            'rgba(16, 185, 129, 0.8)',
            'rgba(234, 179, 8, 0.8)',
            'rgba(249, 115, 22, 0.8)',
            'rgba(239, 68, 68, 0.8)'
          ],
          borderWidth: 1
        }]
      };


  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow dark:bg-gray-800">
    <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white mb-3">Payment History</h3>
    <div className="h-64">
      <Pie
        data={paymentHistoryData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            tooltip: { callbacks: { label: (context) => `${context.label}: ${context.raw} payments` } }
          }
        }}
      />
    </div>
    <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">
      96% on-time payments
    </p>
  </div>
  )
}

export default PaymentHistory