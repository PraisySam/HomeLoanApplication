import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {

  constructor(private aservice:AdminService) { }
  pendingArray:any;
  ngOnInit(): void {
    this.aservice.getAllPending().subscribe(
      (data)=>{
        console.log(data);
        this.pendingArray=data;
        console.log(this.pendingArray);
      },
      (error)=>{
        console.log(error);

      }
    )
  }
}
  
  


