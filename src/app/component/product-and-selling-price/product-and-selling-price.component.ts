import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../service/customer.service";
import {ActivatedRoute} from "@angular/router";
import {ProductCustomer} from "../../model/product-customer";

@Component({
  selector: 'app-product-and-selling-price',
  templateUrl: './product-and-selling-price.component.html',
  styleUrls: ['./product-and-selling-price.component.css']
})
export class ProductAndSellingPriceComponent implements OnInit {

  productCustomer:ProductCustomer[] = [];

  constructor(private customerService:CustomerService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.customerService.getCustomerProducts(params["id_client"]).subscribe(
        productCustomer => this.productCustomer = productCustomer
      )
    });

  }



}
