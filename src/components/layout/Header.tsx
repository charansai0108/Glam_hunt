import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Heart, User, Menu, X } from 'lucide-react';
import { useCartStore } from '../../stores/cartStore';
import { useAuthStore } from '../../stores/authStore';

// Define the navigation items
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'T-Shirts', href: '/category/t-shirts' },
  { name: 'Hoodies', href: '/category/hoodies' },
  { name: 'Accessories', href: '/category/accessories' },
  { name: 'New Arrivals', href: '/category/new-arrivals' },
];

interface HeaderProps {
  toggleMobileMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleMobileMenu }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();
  const { items } = useCartStore();
  const { isAuthenticated } = useAuthStore();
  
  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate total items in cart
  const cartItemsCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      <nav className="container-custom" aria-label="Global">
        <div className="flex items-center justify-between py-4 md:py-6">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">PrintPerfect</span>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
                  <path d="M21 7v6h-6m-5-6v12l-5-5h1a5 5 0 0 0 5-5m-5 9h11"/>
                </svg>
                <span className="ml-2 text-xl font-bold text-gray-900">PrintPerfect</span>
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-primary-600'
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right section */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6">
            <Link
              to="/search"
              className="text-sm font-medium text-gray-700 hover:text-primary-600"
            >
              <Search className="h-5 w-5" />
            </Link>
            <Link
              to="/wishlist"
              className="text-sm font-medium text-gray-700 hover:text-primary-600"
            >
              <Heart className="h-5 w-5" />
            </Link>
            <Link
              to="/cart"
              className="relative text-sm font-medium text-gray-700 hover:text-primary-600"
            >
              <ShoppingBag className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary-600 text-xs text-white">
                  {cartItemsCount}
                </span>
              )}
            </Link>
            <Link
              to={isAuthenticated ? '/account' : '/login'}
              className="text-sm font-medium text-gray-700 hover:text-primary-600"
            >
              <User className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;