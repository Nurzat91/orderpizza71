import {ApiEditDish, DishList} from "../types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {deleteDish, fetchEditDish, fetchGetData, orderPostData, updateDishEdit} from "./orderThunks";
import {RootState} from "../app/store";

interface OrderState {
  dishId: ApiEditDish | null;
  orderPizza: DishList[];
  postLoading: boolean;
  fetchLoading: boolean;
  deleteLoading: false | string;
  editIdLoading: boolean;
  updateEditIdLoading: boolean;
}

const initialState: OrderState = {
  dishId: null,
  orderPizza: [],
  postLoading: false,
  fetchLoading: false,
  deleteLoading: false,
  editIdLoading: false,
  updateEditIdLoading: false,
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

    builder.addCase(fetchEditDish.pending, (state) => {
      state.editIdLoading = true;
    });
    builder.addCase(fetchEditDish.fulfilled, (state, {payload: data}: PayloadAction<ApiEditDish>) => {
      state.editIdLoading = false;
      state.dishId = data;
    });
    builder.addCase(fetchEditDish.rejected, (state) => {
      state.editIdLoading = false;
    });

    builder.addCase(updateDishEdit.pending, (state) => {
      state.updateEditIdLoading = true;
    });
    builder.addCase(updateDishEdit.fulfilled, (state) => {
      state.updateEditIdLoading = false;
    });
    builder.addCase(updateDishEdit.rejected, (state) => {
      state.updateEditIdLoading = false;
    });
  },
});

export const orderReducer = orderSlice.reducer;
export const orderDishes = (state: RootState) => state.order.orderPizza;
export const selectDishId = (state: RootState) => state.order.dishId;

export const postLoading = (state: RootState) => state.order.postLoading;
export const isLoading = (state: RootState) => state.order.fetchLoading;

export const deleteLoading = (state: RootState) => state.order.deleteLoading;
export const selectFetchEditIdLoading = (state: RootState) => state.order.editIdLoading;
export const selectUpdateEditIdLoading = (state: RootState) => state.order.updateEditIdLoading;