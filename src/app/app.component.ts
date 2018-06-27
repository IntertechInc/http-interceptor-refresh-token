
import {forkJoin as observableForkJoin,  Observable } from 'rxjs';
import { Component } from '@angular/core';


import { TestService } from './test.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message: string;

  constructor(private testService: TestService,
              private authService: AuthService) { }

  test401() {
    this.testService.getData()
      .subscribe((response: any) => {
        this.message = `Worked with status = ${response.status}`;
      },
      error => this.message = `Failed with status = ${error.status}`);
  }

  test401Multiple() {
    let dataObservable$ = this.testService.getData();
    let lookupObservable$ = this.testService.getLookup();

    observableForkJoin(dataObservable$, lookupObservable$)
      .subscribe(([dataResult, lookupResult]) => {
        this.message = `Worked with getData status = ${dataResult.status} and getLookup status = ${lookupResult.status}`;
      },
      error => this.message = `Failed with status = ${error.status}`);
  }
}
