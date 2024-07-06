import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionShowUserHouseHomepageComponent } from './section-show-user-house-homepage.component';

describe('SectionShowUserHouseHomepageComponent', () => {
  let component: SectionShowUserHouseHomepageComponent;
  let fixture: ComponentFixture<SectionShowUserHouseHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectionShowUserHouseHomepageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionShowUserHouseHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
