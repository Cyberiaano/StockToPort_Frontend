import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityIdentifierComponent } from './quality-identifier.component';

describe('QualityIdentifierComponent', () => {
  let component: QualityIdentifierComponent;
  let fixture: ComponentFixture<QualityIdentifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QualityIdentifierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualityIdentifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
