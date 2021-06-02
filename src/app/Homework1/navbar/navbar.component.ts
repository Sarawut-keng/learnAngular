import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <div>
    <p class="nav">
      navbar works!
    </p>
    <p class="search">
      <app-searchbar></app-searchbar>
    </p>
    </div>
  `,
  styles: [`
    .search {
      background-color: white;
      width: 60%;
      margin-left: 20%;
      height: 30px;
      border-radius: 2px;
    }
    .nav {
      margin: 0;
      padding-top: 10px;
    }

  `]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
