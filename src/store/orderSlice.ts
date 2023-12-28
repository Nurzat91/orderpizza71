import {DishList} from "../types";
import {createSlice} from "@reduxjs/toolkit";
import {deleteDish, fetchGetData, orderPostData} from "./orderThunks";
import {RootState} from "../app/store";

interface OrderState {
  orderPizza: DishList[];
  postLoading: boolean;
  fetchLoading: boolean;
  deleteLoading: false | string;
}

const initialState: OrderState = {
  orderPizza: [],
  postLoading: false,
  fetchLoading: false,
  deleteLoading: false,
}

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(orderPostData.pending, (state) => {
      state.postLoading = true;
    });
    builder.addCase(orderPostData.fulfilled, (state) => {
      state.postLoading = false;
    });
    builder.addCase(orderPostData.rejected, (state) => {
      state.postLoading = false;
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

    builder.addCase(deleteDish.pending, (state, {meta}) => {
      state.deleteLoading = meta.arg;
    });
    builder.addCase(deleteDish.fulfilled, (state) => {
      state.deleteLoading = false;
    });
    builder.addCase(deleteDish.rejected, (state) => {
      state.deleteLoading = false;
      state.fetchLoading = false;
    });
  },
});

export const orderReducer = orderSlice.reducer;
export const orderDishes = (state: RootState) => state.order.orderPizza;

export const postLoading = (state: RootState) => state.order.postLoading;
export const isLoading = (state: RootState) => state.order.fetchLoading;

export const deleteLoading = (state: RootState) => state.order.deleteLoading;