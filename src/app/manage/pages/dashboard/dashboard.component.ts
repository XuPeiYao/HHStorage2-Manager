import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  /**
   * 綁定主體元素的class屬性
   */
  @HostBinding('class')
  hostClass = 'content-container';

  constructor() { }

  ngOnInit() {
  }

}
