import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const initialState = {
  cartItems: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
        toast.info(`${action.payload.name} quantity increased 🛒`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
        toast.success(`${action.payload.name} added to cart! ✅`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
      }
      state.totalPrice += action.payload.price;
    },

    removeFromCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload);
      if (itemIndex !== -1) {
        toast.warn(`${state.cartItems[itemIndex].name} removed from cart ❌`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
        state.totalPrice -= state.cartItems[itemIndex].price * state.cartItems[itemIndex].quantity;
        state.cartItems.splice(itemIndex, 1);
      }
    },

    increaseQuantity: (state, action) => {
      const existingItem = state.cartItems.find((item) => item.id === action.payload);
      if (existingItem) {
        existingItem.quantity += 1;
        state.totalPrice += existingItem.price;
      }
    },

    decreaseQuantity: (state, action) => {
      const existingItem = state.cartItems.find((item) => item.id === action.payload);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        state.totalPrice -= existingItem.price;
      } else {
        toast.warn(`${existingItem.name} removed from cart ❌`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
        state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
      }
    },

    clearCart: (state) => {
      toast.error("Cart cleared! 🗑️", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
      state.cartItems = [];
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;