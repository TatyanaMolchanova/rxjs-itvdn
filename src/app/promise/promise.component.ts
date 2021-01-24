import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let promise  = new Promise((resolve) => {
      setTimeout(() => {
        console.log('Promise timeout');
        resolve(100);
      }, 1000)
        console.log('Promise started');
    });
    promise.then((value) => {console.log('Promise value ' + value);});

      // Creation Observable
      let source = new Observable(function (observer) {
          let id = setTimeout(function () {
              console.log('timeout');
              observer.next(100); // notification about new element in sequence
              observer.complete(); // end
          }, 1500);
          console.log('started');
          //dispose handler
          return function () {
              clearTimeout(id);
          }
      });

      // creaction subscription with 3 handlers
      let subject = source.subscribe(
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

      setTimeout(function () {
          subject.unsubscribe();
          console.log('unsubscribe');
      }, 500)
  }

}
