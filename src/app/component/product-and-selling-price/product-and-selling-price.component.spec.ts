import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAndSellingPriceComponent } from './product-and-selling-price.component';

describe('ProductAndSellingPriceComponent', () => {
  let component: ProductAndSellingPriceComponent;
  let fixture: ComponentFixture<ProductAndSellingPriceComponent>;

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
});
