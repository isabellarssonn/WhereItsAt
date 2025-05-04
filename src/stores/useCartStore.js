import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create(persist(
  (set) => ({
    cart: [],

    addToCart: (event, quantity) =>
      set((state) => {
        const existingEvent = state.cart.find((item) => item.id === event.id);
        console.log("Försöker lägga till:", event, "med kvantitet:", quantity);
        if (existingEvent) {
          // Om eventet redan finns, öka kvantiteten med 1
          return {
            cart: state.cart.map((item) =>
              item.id === event.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            ),
          };
        } else {
          // Lägg till nytt event med kvantitet 1
          return {
            cart: [...state.cart, { ...event, quantity }],
          };
        }
      }),
    
    removeFromCart: (eventId) =>
      set((state) => {
        const event = state.cart.find(item => item.id === eventId);
        if (event.quantity > 1) {
          // Om kvantiteten är större än 1, minska kvantiteten med 1
          return {
            cart: state.cart.map((item) =>
              item.id === eventId
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          };
        } else {
          // Om kvantiteten är 1, ta bort eventet från varukorgen
          return {
            cart: state.cart.filter((item) => item.id !== eventId),
          };
        }
      }),
    }))
  );
  

export default useCartStore

// import { create } from 'zustand';

// const useCartStore = create((set) => ({
//   cart : [],

//   addToCart: (event, quantity) =>
//     set((state) => {
//       const existingEvent = state.cart.find((item) => item.id === event.id);
//       if (existingEvent) {
//         return {
//           cart: state.cart.map((item) =>
//             item.id === event.id
//               ? { 
//                 ...item, 
//                 quantity: item.quantity + quantity,
//                 totalPrice: item.price * (item.quantity + quantity),
//                 }
//               : item
//           ),
//         };
//       } else {
//         return {
//           cart: [
//             ...state.cart, 
//             { ...event, quantity, totalPrice: event.price * quantity }],
//         };
//       }
//     }),

//   increase: (eventId) =>
//     set((state) => ({
//       cart: state.cart.map((item) =>
//         item.id === eventId     
//               ? { 
//                 ...item, 
//                 quantity: item.quantity + 1 
//                 }   
//                 : item
//             ),
//         })),

//   decrease: (eventId) =>
//     set((state) => ({
//       cart: state.cart
//         .map((item) =>
//           item.id === eventId && item.quantity > 1
//             ? {     
//                 ...item, 
//                 quantity: item.quantity - 1 
//                 }
//                 : item
//             )
//         .filter((item) => item.quantity > 0),
//     })),

//   removeFromCart: (eventId) =>
//     set((state) => ({
//       cart: state.cart.filter((item) => item.id !== eventId),
//     })),
// }));

// export default useCartStore;

