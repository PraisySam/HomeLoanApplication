import { Component, OnInit } from '@angular/core';
import { Homeloan } from '../homeloan';
import { ActivatedRoute } from '@angular/router';
import { HomeloanService } from '../homeloan.service';
import { IncomeserviceService } from '../incomeservice.service';
import { Subscriber } from 'rxjs';
import { Income } from '../income';

@Component({
  selector: 'app-showdetails',
  templateUrl: './showdetails.component.html',
  styleUrls: ['./showdetails.component.css']
})
export class ShowdetailsComponent implements OnInit {

  constructor(private ins:IncomeserviceService,private vservice:HomeloanService) {
    this.homeloan=new Homeloan();
    this.income=new Income();
   }
   homeloan:Homeloan;
   income:Income;

  pid:number=21;
  iid:number=18;
  ngOnInit(): void 
  {
       
    this.vservice.searchBypersonal_Id(this.pid).subscribe
    (
      (data)=>{
          console.log(data);
          this.homeloan=data as Homeloan;
          console.log(this.homeloan);
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
   
  /*showDetails()
  {
    this.vservice.searchBypersonal_Id(this.pid).subscribe
    (
      (data)=>{
          console.log(data);
          this.homeloan=data as Homeloan;
          console.log(this.homeloan);
      }
    )
  }
*/
}
