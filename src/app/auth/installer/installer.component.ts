import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ClrWizard } from '@clr/angular';
import { InstallService } from '../services/install.service';
import swal from 'sweetalert2';
import { concat } from 'rxjs/operators';
import { Router } from '@angular/router';
import { empty } from 'rxjs/observable/empty';
import 'rxjs/add/operator/delay';

@Component({
  selector: 'app-installer',
  templateUrl: './installer.component.html',
  styleUrls: ['./installer.component.css']
})
export class InstallerComponent implements OnInit {
  @ViewChild('wizard')
  wizard: ClrWizard;

  @Input()
  open = true;

  currentIndex = 0;

  model = {
    adminName: '系統管理員',
    savePath: './Files'
  } as any;

  // #region 錯誤視窗
  // 結果
  databaseConnectTestResult = ' ';
  showDatabaseConnectTestResult = false;
  // #endregion

  constructor(
    private _router: Router,
    private _installService: InstallService) { }

  ngOnInit() {
    this.wizard.currentPageChanged.subscribe(next => {
      if (!this.wizard.currentPage || !this.wizard.pageCollection.pagesCount) { return; }
      this.currentIndex = this.wizard.pageCollection.getPageIndex(this.wizard.currentPage);
    });
  }

  /**
   * 測試資料庫連線
   */
  testDatabaseConnect() {
    this._installService.testDbConnect(this.model).subscribe(message => {
      this.databaseConnectTestResult = message;
      this.showDatabaseConnectTestResult = true;
    });
  }

  /**
   * 引動安裝程序
   */
  install() {
    this.wizard.next();
    this._installService.install(this.model) // 引動資料庫與使用者資訊安裝操作
      .pipe(concat(this._installService.restart())) // 重啟服務
      .delay(5000)
      .subscribe(() => {
        this.wizard.next();
      });
  }
}
