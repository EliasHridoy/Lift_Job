import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobModel } from 'src/app/model/job';
import {JobService} from 'src/app/services/job.service';


@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
jobs:JobModel[] = [];
admin:boolean;
client:boolean;

  constructor(private router:Router, private _job : JobService) { 
    this.admin = false;
    this.client = false;
    if(localStorage.getItem("role") == "admin"){
      this.admin = true;
    }
    else if(localStorage.getItem("role") == "client"){
      this.client = true;
    }
  }

  ngOnInit(): void {
    this._job.GetTasks().subscribe((jobList)=>{
      this.jobs = jobList;
    })
  }



}
