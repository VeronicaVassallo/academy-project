import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BachecaComponent } from './section-bacheca-user.component';

describe('BachecaComponent', () => {
  let component: BachecaComponent;
  let fixture: ComponentFixture<BachecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BachecaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BachecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
