import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "/src/redux/reducers/cartReducers.js";  

const store = configureStore({
  reducer: {
    cart: cartReducer,  
  },
});

export default store;