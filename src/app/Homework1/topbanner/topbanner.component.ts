import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbanner',
  template: `
    <p>
      topbanner works!
    </p>
  `,
  styles: [`
    p {
      padding-top: 40px;
    }
  `
  ]
})
export class TopbannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
