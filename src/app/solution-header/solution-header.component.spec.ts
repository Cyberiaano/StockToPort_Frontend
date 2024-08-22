import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionHeaderComponent } from './solution-header.component';

describe('SolutionHeaderComponent', () => {
  let component: SolutionHeaderComponent;
  let fixture: ComponentFixture<SolutionHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SolutionHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolutionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
