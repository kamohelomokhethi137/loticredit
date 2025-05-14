import React, { useState } from 'react';

const LenderSettings = ({ saveSettings }) => {
  const [settings, setSettings] = useState({
    institutionName: 'Acme Lending',
    contactEmail: 'lending@acme.com',
    minCreditScore: 650,
    maxDebtToIncome: 43,
    autoApprove: false,
    notificationTypes: {
      newApplications: true,
      delinquentPayments: true,
      systemAlerts: true
    }
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleNotificationChange = (e) => {
    const { name, checked } = e.target;
    setSettings(prev => ({
      ...prev,
      notificationTypes: {
        ...prev.notificationTypes,
        [name]: checked
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveSettings(settings);
  };

  return (
    <div className="bg-white rounded-lg shadow dark:bg-gray-800">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Lender Settings</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Configure your lending parameters and preferences</p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Institution Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Institution Name</label>
              <input
                type="text"
                name="institutionName"
                value={settings.institutionName}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 text-sm dark:bg-gray-700 dark:border-gray-600"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Contact Email</label>
              <input
                type="email"
                name="contactEmail"
                value={settings.contactEmail}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 text-sm dark:bg-gray-700 dark:border-gray-600"
                required
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Lending Criteria</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Minimum Credit Score</label>
              <input
                type="number"
                name="minCreditScore"
                value={settings.minCreditScore}
                onChange={handleChange}
                min="300"
                max="850"
                className="w-full border rounded-lg p-2 text-sm dark:bg-gray-700 dark:border-gray-600"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Max Debt-to-Income Ratio (%)</label>
              <input
                type="number"
                name="maxDebtToIncome"
                value={settings.maxDebtToIncome}
                onChange={handleChange}
                min="0"
                max="100"
                step="0.1"
                className="w-full border rounded-lg p-2 text-sm dark:bg-gray-700 dark:border-gray-600"
                required
              />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <input
              type="checkbox"
              id="autoApprove"
              name="autoApprove"
              checked={settings.autoApprove}
              onChange={handleChange}
              className="rounded text-blue-600"
            />
            <label htmlFor="autoApprove" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              Auto-approve applications meeting all criteria
            </label>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Notifications</h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="newApplications"
                name="newApplications"
                checked={settings.notificationTypes.newApplications}
                onChange={handleNotificationChange}
                className="rounded text-blue-600"
              />
              <label htmlFor="newApplications" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                New loan applications
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="delinquentPayments"
                name="delinquentPayments"
                checked={settings.notificationTypes.delinquentPayments}
                onChange={handleNotificationChange}
                className="rounded text-blue-600"
              />
              <label htmlFor="delinquentPayments" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                Delinquent payments
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="systemAlerts"
                name="systemAlerts"
                checked={settings.notificationTypes.systemAlerts}
                onChange={handleNotificationChange}
                className="rounded text-blue-600"
              />
              <label htmlFor="systemAlerts" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                System alerts
              </label>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Save Settings
          </button>
        </div>
      </form>
    </div>
  );
};

export default LenderSettings;