import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-welcome-message',
  standalone: true,
  imports: [],
  templateUrl: './welcome-message.component.html',
  styleUrl: './welcome-message.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WelcomeMessageComponent {}
