import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFreeHouseComponent } from './card-free-house.component';

describe('CardFreeHouseComponent', () => {
  let component: CardFreeHouseComponent;
  let fixture: ComponentFixture<CardFreeHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardFreeHouseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardFreeHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
