import React from 'react';

const SettingsDashboard = () => {
  const handleSave = () => {
    const settingsData = {
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      notifications: {
        creditUpdates: document.getElementById('creditUpdates').checked,
        creditInquiries: document.getElementById('creditInquiries').checked,
        promotions: document.getElementById('promotions').checked,
      },
    };
    saveSettings(settingsData);
  };

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow dark:bg-gray-800">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Account Settings</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">First Name</label>
              <input id="firstName" type="text" className="w-full border rounded-lg p-2 text-sm dark:bg-gray-700 dark:border-gray-600" defaultValue="name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Last Name</label>
              <input id="lastName" type="text" className="w-full border rounded-lg p-2 text-sm dark:bg-gray-700 dark:border-gray-600" defaultValue="lastname" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
              <input id="email" type="email" className="w-full border rounded-lg p-2 text-sm dark:bg-gray-700 dark:border-gray-600" defaultValue="account@gmail.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone</label>
              <input id="phone" type="tel" className="w-full border rounded-lg p-2 text-sm dark:bg-gray-700 dark:border-gray-600" defaultValue="+266 58128118" />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Notification Preferences</h3>
          <div className="space-y-2">
            <label className="inline-flex items-center">
              <input id="creditUpdates" type="checkbox" className="rounded text-blue-600" defaultChecked />
              <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">Credit score updates</span>
            </label><br />
            <label className="inline-flex items-center">
              <input id="creditInquiries" type="checkbox" className="rounded text-blue-600" defaultChecked />
              <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">New credit inquiries</span>
            </label><br />
            <label className="inline-flex items-center">
              <input id="promotions" type="checkbox" className="rounded text-blue-600" />
              <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">Promotional offers</span>
            </label>
          </div>
        </div>

        <div className="flex justify-end">
          <button onClick={handleSave} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsDashboard;
