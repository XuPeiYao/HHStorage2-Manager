import { Component, OnInit, ViewChild } from '@angular/core';
import { ClrWizard } from '@clr/angular';
import { InstallerComponent } from '../installer/installer.component';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { UserStatus } from '../../../theme/user-status';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('installer')
  installer: InstallerComponent;

  /**
   * 登入錯誤狀態
   */
  loginError: boolean;

  loginInfo = {} as any;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _loginService: LoginService
  ) { }

  ngOnInit() {
    // 判斷是否顯示安裝視窗
    this.installer.open = !this._route.snapshot.data.installed;

    // 如果存在Token則檢驗是否合法
    if (UserStatus.token) {
      this._loginService.validToken(UserStatus.token).subscribe(isValid => {
        if (isValid) { // 合法的Token則導引至主畫面
          this._router.navigate(['/', 'manage']);
        } else { // 無效Token則清除
          UserStatus.token = null;
        }
      });

    }
  }

  login() {
    this._loginService.getToken(this.loginInfo.id, this.loginInfo.password)
      .catch(error => {
        this.loginError = true;
        return null;
      })
      .subscribe(x => {
        UserStatus.token = x;
        this._router.navigate(['/', 'manage']);
      });
  }
}
