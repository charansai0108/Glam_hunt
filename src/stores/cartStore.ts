import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem } from '../types';

interface CartState {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      
      addItem: (item) => set((state) => {
        // Check if the item already exists with the same product, size, and color
        const existingItemIndex = state.items.findIndex(
          (i) => 
            i.productId === item.productId && 
            i.size === item.size && 
            i.color.value === item.color.value
        );

        if (existingItemIndex !== -1) {
          // If it exists, update the quantity
          const updatedItems = [...state.items];
          updatedItems[existingItemIndex].quantity += item.quantity;
          return { items: updatedItems };
        } else {
          // Otherwise, add the new item
          return { items: [...state.items, { ...item, id: crypto.randomUUID() }] };
        }
      }),
      
      removeItem: (itemId) => set((state) => ({
        items: state.items.filter((item) => item.id !== itemId)
      })),
      
      updateQuantity: (itemId, quantity) => set((state) => ({
        items: state.items.map((item) => 
          item.id === itemId ? { ...item, quantity } : item
        )
      })),
      
      clearCart: () => set({ items: [] })
    }),
    {
      name: 'cart-storage',
    }
  )
);