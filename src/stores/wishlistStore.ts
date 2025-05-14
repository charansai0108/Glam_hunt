import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '../types';

interface WishlistState {
  items: Product[];
  addItem: (item: Product) => void;
  removeItem: (productId: string) => void;
  clearWishlist: () => void;
  isInWishlist: (productId: string) => boolean;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (item) => set((state) => {
        // Check if the item already exists
        const exists = state.items.some((i) => i.id === item.id);
        
        if (!exists) {
          return { items: [...state.items, item] };
        }
        
        return state;
      }),
      
      removeItem: (productId) => set((state) => ({
        items: state.items.filter((item) => item.id !== productId)
      })),
      
      clearWishlist: () => set({ items: [] }),
      
      isInWishlist: (productId) => {
        return get().items.some((item) => item.id === productId);
      }
    }),
    {
      name: 'wishlist-storage',
    }
  )
);