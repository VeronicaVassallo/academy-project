import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsageBackofficeComponent } from './usage-backoffice.component';

describe('UsageBackofficeComponent', () => {
  let component: UsageBackofficeComponent;
  let fixture: ComponentFixture<UsageBackofficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsageBackofficeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsageBackofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
