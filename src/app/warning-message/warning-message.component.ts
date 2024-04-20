import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-warning-message',
  standalone: true,
  imports: [],
  templateUrl: './warning-message.component.html',
  styleUrl: './warning-message.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WarningMessageComponent {}
