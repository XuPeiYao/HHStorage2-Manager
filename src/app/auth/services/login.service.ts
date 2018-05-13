import { BaseHttpClient } from './../../../theme/BaseHttpClient';
import { concat } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { HyperHttpClient } from '../../../theme';
import { Observable } from 'rxjs';
import { fromPromise } from 'rxjs/observable/fromPromise';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HyperHttpClient, private _baseHttp: BaseHttpClient) { }

  /**
   * 登入並取得使用者存取權杖
   * @param id 帳號
   * @param password 密碼
   */
  public getToken(id: string, password: string): Observable<any> {
    return this._baseHttp.post('api/User/token', {}, { id, password });
  }

  /**
   * 檢驗存取權杖是否有效
   * @param token 存取權杖
   */
  public validToken(token: string): Observable<boolean> {
    return this._baseHttp.post('api/User/validToken', {}, JSON.stringify(token), { 'Content-Type': 'application/json' });
  }
}
