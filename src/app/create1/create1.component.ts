import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-create1',
  templateUrl: './create1.component.html',
  styleUrls: ['./create1.component.scss']
})
export class Create1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.clear();

    // Creation Observable
      // let source = Observable.create(function(observer) {
      let source = new Observable(function (observer) {
          setTimeout(function () {
              console.log('timeout');
              observer.next(100); // notification about new element in sequence
              observer.complete(); // end
          }, 1500);
          console.log('started');
      });

      // creaction subscription with 3 handlers
      let sub = source.subscribe(
          function (value) { // onNext
              console.log('next ' + value);
          },
          function (error) {
              console.error(error);
          },
          function () {
              console.log('completed');
          }
      )
  }

}
