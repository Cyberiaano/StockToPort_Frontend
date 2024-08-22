import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegratedControlSystemComponent } from './integration-control-system.component';

describe('IntegrationControlSystemComponent', () => {
  let component: IntegratedControlSystemComponent;
  let fixture: ComponentFixture<IntegratedControlSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntegratedControlSystemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntegratedControlSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
