import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddHouseComponent } from './modal-add-house.component';

describe('ModalAddHouseComponent', () => {
  let component: ModalAddHouseComponent;
  let fixture: ComponentFixture<ModalAddHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalAddHouseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAddHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
