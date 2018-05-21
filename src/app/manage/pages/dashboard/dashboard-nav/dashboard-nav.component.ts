import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-dashboard-nav',
  templateUrl: './dashboard-nav.component.html',
  styleUrls: ['./dashboard-nav.component.css']
})
export class DashboardNavComponent implements OnInit {

  /**
   * 綁定主體元素的class屬性
   */
  @HostBinding('class')
  hostClass = 'content-container';

  constructor() { }

  ngOnInit() {
  }

}
