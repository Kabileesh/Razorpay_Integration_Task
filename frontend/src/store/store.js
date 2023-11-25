import { configureStore } from "@reduxjs/toolkit";
import { paymentReducer } from "./slices/paymentSlice";
import { orderReducer } from "./slices/orderSlice";

const store = configureStore({
  reducer: {
    payment: paymentReducer,
    order: orderReducer,
  },
});

export default store;
