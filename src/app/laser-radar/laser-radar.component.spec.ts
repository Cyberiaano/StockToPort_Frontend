import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaserRadarComponent } from './laser-radar.component';

describe('LaserRadarComponent', () => {
  let component: LaserRadarComponent;
  let fixture: ComponentFixture<LaserRadarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LaserRadarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaserRadarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
