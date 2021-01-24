import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Create1Component } from './create1/create1.component';
import { Create2Component } from './create2/create2.component';
import { Observable3Component } from './observable3/observable3.component';
import { ErrorsComponent } from './errors/errors.component';
import { PromiseComponent } from './promise/promise.component';

@NgModule({
  declarations: [
    AppComponent,
    Create1Component,
    Create2Component,
    Observable3Component,
    ErrorsComponent,
    PromiseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
