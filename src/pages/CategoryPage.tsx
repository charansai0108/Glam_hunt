import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductsByCategory } from '../data/products';
import ProductGrid from '../components/ui/ProductGrid';
import { Filter, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { Product } from '../types';

const CategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [sortOption, setSortOption] = useState<string>('');
  const [isPriceFilterOpen, setIsPriceFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [showFilters, setShowFilters] = useState(false);
  
  useEffect(() => {
    if (categoryId) {
      const categoryProducts = getProductsByCategory(categoryId);
      setProducts(categoryProducts);
    }
  }, [categoryId]);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSortOption(value);
    
    let sortedProducts = [...products];
    
    switch (value) {
      case 'price-low-high':
        sortedProducts.sort((a, b) => {
          const aPrice = a.salePrice || a.price;
          const bPrice = b.salePrice || b.price;
          return aPrice - bPrice;
        });
        break;
      case 'price-high-low':
        sortedProducts.sort((a, b) => {
          const aPrice = a.salePrice || a.price;
          const bPrice = b.salePrice || b.price;
          return bPrice - aPrice;
        });
        break;
      case 'rating':
        sortedProducts.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      default:
        // No sorting or default sorting logic
        break;
    }
    
    setProducts(sortedProducts);
  };

  const formatCategoryName = (category: string): string => {
    // Convert kebab-case to Title Case with spaces
    return category
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const handlePriceRangeChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = parseInt(e.target.value);
    const newRange = [...priceRange] as [number, number];
    newRange[index] = value;
    setPriceRange(newRange);
  };

  const applyPriceFilter = () => {
    if (categoryId) {
      let filteredProducts = getProductsByCategory(categoryId);
      
      // Apply price range filter
      filteredProducts = filteredProducts.filter(product => {
        const price = product.salePrice || product.price;
        return price >= priceRange[0] && price <= priceRange[1];
      });
      
      setProducts(filteredProducts);
      setIsPriceFilterOpen(false);
    }
  };

  const resetFilters = () => {
    if (categoryId) {
      setProducts(getProductsByCategory(categoryId));
      setPriceRange([0, 2000]);
      setSortOption('');
    }
  };

  return (
    <div className="container-custom py-10 md:py-16">
      <h1 className="text-3xl font-bold mb-8">{formatCategoryName(categoryId || '')}</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters - Mobile Toggle */}
        <div className="lg:hidden mb-4">
          <button 
            onClick={toggleFilters}
            className="w-full py-2 px-4 border border-gray-300 rounded-md flex items-center justify-center gap-2 bg-white"
          >
            <Filter className="h-4 w-4" />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>
        
        {/* Filters Sidebar */}
        <div 
          className={`lg:w-1/4 ${showFilters ? 'block' : 'hidden'} lg:block`}
        >
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-medium text-lg">Filters</h2>
              <button 
                onClick={resetFilters}
                className="text-sm text-primary-600 hover:text-primary-700"
              >
                Reset All
              </button>
            </div>
            
            {/* Price Filter */}
            <div className="mb-6">
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setIsPriceFilterOpen(!isPriceFilterOpen)}
              >
                <h3 className="font-medium">Price Range</h3>
                <span>{isPriceFilterOpen ? '−' : '+'}</span>
              </div>
              
              {isPriceFilterOpen && (
                <div className="mt-3 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">₹{priceRange[0]}</span>
                    <span className="text-sm text-gray-600">₹{priceRange[1]}</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-gray-500">Min</label>
                      <input
                        type="number"
                        min="0"
                        max={priceRange[1]}
                        value={priceRange[0]}
                        onChange={(e) => handlePriceRangeChange(e, 0)}
                        className="w-full p-2 border border-gray-300 rounded text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-500">Max</label>
                      <input
                        type="number"
                        min={priceRange[0]}
                        max="10000"
                        value={priceRange[1]}
                        onChange={(e) => handlePriceRangeChange(e, 1)}
                        className="w-full p-2 border border-gray-300 rounded text-sm"
                      />
                    </div>
                  </div>
                  
                  <button 
                    onClick={applyPriceFilter}
                    className="w-full py-2 bg-primary-600 text-white rounded-md text-sm hover:bg-primary-700 transition-colors"
                  >
                    Apply
                  </button>
                </div>
              )}
            </div>
            
            {/* Other filter options would go here */}
          </div>
        </div>
        
        {/* Products Section */}
        <div className="lg:w-3/4">
          {/* Sort Controls */}
          <div className="bg-white rounded-lg mb-6 p-4 flex items-center justify-between">
            <div className="flex items-center">
              <SlidersHorizontal className="h-5 w-5 text-gray-500 mr-2" />
              <span className="text-sm text-gray-700">{products.length} products</span>
            </div>
            
            <div className="flex items-center">
              <ArrowUpDown className="h-5 w-5 text-gray-500 mr-2" />
              <select
                value={sortOption}
                onChange={handleSortChange}
                className="bg-transparent text-sm text-gray-700 focus:outline-none cursor-pointer"
              >
                <option value="">Sort by</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
          
          {products.length > 0 ? (
            <ProductGrid products={products} />
          ) : (
            <div className="bg-white rounded-lg p-10 text-center">
              <h3 className="text-xl font-medium mb-2">No products found</h3>
              <p className="text-gray-600">
                We couldn't find any products matching your criteria. Try adjusting your filters.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;