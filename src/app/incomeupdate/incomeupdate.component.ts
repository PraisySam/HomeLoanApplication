import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Income } from '../income';
import { IncomeserviceService } from '../incomeservice.service';

@Component({
  selector: 'app-incomeupdate',
  templateUrl: './incomeupdate.component.html',
  styleUrls: ['./incomeupdate.component.css']
})
export class IncomeupdateComponent implements OnInit {


  constructor(private activeRoute:ActivatedRoute,private ins:IncomeserviceService) {
    this.income= new Income();
   }
   income:Income;

  iid:number=0;
  ngOnInit(): void 
  {
        this.activeRoute.paramMap.subscribe(
          params=> {
              this.iid=Number(params.get("iid") as String);
              console.log(this.iid);
          }   
            
    )

    this.ins.searchByincome_Id(this.iid).subscribe
    (
      (data)=>{
          console.log(data);
          this.income=data as Income;
          console.log(this.income);
      }
    )
         

}
updateIncome(incomeForm:any)
{
  this.income=incomeForm.value;
  console.log(this.income);
  this.ins.updateIncome(this.income).subscribe
  (
    (data)=>{
      console.log(data);
      if(data)
        alert("Updated");

    },
    (error)=>{
      console.log(error);
    }
    
  )
  
}

}
