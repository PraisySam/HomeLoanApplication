import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { Loantracker } from './loantracker'
import { Observable } from 'rxjs';
import { Adminlogin } from './adminlogin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseUrl="http://localhost:8088/api/rest";
  constructor(private http: HttpClient) { }

  getAllPending(){
    return this.http.get(this.baseUrl+"/loantracker/pending");
  }
  
  
  getAllApproved(){
    return this.http.get(this.baseUrl+"/loantracker/approved");
  }

 

  getAllRejected(){
    return this.http.get(this.baseUrl+"/loantracker/rejected");
  }

  searchbyApp_Id(AppId:number){
    return this.http.get(this.baseUrl+"/loantracker/pending"+AppId);
  }

  updateStatus(loan: Loantracker){
    console.log(loan);
    return this.http.put(this.baseUrl+"/loantracker/pending",loan);
  }
  
  findAdminbyUserName(email:String, password:String){
    return this.http.get(this.baseUrl+"/adminlogin"+ "/"+email+"/"+password);
  }
}
