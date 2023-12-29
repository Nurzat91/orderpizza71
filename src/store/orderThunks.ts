import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../axiosApi";
import {ApiEditDish, DishesList, DishList} from "../types";

export const orderPostData = createAsyncThunk<void, ApiEditDish>(
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

export const fetchEditDish = createAsyncThunk<ApiEditDish, string>(
  'order/fetchEdit',
  async (dishId) =>{
    const response = await axiosApi.get<ApiEditDish | null>(`/dishes/${dishId}.json`);
    const dishEdit = response.data;

    if(dishEdit === null){
      throw new Error('Not found');
    }

    return dishEdit;
  }
);

interface UpdateDish{
  id: string;
  dish: ApiEditDish;
}

export const updateDishEdit = createAsyncThunk<void, UpdateDish>(
  'dishes/update',
  async ({id, dish}) => {
    await axiosApi.put(`/dishes/${id}.json`, dish);
  }
);

export const deleteDish = createAsyncThunk<void, string>(
  'order/delete',
  async (dishId) => {
    await axiosApi.delete(`/order/${dishId}.json`);
  }
);