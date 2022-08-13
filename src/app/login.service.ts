import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl="http://localhost:8088/api/rest";
  constructor( private http:HttpClient) { }

  addnewlogin(login: Login)
  {
    return this.http.post(this.baseUrl+"/newlogin", login)
  }

  login(emailId: String, password:String)
  {
    return this.http.get(this.baseUrl+"/loginbyemail/"+ emailId +"/" +password)
  }

  // forgetpassword
  findbyEmail(emailId:String)
  {
    return this.http.get(this.baseUrl+"/loginbyemail/"+ emailId)
  }
  security(emailId:String, secQues:String, secAns:String)
  {

    const request= {emailId, secQues, secAns};
    return this.http.post(this.baseUrl+"/security",request)
  }
  resetpass(emailId:String, secQues:String, secAns:String, confirmPassword:String, password:String)
  {

    const request= {emailId, secQues, secAns, password, confirmPassword};
    return this.http.post(this.baseUrl+"/forgetpassword",request)
  }

}
