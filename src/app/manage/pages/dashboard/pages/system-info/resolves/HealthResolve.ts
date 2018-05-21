import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SystemInfoService } from '../services/systemInfo.service';

/**
 * 取得系統是否已經安裝的狀態
 */
@Injectable()
export class HealthResolve implements Resolve<boolean> {
  constructor(private _dashboardService: SystemInfoService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this._dashboardService.getHealth();
  }
}
