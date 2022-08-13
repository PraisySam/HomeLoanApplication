import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  login: Login;

  
  emailId:String="";
  secQues:String="";
  secAns:String="";
  password:String="";
  confirmPassword:String="";
  valid:boolean= false;
  valid1:boolean= false;
  array:any;

  constructor(private lservice: LoginService, private router: Router) {
    this.login=new Login();
   }

  ngOnInit(): void {
  }

  validEmail(EmailForm:any){

    this.emailId= EmailForm.value.emailId;

    this.lservice.findbyEmail(this.emailId).subscribe
    (
      (data)=>{
        console.log(data);
        
        if(data)
        {
          alert("Valid");
          const array = [];
          array.push(data);
          this.array= array;
          this.valid=true;
          
        }
        else{
          alert("Invalid EmailId");
          //this.router.navigate(['login']);

        }
      },
      (error)=>{
        console.log(error);
        alert("invalid email Id");
      }
    )
    }

  hello(securityForm:any){

    this.emailId= this.array[0].emailId;
    this.secQues= this.array[0].secQues;
    console.log(this.emailId);
    this.secAns= securityForm.value.secAns;


    this.lservice.security(this.emailId,this.secQues, this.secAns).subscribe
    (
      (data)=>{
        console.log(data);
        
        if(data)
        {
          alert("Now reset your Password");
          this.valid1= true;
          
          
        }
        else{
          alert("Incorrect Information");
          //this.router.navigate(['login']);

        }
      },
      (error)=>{
        console.log(error);
        alert("Invalid email Id");
      }
    )
    }


    reset(passForm:any){

      //this.emailId= this.array[0].emailId;
      //this.secQues= this.array[0].secQues;
      console.log(this.emailId);
      //this.secAns= this.array[0].value.secAns;

      this.emailId=passForm.value.emailId;
      this.password=passForm.value.password;
      this.confirmPassword=passForm.value.confirmPassword;
  
      this.lservice.resetpass(this.emailId,this.secQues, this.secAns, this.password, this.confirmPassword).subscribe
      (
        (data)=>{
          console.log(data);
          
          if(data)
          {
            alert("Password reset!");
            this.router.navigate(['login']);
            
          }
          else{
            alert("Invalid EmailId");
  
          }
        },
        (error)=>{
          console.log(error);
          alert("Invalid email Id");
        }
      )
      }
  }
