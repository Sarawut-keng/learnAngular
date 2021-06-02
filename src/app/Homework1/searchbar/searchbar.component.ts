import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  template: `
    <p>
      searchbar works!
    </p>
  `,
  styles: [`
    p {
      padding-top: 5px;
    }
  `]
})
export class SearchbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
