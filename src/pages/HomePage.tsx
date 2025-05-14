import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductGrid from '../components/ui/ProductGrid';
import { getFeaturedProducts, getNewArrivals } from '../data/products';

const HomePage: React.FC = () => {
  const featuredProducts = getFeaturedProducts();
  const newArrivals = getNewArrivals();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/6311166/pexels-photo-6311166.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Hero background" 
            className="w-full h-full object-cover object-center opacity-40"
          />
        </div>
        <div className="container-custom relative z-10 py-20 md:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Express Yourself With Custom Clothing
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 animate-slide-up">
              High-quality print-on-demand apparel that makes a statement. Designed for comfort, style, and self-expression.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/category/t-shirts" className="btn-primary animate-slide-up">
                Shop Collection
              </Link>
              <Link to="/category/new-arrivals" className="btn-outline border-white text-white hover:bg-white/10 animate-slide-up">
                New Arrivals
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-10 text-center">Shop By Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/category/t-shirts" className="relative overflow-hidden rounded-lg aspect-square group">
              <img 
                src="https://images.pexels.com/photos/6311652/pexels-photo-6311652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="T-Shirts" 
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-1">T-Shirts</h3>
                  <div className="flex items-center text-white/90 font-medium text-sm group-hover:text-primary-300 transition-colors">
                    <span>Shop Now</span>
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
            
            <Link to="/category/hoodies" className="relative overflow-hidden rounded-lg aspect-square group">
              <img 
                src="https://images.pexels.com/photos/6311387/pexels-photo-6311387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Hoodies" 
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-1">Hoodies</h3>
                  <div className="flex items-center text-white/90 font-medium text-sm group-hover:text-primary-300 transition-colors">
                    <span>Shop Now</span>
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
            
            <Link to="/category/accessories" className="relative overflow-hidden rounded-lg aspect-square group">
              <img 
                src="https://images.pexels.com/photos/6311586/pexels-photo-6311586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Accessories" 
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-1">Accessories</h3>
                  <div className="flex items-center text-white/90 font-medium text-sm group-hover:text-primary-300 transition-colors">
                    <span>Shop Now</span>
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Link to="/category/featured" className="text-primary-600 font-medium hover:text-primary-700 flex items-center">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <ProductGrid products={featuredProducts} />
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold">New Arrivals</h2>
            <Link to="/category/new-arrivals" className="text-primary-600 font-medium hover:text-primary-700 flex items-center">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <ProductGrid products={newArrivals} />
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Express Your Style?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of customers who have discovered their perfect print-on-demand clothing with PrintPerfect.
          </p>
          <Link to="/category/t-shirts" className="btn bg-white text-primary-700 hover:bg-gray-100">
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;