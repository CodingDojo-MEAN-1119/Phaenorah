import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { NgForm } from '@angular/forms';

import { Task } from './models/task';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  task = new Task();
  tasks: Task[] = [];
  selectedTask: Task;

  constructor(private _httpService: HttpService) {

  }
  ngOnInit() {
  }

  getTasksFromService() {
    this._httpService.getTasks().subscribe(data => {
      console.log('all_tasks', data);
      this.tasks = data as any;
    });
  }

  onSelect(task: Task) {
    if (this.selectedTask === task) {
      this.selectedTask = null;
    } else {
      this.selectedTask = task;
    }
  }
}

