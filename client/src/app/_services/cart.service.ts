import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Item } from '../_models/Item';
import { Order } from '../_models/order';
import { Product } from '../_models/product';
import { AuthService } from './auth.service';

const BACKEND_URL = environment.apiURL+"/Order/";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  product: Product;
  items: Item;
  order:Order;

  private currentCartSource = new Subject<Item[]>();
  currentCart$ = this.currentCartSource.asObservable();

  constructor(private http:HttpClient, private authService:AuthService, private route:Router) { }

  addToCart(product: Product) {
    let local_storage;
    let shopping_cart = [];
    this.items = {
      product: product,
      quantity: 1,
    }

    if(localStorage.getItem('cart')  == null){
      shopping_cart.push(this.items);
      localStorage.setItem('cart', JSON.stringify(shopping_cart));
      this.currentCartSource.next(shopping_cart);
      console.log('Pushed first Item: ', shopping_cart);
    }
    else{
      local_storage = JSON.parse(localStorage.getItem('cart'));
      console.log("LOCAL STORAGE HAS ITEMS", local_storage);
      for(var i in local_storage){
        console.log(local_storage[i].product.id);
        if(this.items.product.id == local_storage[i].product.id)
        {
          local_storage[i].quantity += 1;
          console.log("Quantity for "+i+" : "+ local_storage[i].quantity);
          console.log('same product! index is ', i);
          this.items=null;
          break;
        }
      }
      // if item not in cart
      if(this.items){
        shopping_cart.push(this.items);
      }
      // if item in cart
      local_storage.forEach(function (item){
        shopping_cart.push(item);
      })
      localStorage.setItem('cart', JSON.stringify(shopping_cart));
      this.currentCartSource.next(shopping_cart);
    }
  }
  getItems(){
   console.log("Cart: ", JSON.parse(localStorage.getItem('cart')));
   return this.items = JSON.parse(localStorage.getItem('cart'));
  }
  deleteItem(item){
    console.log("Deleting : ",item);
    let shopping_cart;
    shopping_cart = JSON.parse(localStorage.getItem('cart'));
    for(let i in shopping_cart){
      if (item.product.id == shopping_cart[i].product.id)
      {
        shopping_cart[i].quantity -= 1;
        if (shopping_cart[i].quantity<=0){
          shopping_cart.splice(i, 1);
        }
      }
    }
    localStorage.setItem('cart', JSON.stringify(shopping_cart));
    this.currentCartSource.next(shopping_cart);
  }
  addQty(item: Item)
  {
    let shopping_cart;
    shopping_cart = JSON.parse(localStorage.getItem('cart'));
    for(let i in shopping_cart){
      if(item.product.productName == shopping_cart[i].product.productName){
        shopping_cart[i].quantity +=1;
        item = null;
        break;
      }
    }
    localStorage.setItem('cart', JSON.stringify(shopping_cart));
    this.currentCartSource.next(shopping_cart);
  }

  checkout(){
    let shopping_cart;
    shopping_cart = JSON.parse(localStorage.getItem('cart'));

    this.authService.currentUser$.subscribe(response=>{
      console.log(response);
      this.order = {
        userId: response.id,
        productsList: shopping_cart
      }
    });
    console.log(this.order);

    this.http.post(BACKEND_URL+"addOrder/", this.order).subscribe(response=>{
      console.log(response);
      this.clearCart();
      this.currentCartSource.next(null);
      alert("Order placed successfully");
    }, error=>{
      console.log(error);
    });
  }

  clearCart(){
    localStorage.removeItem("cart");;
  }

}
