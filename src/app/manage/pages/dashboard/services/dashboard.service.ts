import { Injectable } from '@angular/core';
import { BaseHttpClient, HyperHttpClient } from '../../../../../theme';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private _http: HyperHttpClient, private _baseHttp: BaseHttpClient) { }

  public getDriveInfo(): any {
    return this._http.get('api/System/driveInfo', {});
  }

  public getHealth(): any {
    return this._http.get('api/System/health', {});
  }
}
