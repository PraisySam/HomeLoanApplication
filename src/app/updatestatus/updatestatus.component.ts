import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AdminService } from '../admin.service';
import { Loantracker } from '../loantracker';

@Component({
  selector: 'app-updatestatus',
  templateUrl: './updatestatus.component.html',
  styleUrls: ['./updatestatus.component.css']
})
export class UpdatestatusComponent implements OnInit {
  statusArray:string[]=['Pending','Approved','Rejected'];
  app_id:any;
  loan:Loantracker;
  status:any;
  constructor(private activeRoute: ActivatedRoute, private aservice:AdminService) { 
    this.loan= new Loantracker;
  }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(
      params=>{
        this.app_id=params.get("app_id");
        console.log(this.app_id)

      }
    )
    console.log(this.app_id);
      this.aservice.searchbyApp_Id(this.app_id).subscribe(
        (data)=>{
          console.log(data);
          this.loan=data as Loantracker;
          console.log(this.loan);
        }
      )
  }

  updateStatus(){
     // this.loan=updateStatusForm.value;
     // console.log(this.loan);
     // console.log(this.loan.app_id)
        console.log(this.app_id);
        console.log(this.status);
        this.loan.appId=this.app_id;
        this.loan.status=this.status;
        console.log(this.loan);
      this.aservice.updateStatus(this.loan).subscribe(
        (data)=>{
          
          console.log(data);
          

        }, (error)=>{
        
          console.log(error);
        }
      )
  }

}
