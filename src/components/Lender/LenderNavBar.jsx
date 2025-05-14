import React, { useState } from 'react';

const LenderNavBar = ({ toggleSidebar, activeTab, lenderProfile }) => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 sm:ml-64">
      <div className="flex items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex items-center">
          <button
            onClick={toggleSidebar}
            className="p-2 text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700"
            aria-label="Toggle sidebar"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zm0 6h14a1 1 0 010 2H3a1 1 0 010-2zm0 6h14a1 1 0 010 2H3a1 1 0 010-2z" clipRule="evenodd"></path>
            </svg>
          </button>
          <span className="ml-2 text-lg font-semibold text-gray-900 dark:text-white">{lenderProfile.institutionType} Dashboard</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="hidden sm:block">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Portfolio: <span className="font-bold">{lenderProfile.totalPortfolio}</span>
            </span>
          </div>
          
          <div className="relative">
            <button
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              aria-label="User menu"
            >
              <span className="sr-only">Open user menu</span>
              <img className="w-8 h-8 rounded-full" src={lenderProfile.avatar} alt="User" />
            </button>

            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white divide-y divide-gray-100 rounded-sm shadow dark:bg-gray-700 dark:divide-gray-600">
                <div className="px-4 py-3">
                  <p className="text-sm text-gray-900 dark:text-white">{lenderProfile.name}</p>
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300">
                    {lenderProfile.email}
                  </p>
                </div>
                <ul className="py-1">
                  <li>
                    <button
                      onClick={() => {
                        setActiveTab('settings');
                        setIsUserMenuOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600"
                    >
                      Settings
                    </button>
                  </li>
                  <li>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600"
                    >
                      Sign out
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LenderNavBar;