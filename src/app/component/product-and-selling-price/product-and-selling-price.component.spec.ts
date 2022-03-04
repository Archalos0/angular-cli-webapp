import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAndSellingPriceComponent } from './product-and-selling-price.component';
import {ProductCustomer} from "../../model/product-customer";

describe('ProductAndSellingPriceComponent', () => {
  let component: ProductAndSellingPriceComponent;
  let fixture: ComponentFixture<ProductAndSellingPriceComponent>;
  let productsCustomer: ProductCustomer[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAndSellingPriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAndSellingPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('sould get the products customer price', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('Moteur');
  });
});
