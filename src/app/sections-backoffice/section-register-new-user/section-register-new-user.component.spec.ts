import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionRegisterNewUser } from './section-register-new-user.component';

describe('SectionRegisterNewUser', () => {
  let component: SectionRegisterNewUser;
  let fixture: ComponentFixture<SectionRegisterNewUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectionRegisterNewUser],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionRegisterNewUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
