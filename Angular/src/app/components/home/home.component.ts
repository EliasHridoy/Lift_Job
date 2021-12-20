import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  admin:boolean;
  client:boolean;
  
    constructor() { 
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
