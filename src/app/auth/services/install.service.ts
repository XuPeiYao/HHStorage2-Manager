import { BaseHttpClient } from './../../../theme/BaseHttpClient';
import { concat } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { HyperHttpClient } from '../../../theme';
import { Observable } from 'rxjs';
import { fromPromise } from 'rxjs/observable/fromPromise';
@Injectable({
  providedIn: 'root'
})
export class InstallService {

  constructor(private _http: HyperHttpClient, private _baseHttp: BaseHttpClient) { }

  /**
   * 取得系統安裝狀態
   */
  public getInstallStatus(): Observable<boolean> {
    return this._http.get('api/System/install', {});
  }

  /**
   * 測試資料庫連線
   * @param connectConfig 連線參數
   */
  public testDbConnect(connectConfig: any): Observable<string> {
    return this._http.post('api/System/dbTest', {}, connectConfig);
  }

  /**
   * 安裝資料庫
   * @param connectConfig 安裝參數
   */
  public install(connectConfig: any): Observable<any> {
    return this._baseHttp.post('api/System/install', {}, connectConfig);
  }

  /**
   * 重啟服務
   */
  public restart(): Observable<any> {
    return this._baseHttp.delete('api/System/install/restart', {});
  }
}
