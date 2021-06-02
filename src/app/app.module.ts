import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CountingComponent } from './counting/counting.component';
import { Lab4componentComponent } from './lab4component/lab4component.component';
import { HomeComponent } from './Homework1/home/home.component';
import { NavbarComponent } from './Homework1/navbar/navbar.component';
import { SearchbarComponent } from './Homework1/searchbar/searchbar.component';
import { TopbannerComponent } from './Homework1/topbanner/topbanner.component';
import { CategorymenuComponent } from './Homework1/categorymenu/categorymenu.component';
import { TodolistComponent } from './Homework2/todolist/todolist.component';


@NgModule({
  declarations: [
    AppComponent,
    CountingComponent,
    Lab4componentComponent,
    HomeComponent,
    NavbarComponent,
    SearchbarComponent,
    TopbannerComponent,
    CategorymenuComponent,
    TodolistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
