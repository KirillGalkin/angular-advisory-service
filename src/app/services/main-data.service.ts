import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAgriculture } from '../models/agriculture';

@Injectable({
  providedIn: 'root',
})
export class MainDataService {
  constructor(private _httpClient: HttpClient) {}

  getDefaultData(): Observable<IAgriculture[]> {
    return this._httpClient.get<IAgriculture[]>(
      environment.backendUrl + 'fields'
    );
  }

  getRecomendationsData(): Observable<IAgriculture[]> {
    return this._httpClient.get<IAgriculture[]>(
      environment.backendUrl + 'recommendation'
    );
  }
}
