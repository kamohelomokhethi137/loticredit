import React from 'react'
import { Line} from 'react-chartjs-2';


function CreditScoreTrend() {

    const creditScoreHistory = {
        labels: Array.from({length: 12}, (_, i) => {
          const date = new Date();
          date.setMonth(date.getMonth() - (11 - i));
          return date.toLocaleString('default', {month: 'short'});
        }),
        datasets: [{
          label: 'Credit Score',
          data: [680, 685, 690, 695, 700, 705, 710, 715, 720, 725, 725, 725],
          borderColor: 'rgba(59, 130, 246, 1)',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          tension: 0.3,
          fill: true
        }]
      };


  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow dark:bg-gray-800 col-span-2">
              <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white mb-3">Credit Score Trend</h3>
              <div className="h-64">
                <Line 
                  data={creditScoreHistory}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: { position: 'top' },
                      tooltip: { callbacks: { label: (context) => `Score: ${context.raw}` } }
                    },
                    scales: {
                      y: { min: 600, max: 800, ticks: { stepSize: 50 } }
                    }
                  }}
                />
              </div>
    </div>
  )
}

export default CreditScoreTrend