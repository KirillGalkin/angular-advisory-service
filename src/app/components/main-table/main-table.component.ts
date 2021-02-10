import { Component, OnInit } from '@angular/core';
import { MainDataService } from 'src/app/services/main-data.service';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.scss'],
})
export class MainTableComponent implements OnInit {
  constructor(private _mainData: MainDataService) {}

  ngOnInit(): void {
    const data = this._mainData.getDefaultData().subscribe((data) => {
      console.log(data);
      return data;
    });
  }
}
