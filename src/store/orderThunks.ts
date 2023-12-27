import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../axiosApi";
import {DishesList, DishList} from "../types";

export const orderFetchData = createAsyncThunk(
  'order/fetchData',
  async (data: DishList, thunkAPI) => {
    try {
      const response = await axiosApi.post('order.json', data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchGetData = createAsyncThunk(
  'order/fetchDataAll',
  async () => {
    const dishesResponse = await axiosApi.get<DishesList | null>('/order.json');
    const dishes = dishesResponse.data;

    let newDishes: DishList[] = [];

    if (dishes) {
      newDishes = Object.keys(dishes).map(key => {
        const dish = dishes[key];
        return {
          ...dish,
          id: key,
        }
      });
    }

    return newDishes;
  }
);
