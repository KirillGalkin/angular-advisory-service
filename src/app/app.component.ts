import { Component } from '@angular/core';
import { MainDataService } from './services/main-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  tabIndex = 0;

  constructor(public mainDataService: MainDataService) {}

  onTabChange(tabIndex: number) {
    this.tabIndex = tabIndex;
  }
}
