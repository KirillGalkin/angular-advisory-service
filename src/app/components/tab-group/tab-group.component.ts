import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss'],
})
export class TabGroupComponent implements OnInit {
  @Output() tabChange = new EventEmitter<number>();

  tabs = ['Исходные значения на 2021 год', 'Рекомендации на 2022'];

  constructor() {}

  ngOnInit(): void {}

  onTabChange(tabIndex: number): void {
    this.tabChange.emit(tabIndex);
  }
}
