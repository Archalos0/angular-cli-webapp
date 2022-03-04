import { TestBed } from '@angular/core/testing';

import { CustomerService } from './customer.service';
import {ProductCustomer} from "../model/product-customer";

describe('CustomerService', () => {
  let service: CustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
