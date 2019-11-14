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
  newTask: any;
  editTask: any;
  editTog: boolean = false;

  constructor(private _httpService: HttpService) {

  }
  ngOnInit() {
      this._httpService.getTasks().subscribe(data => {
        console.log('tasks', data);
        this.tasks = data as any;
      });
  }

  onSubmit(event: Event, form:NgForm) {
    event.preventDefault();
    this._httpService.addTask(this.task).subscribe(data => {
      this.tasks.push(data);
      this.task = new Task();

      form.reset();
      console.log('running on submit', this.tasks);
    });

  }

  onSelect(task: Task) {
    console.log('selecting task', task);
    if (this.selectedTask === task) {
      this.selectedTask = null;
    } else {
      this.selectedTask = task;
    }
  }
  editForm(task) {
    this.editTask = {_id: task._id, title: task.title, description: task.description}
    this.editTog = true;
  }

  onEdit() {
    console.log('this task', this.editTask);
    this._httpService.editTask(this.editTask).subscribe((data: any) => {
      this.editTog = false;
      for (let index = 0; index < this.tasks.length; index++) {
        const task = this.tasks[index];
        if (task._id === data._id) {
          this.tasks[index] = data;
          break;
        }
      }
    });
  }
  onDelete(task) {
    this._httpService.deleteTask(task).subscribe(data => {
      console.log('Delete');
      this.tasks = data as any;
  });
}
}

