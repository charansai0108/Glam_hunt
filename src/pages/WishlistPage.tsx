import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useWishlistStore } from '../stores/wishlistStore';
import ProductGrid from '../components/ui/ProductGrid';
import { Heart } from 'lucide-react';

export default function WishlistPage() {
  const navigate = useNavigate();
  const wishlist = useWishlistStore(state => state.items);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-8">
        <Heart className="w-6 h-6 text-rose-500" />
        <h1 className="text-3xl font-bold">My Wishlist</h1>
      </div>

      {wishlist.length === 0 ? (
        <div className="text-center py-12">
          <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-600 mb-4">Your wishlist is empty</h2>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <ProductGrid products={wishlist} />
      )}
    </div>
  );
}