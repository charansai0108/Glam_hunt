import React from 'react';

const AccountPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Account</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold mb-2">Account Details</h2>
            <p className="text-gray-600">Manage your personal information and preferences</p>
          </div>
          <div className="border-t pt-4">
            <h2 className="text-xl font-semibold mb-2">Order History</h2>
            <p className="text-gray-600">View and track your orders</p>
          </div>
          <div className="border-t pt-4">
            <h2 className="text-xl font-semibold mb-2">Settings</h2>
            <p className="text-gray-600">Update your account settings and preferences</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;