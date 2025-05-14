import React from 'react';
import { X, Menu } from 'lucide-react';

function Sidebar({ isSidebarOpen, toggleSidebar, activeTab, setActiveTab, userProfile }) {
  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="sm:hidden fixed top-4 left-4 z-50 p-2 rounded-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        aria-label="Toggle sidebar"
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform duration-300 ease-in-out bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-4 py-6 overflow-y-auto flex flex-col">
          {/* Main navigation */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 pl-2">Credit Dashboard</h2>
            <nav className="flex flex-col space-y-2">
              <SidebarButton
                label="Credit Overview"
                isActive={activeTab === 'credit'}
                onClick={() => setActiveTab('credit')}
              />
              <SidebarButton
                label="Loan History"
                isActive={activeTab === 'loans'}
                onClick={() => setActiveTab('loans')}
              />
              <SidebarButton
                label="Settings"
                isActive={activeTab === 'settings'}
                onClick={() => setActiveTab('settings')}
              />
            </nav>
          </div>

          {/* User Profile Section */}
          <div className="flex items-center mt-auto p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer">
            <img
              src={userProfile.avatar}
              alt="User Avatar"
              className="w-10 h-10 rounded-full border-2 border-blue-500 mr-3"
            />
            <div>
              <h3 className="text-sm font-semibold text-gray-800 dark:text-white">{userProfile.name}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">{userProfile.email}</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

function SidebarButton({ label, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
        isActive
          ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-100'
          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
      }`}
    >
      {label}
    </button>
  );
}

export default Sidebar;