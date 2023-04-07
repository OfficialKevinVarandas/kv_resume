import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-switch-theme',
  templateUrl: './switch-theme.component.html',
  styleUrls: ['./switch-theme.component.scss'],
})
export class SwitchThemeComponent implements OnInit {
  isDarkTheme = false;

  ngOnInit(): void {
  }
}
