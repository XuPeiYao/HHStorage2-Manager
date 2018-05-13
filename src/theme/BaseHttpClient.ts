import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UriBuilder } from 'uribuilder';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

/*
 * 基礎HttpService
 */
@Injectable()
export class BaseHttpClient {
  constructor(private _http: HttpClient) { }

  /**
   * 取得預設標頭
   */
  protected getDefaultHeader(): { [key: string]: string } {
    return {};
  }

  protected mergeHeader(headers: { [key: string]: string }) {
    const result = this.getDefaultHeader();
    for (const key in headers) {
      if (!headers.hasOwnProperty(key)) {
        continue;
      }
      result[key] = headers[key];
    }
    return result;
  }

  /**
   * 渲染URL中的Routing，其他參數則做為Query
   */
  public renderUrl(url: string, params: { [key: string]: any }): string {
    const queryParams = {};
    for (const key in params) {
      if (!params.hasOwnProperty(key)) {
        continue;
      }

      if (url.indexOf(`{${key}}`) > -1) {
        url = url.replace(new RegExp(`{${key}}`, 'g'), params[key]);
      } else {
        queryParams[key] = params[key];
      }
    }

    return UriBuilder.updateQuery(url, queryParams);
  }

  /**
   * GET
   * @param url 網址
   * @param params Route與Query參數
   * @param headers 標頭
   * @param reportProgress 回報進度
   * @param withCredentials 包含認證
   */
  public get<T>(
    url: string,
    params: { [key: string]: any },
    headers: { [key: string]: any } = {},
    reportProgress: boolean = false,
    withCredentials: boolean = false
  ): Observable<T> {
    url = this.renderUrl(url, params);

    return this._http.get<T>(url, {
      headers: this.mergeHeader(headers),
      reportProgress: reportProgress,
      withCredentials: withCredentials
    });
  }

  /**
   * POST
   * @param url 網址
   * @param queryOrRouteParams Route與Query參數
   * @param body 主體
   * @param headers 標頭
   * @param reportProgress 回報進度
   * @param withCredentials 包含認證
   */
  public post<T>(
    url: string,
    queryOrRouteParams: { [key: string]: any },
    body: any,
    headers: { [key: string]: any } = {},
    reportProgress: boolean = false,
    withCredentials: boolean = false
  ): Observable<T> {
    url = this.renderUrl(url, queryOrRouteParams);

    return this._http.post<T>(url, body, {
      headers: this.mergeHeader(headers),
      reportProgress: reportProgress,
      withCredentials: withCredentials
    });
  }

  /**
   * PUT
   * @param url 網址
   * @param queryOrRouteParams Route與Query參數
   * @param body 主體
   * @param headers 標頭
   * @param reportProgress 回報進度
   * @param withCredentials 包含認證
   */
  public put<T>(
    url: string,
    queryOrRouteParams: { [key: string]: any },
    body: any,
    headers: { [key: string]: any },
    reportProgress: boolean = false,
    withCredentials: boolean = false
  ): Observable<T> {
    url = this.renderUrl(url, queryOrRouteParams);

    return this._http.put<T>(url, body, {
      headers: this.mergeHeader(headers),
      reportProgress: reportProgress,
      withCredentials: withCredentials
    });
  }

  /**
   * DELETE
   * @param url 網址
   * @param params Route與Query參數
   * @param headers 標頭
   * @param reportProgress 回報進度
   * @param withCredentials 包含認證
   */
  public delete<T>(
    url: string,
    params: { [key: string]: any },
    headers: { [key: string]: any } = {},
    reportProgress: boolean = false,
    withCredentials: boolean = false
  ): Observable<T> {
    url = this.renderUrl(url, params);

    return this._http.delete<T>(url, {
      headers: this.mergeHeader(headers),
      reportProgress: reportProgress,
      withCredentials: withCredentials
    });
  }
}
