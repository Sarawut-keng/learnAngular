import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab4component',
  template: `
    <div>
      <ul>
        <li *ngFor="let item of arr">
          <p class="even" *ngIf="item % 2 == 0">{{ item }}</p>
          <p class="odd" *ngIf="item % 2 != 0">{{ item }}</p>
        </li>
      </ul>
    </div>
  `,
  styles: [`

    .even {
      color: green;
    }
    .odd {
      color: red;
    }
  `]
})
export class Lab4componentComponent implements OnInit {

  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor() { }

  ngOnInit(): void {
  }

}
