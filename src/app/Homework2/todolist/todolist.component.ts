import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  public newTask!: string;

  public list = ["meaw"];

  addList() {
      if (this.newTask != '') {
        this.list.push(this.newTask);
        this.newTask = '';

      }
  }

  deleteList(item:string) {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i] == item) {
        this.list.splice(i, 1);
      };
    };
  };

  constructor() { }

  ngOnInit(): void {
  }

}
