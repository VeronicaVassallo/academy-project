import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHousesComponent } from './show-houses.component';

describe('ShowHousesComponent', () => {
  let component: ShowHousesComponent;
  let fixture: ComponentFixture<ShowHousesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowHousesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowHousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
