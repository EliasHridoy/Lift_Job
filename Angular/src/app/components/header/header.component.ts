import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
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

  logout(){
    localStorage.removeItem("role");
    this.router.navigate(['/login']);
  }

}
