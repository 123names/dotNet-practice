import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ScOrderHistoryComponent } from './shoppingCart/sc-order-history/sc-order-history.component';
import { ShoppingCartMainComponent } from './shoppingCart/shopping-cart-main/shopping-cart-main.component';

const routes: Routes = [
  {path:"", component:ProductListComponent},
  {path:"register", component:RegisterComponent},
  {path:"login", component: LoginComponent},
  {path:"shoppingCart", component:ShoppingCartMainComponent},
  {path:"shoppingCart/orders", component: ScOrderHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
