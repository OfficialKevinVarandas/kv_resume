import { Component } from '@angular/core';
import { SwitchThemeComponent } from '../switch-theme/switch-theme.component';

@Component({
  standalone: true,
  imports: [SwitchThemeComponent],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {}
