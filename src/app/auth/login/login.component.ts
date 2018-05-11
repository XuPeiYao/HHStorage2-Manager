import { Component, OnInit, ViewChild } from '@angular/core';
import { ClrWizard } from '@clr/angular';
import { InstallerComponent } from '../installer/installer.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('installer')
  installer: InstallerComponent;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    // 判斷是否顯示安裝視窗
    this.installer.open = !this._route.snapshot.data.installed;
  }
}
