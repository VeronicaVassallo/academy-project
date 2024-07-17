import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddPaymentComponent } from './form-add-payment.component';

describe('FormAddPaymentComponent', () => {
  let component: FormAddPaymentComponent;
  let fixture: ComponentFixture<FormAddPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormAddPaymentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAddPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
