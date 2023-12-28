import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../axiosApi";
import {DishesList, DishList} from "../types";

export const orderPostData = createAsyncThunk<void, DishList>(
  'order/postData',
  async (data) => {
    await axiosApi.post('order.json', data);
  }
);

export const fetchGetData = createAsyncThunk(
  'order/fetchData',
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

export const deleteDish = createAsyncThunk<void, string>(
  'order/delete',
  async (dishId) => {
    await axiosApi.delete(`/order/${dishId}.json`);
  }
);