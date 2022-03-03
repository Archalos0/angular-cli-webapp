import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {
  ProductAndSellingPriceComponent
} from "./component/product-and-selling-price/product-and-selling-price.component";

const routes: Routes = [
  { path: 'customers/:id_client/products', component: ProductAndSellingPriceComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
