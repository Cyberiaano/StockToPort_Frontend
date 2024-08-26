import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlapsLoadGuidesAutomationComponent } from './flaps-load-guides-automation.component';

describe('FlapsLoadGuidesAutomationComponent', () => {
  let component: FlapsLoadGuidesAutomationComponent;
  let fixture: ComponentFixture<FlapsLoadGuidesAutomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlapsLoadGuidesAutomationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlapsLoadGuidesAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
