import {Dish} from "../types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {orderfetchData} from "./orderThunks";
import {RootState} from "../app/store";

interface OrderState {
  orderPizza: Dish[];
  fetchLoading: boolean;
}

const initialState: OrderState = {
  orderPizza: [],
  fetchLoading: false,
}

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(orderfetchData.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(orderfetchData.fulfilled, (state,action: PayloadAction<Dish[]>) => {
      state.fetchLoading = false;
      state.orderPizza = action.payload;
    });
    builder.addCase(orderfetchData.rejected, (state) => {
      state.fetchLoading = false;
    });
  },
});

export const orderReducer = orderSlice.reducer;

export const isLoading = (state: RootState) => state.order.fetchLoading;