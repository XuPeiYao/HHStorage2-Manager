import { Injectable } from '@angular/core';
import { HyperHttpClient } from '@theme/HyperHttpClient';
import { BaseHttpClient } from '@theme/BaseHttpClient';


@Injectable({
  providedIn: 'root'
})
export class SystemInfoService {

  constructor(private _http: HyperHttpClient, private _baseHttp: BaseHttpClient) { }

  public getDriveInfo(): any {
    return this._http.get('api/System/driveInfo', {});
  }

  public getHealth(): any {
    return this._http.get('api/System/health', {});
  }
}
