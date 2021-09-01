import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartMainComponent } from './shopping-cart-main.component';

describe('ShoppingCartMainComponent', () => {
  let component: ShoppingCartMainComponent;
  let fixture: ComponentFixture<ShoppingCartMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingCartMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
