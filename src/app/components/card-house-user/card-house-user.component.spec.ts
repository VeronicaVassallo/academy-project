import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHouseUserComponent } from './card-house-user.component';

describe('CardHouseUserComponent', () => {
  let component: CardHouseUserComponent;
  let fixture: ComponentFixture<CardHouseUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardHouseUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardHouseUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
