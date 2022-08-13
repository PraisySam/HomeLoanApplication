import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Homeloan } from './homeloan';

@Injectable({
  providedIn: 'root'
})
export class HomeloanService {

  baseUrl="http://localhost:8088/api/rest";

  constructor(private http:HttpClient) { }

 
  addNewVehicle(Homeloan:Homeloan)
  {
      return this.http.post(this.baseUrl+"/personal",Homeloan);
  }
  
  searchBypersonal_Id(personal_Id:number) //FETCH BY NO
  {
      return this.http.get(this.baseUrl+"/personal/"+personal_Id);
  }

  updatePersonal(Homeloan:Homeloan)
  {
    return this.http.put(this.baseUrl+"/personal/",Homeloan);
  }
  

}
