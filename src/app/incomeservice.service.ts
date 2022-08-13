import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Income } from './income';

@Injectable({
  providedIn: 'root'
})
export class IncomeserviceService {

  baseUrl="http://localhost:8088/api/rest";

  constructor(private http:HttpClient) { }
   
 
  addNewIncome(income:Income)
  {
      return this.http.post(this.baseUrl+"/income",income);
  }
  
  searchByincome_Id(income_Id:number) 
  {
      return this.http.get(this.baseUrl+"/income/"+income_Id);
  }
  updateIncome(income:Income)
  {
    return this.http.put(this.baseUrl+"/income/",income);
  }
}
