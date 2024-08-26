import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripperCarAutomationComponent } from './tripper-car-automation.component';

describe('TripperCarAutomationComponent', () => {
  let component: TripperCarAutomationComponent;
  let fixture: ComponentFixture<TripperCarAutomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TripperCarAutomationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripperCarAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
