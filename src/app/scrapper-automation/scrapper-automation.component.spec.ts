import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrapperAutomationComponent } from './scrapper-automation.component';

describe('ScrapperAutomationComponent', () => {
  let component: ScrapperAutomationComponent;
  let fixture: ComponentFixture<ScrapperAutomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScrapperAutomationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrapperAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
