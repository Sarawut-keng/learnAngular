import { Component, Input, OnInit, QueryList, ViewChildren, NgModule } from '@angular/core';
import { Task } from '../task';
import { TaskComponent } from '../task/task.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  @ViewChildren(TaskComponent)
  todolist!: QueryList<TaskComponent>;

  public tasks: Task[] = [];
  public id: number = 1;
  public name!: string;
  public description!: string;

  addTask() {
    if (this.name == '') {
    } else {
      this.tasks.push({
        id: this.id,
        name: this.name,
        description: this.description
      });
      this.id += 1;
      this.name = '';
      this.description = '';
    };
    this.name = '';
    this.description = '';
  }

  deleteTask(task: Task) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].id == task.id) {
        this.tasks.splice(i, 1);
      };
    };
  };

  constructor() {
    this.tasks.push({
      id: 1,
      name: "bas",
      description: "none"
    })
  }

  ngOnInit(): void {
  }

}
