import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  admin:boolean;
client:boolean;

  constructor(private router:Router) { 
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
    
  }

}
