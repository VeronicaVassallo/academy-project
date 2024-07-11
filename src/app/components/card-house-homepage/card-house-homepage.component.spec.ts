import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHouseHomepageComponent } from './card-house-homepage.component';

describe('CardHouseHomepageComponent', () => {
  let component: CardHouseHomepageComponent;
  let fixture: ComponentFixture<CardHouseHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardHouseHomepageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardHouseHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
