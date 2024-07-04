import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUsageComponent } from './modal-usage.component';

describe('ModalUsageComponent', () => {
  let component: ModalUsageComponent;
  let fixture: ComponentFixture<ModalUsageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalUsageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
