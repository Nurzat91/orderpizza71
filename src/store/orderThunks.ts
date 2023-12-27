import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../axiosApi";
import {Dish} from "../types";

export const orderfetchData = createAsyncThunk(
  'order/fetchData',
  async (data: Dish, thunkAPI) => {
    try {
      const response = await axiosApi.post('order.json', data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);