import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailCardComponent } from './product-detail-card.component';

describe('ProductDetailCardComponent', () => {
  let component: ProductDetailCardComponent;
  let fixture: ComponentFixture<ProductDetailCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetailCardComponent]
    });
    fixture = TestBed.createComponent(ProductDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
