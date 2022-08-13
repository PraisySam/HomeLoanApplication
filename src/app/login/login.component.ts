import { Component, OnInit } from '@angular/core';

import { Login } from '../login';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  UserArray:any;
  login: Login;
  emailId: String="";
  password: String="";
  addResult:boolean=true;

  constructor(private lservice: LoginService, private router: Router) { 
    this.login=new Login();
  }

  ngOnInit(): void {
  }
  
  validUser(LoginForm:any)
  {
    console.log(LoginForm.value);

    this.emailId= LoginForm.value.emailId;
    this.password= LoginForm.value.password;

    console.log(this.emailId),
    console.log(this.password);

    this.lservice.login(this.emailId, this.password).subscribe
    (
      (data)=>{
        console.log(data);
       // alert(JSON.stringify(data))
        if(data == true)
        {
          alert("Valid");
          this.router.navigate(['home']);
        }
        else{
          alert("Invalid User");
          this.router.navigate(['login']);

        }
      },
      (error)=>{
        console.log(error);
      }
    )
    }

  }

  

