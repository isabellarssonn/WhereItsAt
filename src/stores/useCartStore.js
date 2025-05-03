import { create } from 'zustand';

const useCartStore = create((set) => ({
  cart : [],

  addToCart: (event) =>
    set((state) => {
      const existingEvent = state.cart.find((item) => item.id === event.id);
      if (existingEvent) {
        return {
          cart: state.cart.map((item) =>
            item.id === event.id
              ? { 
                ...item, 
                quantity: item.quantity + 1,
                totalPrice: item.price * (item.quantity + 1),
                }
              : item
          ),
        };
      } else {
        return {
          cart: [
            ...state.cart, 
            { ...event, quantity: 1, totalPrice: event.price }],
        };
      }
    }),

  increase: (eventId) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === eventId     
              ? { 
                ...item, 
                quantity: item.quantity + 1 
                }   
                : item
            ),
        })),

  decrease: (eventId) =>
    set((state) => ({
      cart: state.cart
        .map((item) =>
          item.id === eventId && item.quantity > 1
            ? {     
                ...item, 
                quantity: item.quantity - 1 
                }
                : item
            )
        .filter((item) => item.quantity > 0),
    })),

  removeFromCart: (eventId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== eventId),
    })),
}));

export default useCartStore;
