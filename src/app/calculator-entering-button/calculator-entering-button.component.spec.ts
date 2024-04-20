import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorEnteringButtonComponent } from './calculator-entering-button.component';

describe('CalculatorEnteringButtonComponent', () => {
  let component: CalculatorEnteringButtonComponent;
  let fixture: ComponentFixture<CalculatorEnteringButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorEnteringButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalculatorEnteringButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
