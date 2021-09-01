import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/_models/Item';
import { CartService } from 'src/app/_services/cart.service';

@Component({
  selector: 'app-shopping-cart-main',
  templateUrl: './shopping-cart-main.component.html',
  styleUrls: ['./shopping-cart-main.component.css']
})
export class ShoppingCartMainComponent implements OnInit {

  subTotal:number = 0;
  itemsInCart:Item[] = [];
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.itemsInCart = this.cartService.getItems();
    this.cartService.currentCart$.subscribe(response=>{
      this.itemsInCart = response;
      this.calculateSubTotal();
    });
    this.calculateSubTotal();
  }

  deleteItemInCart(item:Item){
    this.cartService.deleteItem(item);
  }

  calculateSubTotal(){
    this.subTotal = 0;
    if (this.itemsInCart){
      for(let item of this.itemsInCart){
        this.subTotal += item.product.price*item.quantity;
      }
    }
  }

  checkout(){
    this.cartService.checkout();
  }

}
