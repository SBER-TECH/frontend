import { Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { RootComponent } from './root/root.component';

export const routes: Routes = [
  {
    path: '',
    component: RootComponent,
  },
  {
    path: 'calculator',
    component: CalculatorComponent,
  },
];
