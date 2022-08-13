import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-rejected',
  templateUrl: './rejected.component.html',
  styleUrls: ['./rejected.component.css']
})
export class RejectedComponent implements OnInit {

  constructor(private aservice: AdminService) { }
  rejectedArray:any;
  ngOnInit(): void {
    this.aservice.getAllRejected().subscribe(
      (data)=>{
        console.log(data);
        this.rejectedArray=data;
        console.log(this.rejectedArray);

      }, (error)=>{
        console.log(error);
      }
      
    )
  }

}
