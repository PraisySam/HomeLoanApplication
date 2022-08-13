import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from '../admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Adminlogin } from '../adminlogin';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor( private aservice: AdminService, private router: Router) { }
  email: String="";
  password: String=""; 
  ngOnInit(): void {
  }

  adminLogin(form:NgForm){
      console.log(form.value);
      console.log("Load the Admin")
      
      this.email=form.value.email;
      this.password= form.value.password;
      this.aservice.findAdminbyUserName(this.email,this.password).subscribe(
        (data)=>{
          console.log(data)
          if(data == true){
            alert("Access Granted")
            this.router.navigate(['/admindashboard'])
          }
          else{
            
              alert("Invalid User!!!");
              this.router.navigate(['/adminlogin'])

            }
          
          }, (error)=>{
            console.log(error);
        }
          
        
      )
  }

}
