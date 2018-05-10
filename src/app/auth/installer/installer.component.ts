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

  currentIndex = 0;
  constructor() { }

  ngOnInit() {
    this.wizard.currentPageChanged.subscribe(next => {
      if (!this.wizard.currentPage || !this.wizard.pageCollection.pagesCount) { return; }
      this.currentIndex = this.wizard.pageCollection.getPageIndex(this.wizard.currentPage);
    });
  }

  // adding a reset here for sanity's sake
  reset(): void {
    this.wizard.reset();
  }
}
