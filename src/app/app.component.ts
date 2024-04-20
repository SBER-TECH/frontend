import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';
import { WarningMessageComponent } from './warning-message/warning-message.component';
import { CalculatorEnteringButtonComponent } from './calculator-entering-button/calculator-entering-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterOutlet, WelcomeMessageComponent, WarningMessageComponent, CalculatorEnteringButtonComponent],
})
export class AppComponent {
  title = 'project';
}
