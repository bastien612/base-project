import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Property } from 'app/shared/models/property.model';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  private readonly constantsEndpoint = 'api/constants';

  properties: Map<string, string> = new Map<string, string>();

  constructor(public http: HttpClient) {}

  initialize(): Promise<Map<string, string>> {
    return this.http
      .get<Map<string, string>>(this.constantsEndpoint)
      .pipe(
        map(response => {
          this.properties = response;
          return response;
        })
      )
      .toPromise();
  }

  getProperty(key): string {
    const prop = this.properties[key];
    if (prop === undefined) {
      return '';
      // throw new Error(`Property ${key} not found`);
    }
    return prop;
  }
}
