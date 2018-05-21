import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-storage-nav',
  templateUrl: './storage-nav.component.html',
  styleUrls: ['./storage-nav.component.css']
})
export class StorageNavComponent implements OnInit {
  /**
   * 綁定主體元素的class屬性
   */
  @HostBinding('class')
  hostClass = 'content-container';

  constructor() { }

  ngOnInit() {
  }

}
