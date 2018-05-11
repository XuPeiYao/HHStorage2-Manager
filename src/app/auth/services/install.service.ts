
import { Injectable } from '@angular/core';
import { HyperHttpClient } from '../../../theme';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstallService {

  constructor(private _http: HyperHttpClient) { }

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
}
