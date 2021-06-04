import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycomponent',
  template: `
    <p>
      mycomponent works!
    </p>
  `,
  styles: [
  ]
})
export class MycomponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
