import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorAnalyzerSystemComponent } from './color-analyzer-system.component';

describe('ColorAnalyzerSystemComponent', () => {
  let component: ColorAnalyzerSystemComponent;
  let fixture: ComponentFixture<ColorAnalyzerSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColorAnalyzerSystemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorAnalyzerSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
