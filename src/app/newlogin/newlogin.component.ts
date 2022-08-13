import { Component, OnInit } from '@angular/core';

import { Login } from '../login';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-newlogin',
  templateUrl: './newlogin.component.html',
  styleUrls: ['./newlogin.component.css']
})
export class NewloginComponent implements OnInit {


  secQ = ["Fav Game", " First School", "Pet Name"]

  login: Login;
  e1: String = "";
  errorresult: boolean = true;

  addResult: boolean = true;
  constructor(private lservice: LoginService, private router: Router) {
    this.login = new Login();
  }

  ngOnInit(): void {
  }


  addUser(NewLoginForm: any) {

    console.log(NewLoginForm.value);

    this.login = NewLoginForm.value;

    if (NewLoginForm.value.password !== NewLoginForm.value.confirmPassword) {
      console.log(NewLoginForm.value.password);
      this.e1 = "Passwords donot match"
      this.errorresult = false
    }
    else {
      this.errorresult = true
      this.e1 = ""
    }

    if (this.errorresult == true) {
      this.lservice.addnewlogin(this.login).subscribe
        (
          (data) => {
            console.log(data);
            if (data) {
              alert("Welcome to Home Loan Apllication");
              this.router.navigate(['home']);
            }

          },
          (error) => {
            console.log(error);
          }


        )
    }


    else {
      alert("invalid ID or Email");

    }




  }
}