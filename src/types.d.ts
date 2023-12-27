
export interface DishList{
  id: string;
  title: string;
  price: string;
  image: string;
}

export interface DishesList {
  [id: string]: Dish;
}