import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';
import { TodolistComponent } from '../todolist/todolist.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task!: Task;

  @Output() OnDeleted: EventEmitter<Task> = new EventEmitter();
  @Output() OnSelected: EventEmitter<TaskComponent> = new EventEmitter();

  isSelected!: boolean;

  constructor() { 
  }

  ngOnInit(): void {
  }

  detail() {
    this.OnSelected.emit(this);
  }

  delete() {
    this.OnDeleted.emit(this.task);
  };

  unSelected() {
    this.isSelected = false;
  }


}
