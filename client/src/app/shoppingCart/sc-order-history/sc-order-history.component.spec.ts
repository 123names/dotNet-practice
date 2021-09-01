import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScOrderHistoryComponent } from './sc-order-history.component';

describe('ScOrderHistoryComponent', () => {
  let component: ScOrderHistoryComponent;
  let fixture: ComponentFixture<ScOrderHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScOrderHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScOrderHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
