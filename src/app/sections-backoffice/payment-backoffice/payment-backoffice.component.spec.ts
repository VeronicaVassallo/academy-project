import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentBackofficeComponent } from './payment-backoffice.component';

describe('PaymentBackofficeComponent', () => {
  let component: PaymentBackofficeComponent;
  let fixture: ComponentFixture<PaymentBackofficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentBackofficeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentBackofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
