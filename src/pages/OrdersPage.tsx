import React from 'react';
import { ShoppingBag } from 'lucide-react';

const OrdersPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <ShoppingBag className="w-6 h-6" />
          <h1 className="text-2xl font-semibold">Your Orders</h1>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-center py-8">
            <ShoppingBag className="w-12 h-12 mx-auto text-gray-400 mb-4" />
            <p className="text-gray-600">You haven't placed any orders yet.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;