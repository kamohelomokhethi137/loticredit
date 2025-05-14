import React, { useState } from 'react';
import { Bell } from 'lucide-react';

function NavBar({ toggleSidebar, activeTab }) {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center">
        <button
          onClick={toggleSidebar}
          className="md:hidden text-gray-700 dark:text-gray-200 focus:outline-none mr-2"
          aria-label="Toggle sidebar"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">
          {activeTab === 'credit' && 'Credit Dashboard'}
          {activeTab === 'loans' && 'Loans Dashboard'}
          {activeTab === 'loanRequest' && 'Request Loan'}
          {activeTab === 'settings' && 'Account Settings'}
        </h1>
      </div>

      {/* Notification Icon */}
      <div className="relative">
        <button 
          onClick={() => setShowNotifications(!showNotifications)}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors focus:outline-none"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5 text-gray-700 dark:text-gray-300" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
        </button>
        
        {showNotifications && (
          <div className="absolute right-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="p-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700">
              <h3 className="font-medium text-gray-800 dark:text-white">Notifications</h3>
            </div>
            <div className="max-h-60 overflow-y-auto">
              <div className="p-3 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer border-b border-gray-100 dark:border-gray-600">
                <p className="text-sm text-gray-700 dark:text-gray-300">Your credit score has been updated</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">2 hours ago</p>
              </div>
              <div className="p-3 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer border-b border-gray-100 dark:border-gray-600">
                <p className="text-sm text-gray-700 dark:text-gray-300">Loan application approved</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">1 day ago</p>
              </div>
              <div className="p-3 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <p className="text-sm text-gray-700 dark:text-gray-300">New credit offers available</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">3 days ago</p>
              </div>
            </div>
            <div className="p-2 bg-gray-50 dark:bg-gray-700 text-center">
              <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                View all notifications
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;