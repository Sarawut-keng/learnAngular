import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input()
  task!: Task;

  @Output()
  OnDeleted: EventEmitter<Task> = new EventEmitter();

  isDeleted!: boolean;

  constructor() { 
  }

  ngOnInit(): void {
  }


  delete() {
    this.OnDeleted.emit(this.task);
  };

}
