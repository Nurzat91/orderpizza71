import {DishList} from "../types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchGetData, orderFetchData} from "./orderThunks";
import {RootState} from "../app/store";

interface OrderState {
  orderPizza: DishList[];
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
    builder.addCase(orderFetchData.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(orderFetchData.fulfilled, (state,action: PayloadAction<DishList[]>) => {
      state.fetchLoading = false;
      state.orderPizza = action.payload;
    });
    builder.addCase(orderFetchData.rejected, (state) => {
      state.fetchLoading = false;
    });
    builder.addCase(fetchGetData.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(fetchGetData.fulfilled, (state, {payload: data}) => {
      state.fetchLoading = false;
      state.orderPizza = data;
    });
    builder.addCase(fetchGetData.rejected, (state) => {
      state.fetchLoading = false;
    });
  },
});

export const orderReducer = orderSlice.reducer;
export const orderDishes = (state: RootState) => state.order.orderPizza;

export const isLoading = (state: RootState) => state.order.fetchLoading;