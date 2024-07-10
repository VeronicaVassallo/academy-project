import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentHomepageComponent } from './payment-homepage.component';

describe('PaymentHomepageComponent', () => {
  let component: PaymentHomepageComponent;
  let fixture: ComponentFixture<PaymentHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentHomepageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
