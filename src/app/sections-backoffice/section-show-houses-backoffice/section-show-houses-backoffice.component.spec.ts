import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionShowHousesBackofficeComponent } from './section-show-houses-backoffice.component';

describe('SectionShowHousesBackofficeComponent', () => {
  let component: SectionShowHousesBackofficeComponent;
  let fixture: ComponentFixture<SectionShowHousesBackofficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectionShowHousesBackofficeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionShowHousesBackofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
