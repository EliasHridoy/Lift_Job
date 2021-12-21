import { Injectable } from '@angular/core';
import {JobModel} from "../model/job";
import {Observable} from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private apiUrl = 'http://localhost:5000/jobs';
  constructor(private _http: HttpClient) { }

  GetTasks(): Observable<JobModel[]>{
    return this._http.get<JobModel[]>(this.apiUrl);
  }
  DeleteTask(task:JobModel): Observable<JobModel>{
    const url = `${this.apiUrl}/${task.id}`;
    return this._http.delete<JobModel>(url);
  }
  UpdateTask(task:JobModel):Observable<JobModel>{
    const url = `${this.apiUrl}/${task.id}`;
    return this._http.put<JobModel>(url,task, httpOptions)
  }
  AddTask(Task:JobModel):Observable<JobModel>{
    return this._http.post<JobModel>(this.apiUrl,Task)
  }
}
