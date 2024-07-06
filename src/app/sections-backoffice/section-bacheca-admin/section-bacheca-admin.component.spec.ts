import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBachecaAdminComponent } from './section-bacheca-admin.component';

describe('SectionBachecaAdminComponent', () => {
  let component: SectionBachecaAdminComponent;
  let fixture: ComponentFixture<SectionBachecaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectionBachecaAdminComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionBachecaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
