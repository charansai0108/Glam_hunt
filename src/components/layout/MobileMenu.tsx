import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import { X, Search, ShoppingBag, Heart, User } from 'lucide-react';
import { useCartStore } from '../../stores/cartStore';
import { useAuthStore } from '../../stores/authStore';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'T-Shirts', href: '/category/t-shirts' },
  { name: 'Hoodies', href: '/category/hoodies' },
  { name: 'Accessories', href: '/category/accessories' },
  { name: 'New Arrivals', href: '/category/new-arrivals' },
];

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { items } = useCartStore();
  const { isAuthenticated } = useAuthStore();
  
  // Calculate total items in cart
  const cartItemsCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Menu
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={onClose}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <X className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul className="-my-6 divide-y divide-gray-200">
                            {navigation.map((item) => (
                              <li key={item.name} className="py-3">
                                <Link
                                  to={item.href}
                                  className="text-base font-medium text-gray-900 hover:text-primary-600"
                                  onClick={onClose}
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-6 border-t border-gray-200 pt-6">
                        <div className="flex flex-col space-y-6">
                          <Link
                            to="/search"
                            className="flex items-center text-base font-medium text-gray-900 hover:text-primary-600"
                            onClick={onClose}
                          >
                            <Search className="h-5 w-5 mr-2" />
                            Search
                          </Link>
                          <Link
                            to="/wishlist"
                            className="flex items-center text-base font-medium text-gray-900 hover:text-primary-600"
                            onClick={onClose}
                          >
                            <Heart className="h-5 w-5 mr-2" />
                            Wishlist
                          </Link>
                          <Link
                            to="/cart"
                            className="flex items-center text-base font-medium text-gray-900 hover:text-primary-600"
                            onClick={onClose}
                          >
                            <ShoppingBag className="h-5 w-5 mr-2" />
                            Cart
                            {cartItemsCount > 0 && (
                              <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                                {cartItemsCount}
                              </span>
                            )}
                          </Link>
                          <Link
                            to={isAuthenticated ? '/account' : '/login'}
                            className="flex items-center text-base font-medium text-gray-900 hover:text-primary-600"
                            onClick={onClose}
                          >
                            <User className="h-5 w-5 mr-2" />
                            {isAuthenticated ? 'My Account' : 'Sign In'}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default MobileMenu;