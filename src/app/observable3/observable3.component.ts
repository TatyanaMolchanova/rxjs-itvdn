import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-observable3',
  templateUrl: './observable3.component.html',
  styleUrls: ['./observable3.component.scss']
})
export class Observable3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
      console.clear();

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
