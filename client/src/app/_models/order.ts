import { Item } from "./Item";

export interface Order{
  userId: number;
  productsList: Item[];
}
