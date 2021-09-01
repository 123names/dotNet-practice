import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product';
import { CartService } from 'src/app/_services/cart.service';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public productList:any= []

  constructor(private productService:ProductService, private cart: CartService) { }

  ngOnInit(): void {
    this.getProductMenu();
  }

  getProductMenu(){
    this.productService.getProductList().subscribe(response=>{
      this.productList = response;
      console.log(this.productList);
    })
  }

  addToCart(product: Product){
    console.log(product);
    this.cart.addToCart(product);
  }

}
