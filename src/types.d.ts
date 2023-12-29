
export interface DishList{
  id: string;
  title: string;
  price: string;
  image: string;
}

export type ApiEditDish = Omit<DishList, 'id'>;

export interface DishesList {
  [id: string]: Dish;
}