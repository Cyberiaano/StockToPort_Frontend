import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiploadingAutomationComponent } from './shiploading-automation.component';

describe('ShiploadingAutomationComponent', () => {
  let component: ShiploadingAutomationComponent;
  let fixture: ComponentFixture<ShiploadingAutomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShiploadingAutomationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShiploadingAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
