import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create(persist(
  (set) => ({
    cart: [],

    addToCart: (event, quantity) =>
      set((state) => {
        const existingEvent = state.cart.find((item) => item.id === event.id);
        if (existingEvent) {
          return {
            cart: state.cart.map((item) =>
              item.id === event.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            ),
          };
        } else {
          return {
            cart: [...state.cart, { ...event, quantity }],
          };
        }
      }),
    
    removeFromCart: (eventId) =>
      set((state) => {
        const event = state.cart.find(item => item.id === eventId);
        if (event.quantity > 1) {
          return {
            cart: state.cart.map((item) =>
              item.id === eventId
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          };
        } else {
          return {
            cart: state.cart.filter((item) => item.id !== eventId),
          };
        }
      }),

      clearCart: () => set({ cart: [] }),
    }),
    {
      name: 'cart-storage',
    }
  ));
  

export default useCartStore