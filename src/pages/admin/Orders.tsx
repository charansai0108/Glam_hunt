import React from 'react';

const AdminOrders = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Orders Management</h1>
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <p className="text-gray-500">No orders found</p>
        </div>
      </div>
    </div>
  );
};

export default AdminOrders;