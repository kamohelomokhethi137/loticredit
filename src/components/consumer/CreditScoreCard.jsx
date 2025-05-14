import React from 'react'

function CreditScoreCard() {
    const creditScore = 725;
    const creditStatus = "Good";

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow dark:bg-gray-800">
    <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white mb-2">Credit Score</h3>
    <div className="flex items-center justify-between">
      <div className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400">{creditScore}</div>
      <span className={`px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full ${
        creditStatus === "Excellent" ? "bg-green-100 text-green-800" :
        creditStatus === "Good" ? "bg-blue-100 text-blue-800" :
        creditStatus === "Fair" ? "bg-yellow-100 text-yellow-800" :
        "bg-red-100 text-red-800"
      }`}>
        {creditStatus}
      </span>
    </div>
    <p className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
      Updated: {new Date().toLocaleDateString()}
    </p>
  </div>
  )
}

export default CreditScoreCard