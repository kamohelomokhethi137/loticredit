import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

function CreditScoreTrend() {
  const [creditScoreHistory, setCreditScoreHistory] = useState(null);

  useEffect(() => {
    // Simulate 12 months of credit data
    const generateCreditHistory = () => {
      const baseScore = 680;
      const months = 12;
      const scores = [];
      const labels = [];
      
      // Factors affecting credit score
      const paymentHistory = 0.35;  // 35% impact
      const creditUtilization = 0.30; // 30% impact
      const creditHistory = 0.15;    // 15% impact
      const creditMix = 0.10;        // 10% impact
      const newCredit = 0.10;        // 10% impact

      for (let i = 0; i < months; i++) {
        const date = new Date();
        date.setMonth(date.getMonth() - (11 - i));
        labels.push(date.toLocaleString('default', { month: 'short' }));

        // Simulate monthly score changes based on factors
        const paymentEffect = Math.random() > 0.1 ? 5 : -20; // 90% on-time payments
        const utilizationEffect = Math.random() * 15 - 5; // -5 to +10 points
        const historyEffect = i * 0.5; // Small positive effect over time
        const mixEffect = Math.random() * 10 - 3; // -3 to +7 points
        const newCreditEffect = Math.random() > 0.8 ? -8 : 2; // 20% chance of new credit

        // Calculate weighted score change
        const scoreChange = 
          paymentEffect * paymentHistory +
          utilizationEffect * creditUtilization +
          historyEffect * creditHistory +
          mixEffect * creditMix +
          newCreditEffect * newCredit;

        // Add score with some randomization but maintain trend
        const previousScore = scores[i - 1] || baseScore;
        const newScore = Math.min(850, Math.max(300, previousScore + scoreChange));
        scores.push(Math.round(newScore));
      }

      return {
        labels,
        datasets: [{
          label: 'Credit Score',
          data: scores,
          borderColor: 'rgba(59, 130, 246, 1)', // Blue
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          tension: 0.3,
          fill: true,
          pointBackgroundColor: 'rgba(59, 130, 246, 1)',
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          pointRadius: 4,
          pointHoverRadius: 6
        }]
      };
    };

    setCreditScoreHistory(generateCreditHistory());
  }, []);

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top' },
      tooltip: {
        callbacks: {
          label: (context) => `Score: ${context.raw}`,
          title: (tooltipItems) => {
            const score = tooltipItems[0].raw;
            let rating;
            if (score >= 800) rating = 'Exceptional';
            else if (score >= 740) rating = 'Very Good';
            else if (score >= 670) rating = 'Good';
            else if (score >= 580) rating = 'Fair';
            else rating = 'Poor';
            return `${tooltipItems[0].label} - ${rating}`;
          }
        },
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 12,
        titleFont: { size: 14 },
        bodyFont: { size: 13 }
      }
    },
    scales: {
      y: {
        min: 300,
        max: 850,
        ticks: {
          stepSize: 50,
          callback: (value) => {
            if (value === 850) return 'Excellent (850)';
            if (value === 300) return 'Poor (300)';
            return value;
          }
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.05)'
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    },
    interaction: {
      intersect: false,
      mode: 'index'
    },
    elements: {
      line: {
        borderWidth: 2
      }
    }
  };

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow dark:bg-gray-800 col-span-2">
      <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white mb-3">
        Credit Score Trend
      </h3>
      <div className="h-64">
        {creditScoreHistory && (
          <Line 
            data={creditScoreHistory}
            options={chartOptions}
          />
        )}
      </div>
      <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
        <p>Score Ranges:</p>
        <ul className="mt-1 space-y-1">
          <li>800-850: Exceptional</li>
          <li>740-799: Very Good</li>
          <li>670-739: Good</li>
          <li>580-669: Fair</li>
          <li>300-579: Poor</li>
        </ul>
      </div>
    </div>
  );
}

export default CreditScoreTrend;