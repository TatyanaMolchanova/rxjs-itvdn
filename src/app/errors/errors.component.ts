import { Component, OnInit } from '@angular/core';
import {Observable, throwError} from "rxjs";

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.scss']
})
export class ErrorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      console.clear();

      // Creation Observable
      let source = new Observable(function (observer) {
          let id = setTimeout(function () {
              try{
                throw 'my error'; //exception
              } catch (error) {
                observer.error(error);
              }
          }, 1500);
          console.log('started');
          //dispose handler
          return function () {
            console.log('dispose called')
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
