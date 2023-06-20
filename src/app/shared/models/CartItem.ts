import { Food } from "./Food";

export class CartItem{
  constructor(public food:Food){ }
  quantity = 1 ;
  price: number = this.food.price;
}
