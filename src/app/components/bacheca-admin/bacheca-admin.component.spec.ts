import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BachecaAdminComponent } from './bacheca-admin.component';

describe('BachecaAdminComponent', () => {
  let component: BachecaAdminComponent;
  let fixture: ComponentFixture<BachecaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BachecaAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BachecaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
