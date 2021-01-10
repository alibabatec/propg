import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { FilterOption } from './property/listproperty.component';

@Injectable({
  providedIn: 'root',
})
export class FormatServiceService {
  public client: HttpClient;
  constructor(client: HttpClient) {
    this.client = client;
  }

  getFormats() {
    return this.client.get('http://localhost:57824/WeatherForecast');
  }

  saveAdvertUnit(formData: any) {
    return this.client.post('http://localhost:5000/AdvertUnit', formData);
  }

  getAdvertUnits(filters?: FilterOption[]) {
    return this.client.get('http://localhost:5000/AdvertUnit');
  }

  saveFormats(formData: any) {
    return this.client.post('http://localhost:57824/WeatherForecast', formData);
  }
}
