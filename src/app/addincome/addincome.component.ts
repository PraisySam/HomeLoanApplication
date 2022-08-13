import { Component, OnInit } from '@angular/core';
import { Income } from '../income';
import { IncomeserviceService } from '../incomeservice.service';

@Component({
  selector: 'app-addincome',
  templateUrl: './addincome.component.html',
  styleUrls: ['./addincome.component.css']
})
export class AddincomeComponent implements OnInit {


  
  income:Income;
  addResult:boolean=true;

  constructor(private inservice:IncomeserviceService) { 
    this.income=new Income();
  }





  ngOnInit(): void {
  }
  addIncome(incomeForm:any)
  {
      console.log(incomeForm.value);
      this.income=incomeForm.value;
      this.inservice.addNewIncome(this.income).subscribe
      (
        (data)=>{
          console.log(data);
          if(data)
            alert("income Added!");
        },
        (error)=>{
            console.log(error);
        }
      )

  }

}
