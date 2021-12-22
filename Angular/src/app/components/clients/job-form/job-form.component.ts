import { Component, OnInit } from '@angular/core';
import {JobModel} from '../../../model/job';
import {JobService} from 'src/app/services/job.service';


@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.css']
})
export class JobFormComponent implements OnInit {
  jobs: JobModel[] = [];
  id: number;
  title: string;
  location: string;
  salaryMin: number;
  salaryMax: number;
  tags: string;
  
  constructor(private _job : JobService) { 
    this.id =0;
    this.title= '';
    this.location= '';
    this.salaryMin= 0;
    this.salaryMax= 0;
    this.tags= ''
  }

  ngOnInit(): void {
  }

  onPostJob(){
    if(this.id==0){
      this.AddJob();
    }
    else{

    }
  }

  AddJob(){
    const newJob = {
      title : this.title,
      location : this.location,
      salaryMin : this.salaryMin,
      salaryMax : this.salaryMax,
      tags : this.tags,
      date : new Date().toString() 
    }
    this._job.AddTask(newJob).subscribe((job)=>(this.jobs.push(job)));
    alert("Add Success");
    this.clearForm();
  }

  UpdateJob(){

  }

  clearForm(){
    this.id =0;
    this.title= '';
    this.location= '';
    this.salaryMin= 0;
    this.salaryMax= 0;
    this.tags= ''
  }
  

}
