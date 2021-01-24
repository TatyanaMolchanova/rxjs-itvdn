import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-create2',
  templateUrl: './create2.component.html',
  styleUrls: ['./create2.component.scss']
})
export class Create2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
      console.clear();

      // Creation Observable
      let source = new Observable(function (observer) {
          setTimeout(function () {
              console.log('timeout');
              observer.next(100); // notification about new element in sequence
              observer.complete(); // end
          }, 1500);
          console.log('started');
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
