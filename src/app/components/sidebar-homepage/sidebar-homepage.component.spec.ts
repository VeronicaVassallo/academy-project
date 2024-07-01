import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarHomepageComponent } from './sidebar-homepage.component';

describe('SidebarHomepageComponent', () => {
  let component: SidebarHomepageComponent;
  let fixture: ComponentFixture<SidebarHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarHomepageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
