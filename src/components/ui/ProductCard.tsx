import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';
import { useCartStore } from '../../stores/cartStore';
import { useWishlistStore } from '../../stores/wishlistStore';
import { Product } from '../../types';
import { cn } from '../../utils/cn';
import toast from 'react-hot-toast';

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className }) => {
  const { addItem } = useCartStore();
  const { addItem: addToWishlist, isInWishlist, removeItem: removeFromWishlist } = useWishlistStore();
  
  const isWishlisted = isInWishlist(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Add the first size and color by default
    addItem({
      id: '',
      productId: product.id,
      name: product.name,
      price: product.salePrice || product.price,
      image: product.images[0],
      size: product.sizes[0],
      color: product.colors[0],
      quantity: 1
    });
    
    toast.success(`${product.name} added to cart`);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isWishlisted) {
      removeFromWishlist(product.id);
      toast.success(`${product.name} removed from wishlist`);
    } else {
      addToWishlist(product);
      toast.success(`${product.name} added to wishlist`);
    }
  };

  return (
    <Link 
      to={`/product/${product.id}`}
      className={cn(
        'group card hover:shadow-lg',
        className
      )}
    >
      <div className="relative overflow-hidden aspect-square">
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Quick action buttons */}
        <div className="absolute bottom-4 right-4 flex space-x-2">
          <button
            onClick={handleWishlist}
            className="bg-white rounded-full p-2 shadow-md transition-all duration-300 hover:bg-primary-50"
          >
            <Heart 
              className={cn(
                "h-5 w-5 transition-colors", 
                isWishlisted ? "fill-red-500 text-red-500" : "text-gray-700"
              )} 
            />
          </button>
          
          <button
            onClick={handleAddToCart}
            className="bg-white rounded-full p-2 shadow-md transition-all duration-300 hover:bg-primary-50"
          >
            <ShoppingCart className="h-5 w-5 text-gray-700" />
          </button>
        </div>
        
        {/* Product badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.newArrival && (
            <span className="bg-primary-600 text-white text-xs px-3 py-1 rounded-full font-medium">
              New
            </span>
          )}
          {product.salePrice && (
            <span className="bg-accent-500 text-white text-xs px-3 py-1 rounded-full font-medium">
              Sale
            </span>
          )}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-medium text-gray-900 mb-1">{product.name}</h3>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {product.salePrice ? (
              <>
                <span className="text-primary-600 font-medium">₹{product.salePrice}</span>
                <span className="text-gray-400 line-through ml-2">₹{product.price}</span>
              </>
            ) : (
              <span className="text-gray-900 font-medium">₹{product.price}</span>
            )}
          </div>
          
          {product.rating && (
            <div className="flex items-center text-sm">
              <span className="text-accent-500">★</span>
              <span className="ml-1 text-gray-700">{product.rating}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;