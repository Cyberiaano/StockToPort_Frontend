import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionMonitoringSystemComponent } from './condition-monitoring-system.component';

describe('ConditionMonitoringSystemComponent', () => {
  let component: ConditionMonitoringSystemComponent;
  let fixture: ComponentFixture<ConditionMonitoringSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConditionMonitoringSystemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionMonitoringSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
