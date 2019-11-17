import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './models/task';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
    this.getTasks();
   }
   getTasks(): Observable<Task[]> {
    console.log('retrieving tasks');
    return this._http.get<Task[]>('/tasks');
   }
   getTasksById(id: string): Observable<Task> {
    return this._http.get<Task>(`/tasks/${id}`);
  }

  addTask(newtask): Observable<Task> {
    return this._http.post<Task>('/tasks', newtask);
  }

  editTask(editTask): Observable<Task> {
    return this._http.put<Task>(`/tasks/${editTask._id}`, editTask);
  }

  deleteTask(task): Observable<Task> {
    return this._http.delete<Task>(`/tasks/${task._id}`);
  }
}
