import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ClrWizard } from '@clr/angular';
import { InstallService } from '../services/install.service';
import swal from 'sweetalert2';
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
    adminName: "系統管理員"
  } as any;

  // #region 錯誤視窗
  // 結果
  databaseConnectTestResult = null;
  showDatabaseConnectTestResult = false;
  // #endregion

  constructor(private _installService: InstallService) { }

  ngOnInit() {
    this.wizard.currentPageChanged.subscribe(next => {
      if (!this.wizard.currentPage || !this.wizard.pageCollection.pagesCount) { return; }
      this.currentIndex = this.wizard.pageCollection.getPageIndex(this.wizard.currentPage);
    });
  }

  testDatabaseConnect() {
    this._installService.testDbConnect(this.model).subscribe(message => {
      this.databaseConnectTestResult = message;
      this.showDatabaseConnectTestResult = true;
    });
  }
}
