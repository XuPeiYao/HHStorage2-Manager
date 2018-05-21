import { ActivatedRoute } from '@angular/router';
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
  hostClass = 'card-columns';

  driveInfo: any;
  healthInfo: any;

  // CPU
  public cpuData: number[] = [0, 100];

  constructor(private _route: ActivatedRoute) {
    this.driveInfo = _route.snapshot.data.driveInfo;
    this.healthInfo = _route.snapshot.data.healthInfo;

    this.cpuData[0] = this.healthInfo.cpu;
  }

  ngOnInit() {
  }

}
