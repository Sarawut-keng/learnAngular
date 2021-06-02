import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CategorymenuComponent } from '../categorymenu/categorymenu.component';
import { TopbannerComponent } from '../topbanner/topbanner.component';

@Component({
  selector: 'app-home',
  template: `
    <div class="nav">
        <app-navbar></app-navbar>
    </div>
    <div class="banner">
        <app-topbanner></app-topbanner>
    </div>
    <div class="menu">
        <app-categorymenu></app-categorymenu>
    </div>
  `,
  styles: [`
    .nav {
      background-image: linear-gradient(#E24E3B, #EC6F43);
      width: 100%;
      height: 100px;
      text-align:center;
    }
    .banner {
      text-align: center;
      background-color: #E24E3B;
      width: 80%;
      height: 100px;
      margin-left: 10%;
    }
    .menu {
      text-align: center;
      background-color: lightblue;
      width: 80%;
      height: 70px;
      margin-left:10%;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
