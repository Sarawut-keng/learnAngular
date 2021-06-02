import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountingComponent } from './counting/counting.component';
import { Lab4componentComponent } from './lab4component/lab4component.component';

@NgModule({
  declarations: [
    AppComponent,
    CountingComponent,
    Lab4componentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
