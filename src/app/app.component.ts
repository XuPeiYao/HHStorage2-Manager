import { HyperHttpClient } from './../theme/HyperHttpClient';
import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  networkError: HttpErrorResponse;
  loadingStatus = 0;

  get loading() {
    return this.loadingStatus > 0;
  }

  constructor() {
    document.title = 'HHStorage2 - 控制台';

    HyperHttpClient.beforeProcess.subscribe(x => {
      this.loadingStatus++;
    });
    HyperHttpClient.afterProcess.subscribe(x => {
      this.loadingStatus--;
    });
    HyperHttpClient.onError.subscribe((x: HttpErrorResponse) => {
      this.loadingStatus--;
      this.networkError = x;
      return x;
    });
  }
}
