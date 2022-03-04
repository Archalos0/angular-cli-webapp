import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductCustomer} from "../model/product-customer";
import {Configuration} from "../config/configuration";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  getCustomerProducts(id_client: number) : Observable<ProductCustomer[]> {

    return this.http.get<ProductCustomer[]>(Configuration.BASE_URL_API + `/customers/${id_client}/products`);
  }
}
