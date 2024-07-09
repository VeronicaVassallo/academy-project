import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsageHomepageComponent } from './usage-homepage.component';

describe('UsageHomepageComponent', () => {
  let component: UsageHomepageComponent;
  let fixture: ComponentFixture<UsageHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsageHomepageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsageHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
