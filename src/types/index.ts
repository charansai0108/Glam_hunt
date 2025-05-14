export interface Product {
  id: string;
  name: string;
  price: number;
  salePrice?: number;
  images: string[];
  category: string;
  description: string;
  sizes: string[];
  colors: { name: string; value: string }[];
  inStock: boolean;
  featured?: boolean;
  newArrival?: boolean;
  rating?: number;
  reviews?: number;
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  image: string;
  size: string;
  color: { name: string; value: string };
  quantity: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  shipping: {
    name: string;
    address: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  payment: {
    method: string;
    transactionId?: string;
    status: 'pending' | 'completed' | 'failed';
  };
  createdAt: string;
  updatedAt: string;
}