import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MainDataService {
  constructor(private _httpClient: HttpClient) {}

  getDefaultData(): Observable<any> {
    return this._httpClient.get<any>(environment.backendUrl + 'fields');
  }

  getRecomendationsData(): Observable<any> {
    return this._httpClient.get<any>(environment.backendUrl + 'recommendation');
  }
}
