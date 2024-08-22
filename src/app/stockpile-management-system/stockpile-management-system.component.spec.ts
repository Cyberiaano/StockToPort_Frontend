import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockpileManagementSystemComponent } from './stockpile-management-system.component';

describe('StockpileManagementSystemComponent', () => {
  let component: StockpileManagementSystemComponent;
  let fixture: ComponentFixture<StockpileManagementSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StockpileManagementSystemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockpileManagementSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
