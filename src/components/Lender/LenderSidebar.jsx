import React from 'react';

const LenderSidebar = ({ isSidebarOpen, toggleSidebar, activeTab, setActiveTab, lenderProfile }) => {
  const tabs = [
    { id: 'portfolio', label: 'Portfolio', icon: '📊' },
    { id: 'applications', label: 'Applications', icon: '📝' },
    { id: 'analysis', label: 'Borrower Analysis', icon: '🔍' },
    { id: 'risk', label: 'Risk Assessment', icon: '⚠️' },
    { id: 'reports', label: 'Reports', icon: '📈' },
    { id: 'settings', label: 'Settings', icon: '⚙️' }
  ];

  return (
    <aside
      className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 transform ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } sm:translate-x-0`}
    >
      <div className="h-full px-3 py-4 overflow-y-auto">
        <div className="flex items-center pl-2.5 mb-5">
          <span className="self-center text-xl font-semibold whitespace-nowrap text-gray-900 dark:text-white">
            {lenderProfile.institutionType}
          </span>
        </div>
        
        <div className="p-3 mb-4 bg-gray-100 rounded-lg dark:bg-gray-700">
          <div className="flex items-center">
            <img className="w-10 h-10 rounded-full mr-3" src={lenderProfile.avatar} alt="Profile" />
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">{lenderProfile.name}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Lending Officer</p>
            </div>
          </div>
        </div>
        
        <ul className="space-y-2 font-medium">
          {tabs.map(tab => (
            <li key={tab.id}>
              <button
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center w-full p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white ${
                  activeTab === tab.id ? 'bg-gray-200 dark:bg-gray-700' : ''
                }`}
              >
                <span className="mr-3">{tab.icon}</span>
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default LenderSidebar;