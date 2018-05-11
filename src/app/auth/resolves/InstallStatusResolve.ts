import { InstallService } from './../services/install.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

/**
 * 取得系統是否已經安裝的狀態
 */
@Injectable()
export class InstallStatusResolve implements Resolve<boolean> {
  constructor(private _installService: InstallService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this._installService.getInstallStatus();
  }
}
