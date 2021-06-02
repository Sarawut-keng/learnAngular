import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counting',
  templateUrl: './counting.component.html',
  styleUrls: ['./counting.component.css']
})
export class CountingComponent implements OnInit {
  
  count = 0;

  countNumber() {
    this.count += 1;
  }

  reduceNumber() {
    this.count -= 1;
  }

  resetNumber() {
    this.count = 0;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
