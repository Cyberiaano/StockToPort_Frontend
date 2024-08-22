import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteManagementSystemComponent } from './route-management-system.component';

describe('RouteManagementSystemComponent', () => {
  let component: RouteManagementSystemComponent;
  let fixture: ComponentFixture<RouteManagementSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RouteManagementSystemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteManagementSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
