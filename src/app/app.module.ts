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
import { HeaderComponent } from './Homework3/header/header.component';
import { MenuComponent } from './Homework3/menu/menu.component';
import { BannerComponent } from './Homework3/banner/banner.component';
import { CollectionComponent } from './Homework3/collection/collection.component';
import { DownloadComponent } from './Homework3/download/download.component';
import { BlogComponent } from './Homework3/blog/blog.component';
import { FooterComponent } from './Homework3/footer/footer.component';
import { HmComponent } from './Homework3/hm/hm.component';


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
    TodolistComponent,
    HeaderComponent,
    MenuComponent,
    BannerComponent,
    CollectionComponent,
    DownloadComponent,
    BlogComponent,
    FooterComponent,
    HmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
