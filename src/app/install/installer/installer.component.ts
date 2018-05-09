import { Component, OnInit, ViewChild } from '@angular/core';
import { ClrWizard } from '@clr/angular';

@Component({
  selector: 'app-installer',
  templateUrl: './installer.component.html',
  styleUrls: ['./installer.component.css']
})
export class InstallerComponent implements OnInit {
  @ViewChild('wizard') wizard: ClrWizard;
  open = true;
  pageArray: string[] = ['資料庫設定', '管理員帳號', '完成'];

  constructor() { }

  ngOnInit() {
  }

  // adding a reset here for sanity's sake
  reset(): void {
    this.wizard.reset();
  }
}
