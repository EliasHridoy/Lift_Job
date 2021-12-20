import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailaddress:string;
  password:string;
  constructor() { 
    this.emailaddress = '';
    this.password = '';
  }

  ngOnInit(): void {
  }

    login(){
        if(this.emailaddress.toLocaleLowerCase() =="admin@mail.com" && this.password=="1"){
            localStorage.setItem("role", "admin");
        }
        else if(this.emailaddress =="client@mail.com" && this.password=="1"){
          localStorage.setItem("role", "client");
        }
        else{
          localStorage.setItem("role", "public");
        }
    }

}
