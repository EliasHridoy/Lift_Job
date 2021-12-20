import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  role:string;
  constructor() { 
    this.role = "";
    if(localStorage.getItem("role") == "admin"){
      this.role = "admin";
    }
    else if(localStorage.getItem("role") == "client"){
      this.role = 'client';
    }
    else{
      this.role = 'public';
    }
  }

  ngOnInit(): void {
  }

}
