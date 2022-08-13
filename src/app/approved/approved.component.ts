import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-approved',
  templateUrl: './approved.component.html',
  styleUrls: ['./approved.component.css']
})
export class ApprovedComponent implements OnInit {
  approvedArray:any;
  constructor(private aservice:AdminService) { }

  ngOnInit(): void {
    this.aservice.getAllApproved().subscribe(
      (data)=>{
        console.log(data);
        this.approvedArray=data;
        console.log(this.approvedArray);
      }, (error)=>{
        console.log(error)
      }
    )
  }

}
