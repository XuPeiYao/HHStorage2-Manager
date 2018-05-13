import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserStatus } from '../../../theme/user-status';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  logout() {
    UserStatus.token = null;
    this._router.navigate(['/']);
  }
}
