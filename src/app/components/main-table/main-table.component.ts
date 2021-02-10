import {
  Component,
  Input,
  ViewChild,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { takeUntil, tap } from 'rxjs/operators';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subject } from 'rxjs';
import { IAgriculture } from 'src/app/models/agriculture';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.scss'],
})
export class MainTableComponent implements AfterViewInit, OnDestroy {
  displayedColumns: string[] = ['number', 'size', 'agricultural'];
  dataSource!: MatTableDataSource<IAgriculture>;

  private _destroy$ = new Subject<void>();

  @Input() data!: Observable<IAgriculture[]>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {}

  ngAfterViewInit(): void {
    this.data
      .pipe(
        tap((data) => {
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.paginator._intl.itemsPerPageLabel =
            'Записей на странице:';
          this.dataSource.sort = this.sort;
        }),
        takeUntil(this._destroy$)
      )
      .subscribe();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
