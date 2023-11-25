import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios/axiosConfig";
import { IDLE, LOAD_SUCCESS, SUCCEEDED } from "../../Utils/constants";

const initialState = {
  amount: null,
  currency: "",
  receipt: "",
  status: IDLE,
  error: "",
};

export const razorpayInstanceCreation = createAsyncThunk(
  "payment/razorpayInstanceCreation",
  async (instanceDetails) => {
    try {
      const response = await axios.post("/payment", instanceDetails);
      if (
        response?.status === LOAD_SUCCESS.status &&
        response?.data.message === LOAD_SUCCESS.message
      )
      return response.data;
    } catch (err) {
      const error = err;
      error.message = err.response.data?.message;
      throw error;
    }
  }
);

const paymentSlice = createSlice({
  name: "payment",
  initialState: initialState,
  reducers: {
    addPaymentInfo(state, action) {
      state.amount = action.payload.amount;
      state.currency = action.payload.currency;
      state.receipt = action.payload.receipt;
      state.status = SUCCEEDED;
      state.error = null;
    },
    removePaymentInfo(state, action) {
      state.amount = null;
      state.currency = null;
      state.status = IDLE;
      state.error = null;
    },
  },
});

export const { addPaymentInfo, removePaymentInfo } = paymentSlice.actions;

export const getPaymentState = (state) => state.payment;

export const paymentReducer = paymentSlice.reducer;
