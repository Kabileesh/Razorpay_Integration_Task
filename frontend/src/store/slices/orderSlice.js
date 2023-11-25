import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CREATED_SUCCESS, IDLE, SUCCEEDED } from "../../Utils/constants";
import axios from "../../axios/axiosConfig";

const initialState = {
  customerMail: "",
  items: {},
  amount: 0,
  status: IDLE,
  error: "",
};

export const orderPlacement = createAsyncThunk(
  "order/orderPlacement",
  async (orderDetails) => {
    try {
      const response = await axios.post("/place-order", orderDetails);
      if (
        response?.status === CREATED_SUCCESS.status &&
        response?.data.message === CREATED_SUCCESS.message
      ) {
        return response?.data;
      }
    } catch (err) {
      const error = err;
      error.message = err.response.data?.message;
      throw error;
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState: initialState,
  reducers: {
    addOrderInfo(state, action) {
      state.customerMail = action.payload.customerMail;
      state.items = action.payload.items;
      state.amount = action.payload.amount;
      state.status = SUCCEEDED;
      state.error = null;
    },
    removeOrderInfo(state, action) {
      state.customerMail = null;
      state.items = null;
      state.amount = null;
      state.status = IDLE;
      state.error = null;
    },
  },
});

export const { addOrderInfo, removeOrderInfo } = orderSlice.actions;

export const getOrderState = (state) => state.order;

export const orderReducer = orderSlice.reducer;
