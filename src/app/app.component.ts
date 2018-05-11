import { HyperHttpClient } from './../theme/HyperHttpClient';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loading = false;
  constructor() {
    document.title = 'HHStorage2 - 控制台';

    HyperHttpClient.beforeProcess.subscribe(x => {
      this.loading = true;
    });
    HyperHttpClient.afterProcess.subscribe(x => {
      this.loading = false;
    });
    HyperHttpClient.onError.subscribe(x => {
      this.loading = false;
    });
  }
}
