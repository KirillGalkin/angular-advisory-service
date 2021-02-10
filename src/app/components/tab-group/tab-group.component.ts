import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss'],
})
export class TabGroupComponent implements OnInit {
  tabs = ['Исходные значения на 2021 год', 'Рекомендации на 2022 год'];

  constructor() {}

  ngOnInit(): void {}
}
