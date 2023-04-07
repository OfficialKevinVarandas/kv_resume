import { Component } from '@angular/core';
import { HeaderComponent } from './shared/header/header.component';

@Component({
  standalone: true,
  imports: [HeaderComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'kv_resume';
}
