import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorymenu',
  template: `
    <p>
      categorymenu works!
    </p>
  `,
  styles: [`
    p {
      padding-top: 25px;
    }
  `
  ]
})
export class CategorymenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
