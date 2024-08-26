import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomaticSamplingSystemComponent } from './automatic-sampling-system.component';

describe('AutomaticSamplingSystemComponent', () => {
  let component: AutomaticSamplingSystemComponent;
  let fixture: ComponentFixture<AutomaticSamplingSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutomaticSamplingSystemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomaticSamplingSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
