import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToggleThemeComponent, ToggleThemeServivce } from '@kv/toggle-theme';
import { Subscription } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [ToggleThemeComponent],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private _subscription: Subscription | undefined;

  constructor(private toggleService: ToggleThemeServivce) {}

  ngOnInit(): void {
    this._subscription = this.toggleService.isDark.subscribe((dark) =>
      document.documentElement.classList.toggle('dark')
    );
  }

  ngOnDestroy(): void {
    this._subscription?.unsubscribe();
  }
}
