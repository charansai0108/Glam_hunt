import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Heart, ShoppingBag, Truck, ShieldCheck, RefreshCw } from 'lucide-react';
import { getProductById } from '../data/products';
import { useCartStore } from '../stores/cartStore';
import { useWishlistStore } from '../stores/wishlistStore';
import toast from 'react-hot-toast';
import { cn } from '../utils/cn';

const ProductPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { addItem } = useCartStore();
  const { addItem: addToWishlist, isInWishlist, removeItem: removeFromWishlist } = useWishlistStore();
  
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<{ name: string; value: string } | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  
  const product = productId ? getProductById(productId) : null;
  
  if (!product) {
    return (
      <div className="container-custom py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-6">Sorry, the product you are looking for does not exist.</p>
        <button 
          onClick={() => navigate(-1)} 
          className="btn-primary"
        >
          Go Back
        </button>
      </div>
    );
  }
  
  const isWishlisted = isInWishlist(product.id);
  
  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Please select a size');
      return;
    }
    
    if (!selectedColor && product.colors.length > 0) {
      toast.error('Please select a color');
      return;
    }
    
    addItem({
      id: '',
      productId: product.id,
      name: product.name,
      price: product.salePrice || product.price,
      image: product.images[0],
      size: selectedSize,
      color: selectedColor || product.colors[0],
      quantity
    });
    
    toast.success(`${product.name} added to cart`);
  };
  
  const handleWishlist = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id);
      toast.success(`${product.name} removed from wishlist`);
    } else {
      addToWishlist(product);
      toast.success(`${product.name} added to wishlist`);
    }
  };
  
  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="container-custom py-10 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg">
            <img 
              src={product.images[activeImage]} 
              alt={product.name} 
              className="w-full h-full object-cover object-center"
            />
          </div>
          
          {product.images.length > 1 && (
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={cn(
                    "w-20 h-20 overflow-hidden rounded border-2",
                    activeImage === index ? "border-primary-600" : "border-transparent"
                  )}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} - View ${index + 1}`} 
                    className="w-full h-full object-cover object-center"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
          
          {/* Price */}
          <div className="flex items-center mb-6">
            {product.salePrice ? (
              <>
                <span className="text-2xl font-bold text-primary-600">₹{product.salePrice}</span>
                <span className="text-lg text-gray-400 line-through ml-2">₹{product.price}</span>
                <span className="ml-2 bg-accent-100 text-accent-800 text-xs px-2 py-1 rounded font-medium">
                  {Math.round((1 - product.salePrice / product.price) * 100)}% OFF
                </span>
              </>
            ) : (
              <span className="text-2xl font-bold text-gray-900">₹{product.price}</span>
            )}
          </div>
          
          {/* Rating */}
          {product.rating && (
            <div className="flex items-center mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < Math.floor(product.rating!) ? "text-accent-500" : "text-gray-300"}>
                    ★
                  </span>
                ))}
              </div>
              <span className="ml-2 text-gray-700">{product.rating} ({product.reviews} reviews)</span>
            </div>
          )}
          
          {/* Description */}
          <p className="text-gray-700 mb-6">{product.description}</p>
          
          {/* Size Selection */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Size</h3>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={cn(
                    "px-4 py-2 rounded border text-sm font-medium transition-colors",
                    selectedSize === size 
                      ? "border-primary-600 bg-primary-50 text-primary-700" 
                      : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                  )}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          
          {/* Color Selection */}
          {product.colors.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Color</h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setSelectedColor(color)}
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center border-2",
                      selectedColor?.value === color.value 
                        ? "border-primary-600" 
                        : "border-transparent"
                    )}
                    title={color.name}
                  >
                    <span 
                      className="w-8 h-8 rounded-full" 
                      style={{ backgroundColor: color.value }}
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {/* Quantity */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Quantity</h3>
            <div className="flex items-center w-32">
              <button 
                onClick={decrementQuantity}
                className="w-10 h-10 rounded-l border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100"
              >
                -
              </button>
              <div className="h-10 w-12 flex items-center justify-center border-t border-b border-gray-300">
                {quantity}
              </div>
              <button 
                onClick={incrementQuantity}
                className="w-10 h-10 rounded-r border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button 
              onClick={handleAddToCart}
              className="btn-primary flex-1 flex items-center justify-center"
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              Add to Cart
            </button>
            <button 
              onClick={handleWishlist}
              className={cn(
                "btn flex-1 flex items-center justify-center",
                isWishlisted 
                  ? "bg-red-50 text-red-600 border border-red-200 hover:bg-red-100" 
                  : "btn-outline"
              )}
            >
              <Heart className={cn("mr-2 h-5 w-5", isWishlisted && "fill-red-500")} />
              {isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}
            </button>
          </div>
          
          {/* Product Features */}
          <div className="border-t border-gray-200 pt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center">
                <Truck className="h-5 w-5 text-primary-600 mr-2" />
                <span className="text-sm text-gray-700">Free shipping over ₹999</span>
              </div>
              <div className="flex items-center">
                <ShieldCheck className="h-5 w-5 text-primary-600 mr-2" />
                <span className="text-sm text-gray-700">High quality guarantee</span>
              </div>
              <div className="flex items-center">
                <RefreshCw className="h-5 w-5 text-primary-600 mr-2" />
                <span className="text-sm text-gray-700">30 days easy returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;