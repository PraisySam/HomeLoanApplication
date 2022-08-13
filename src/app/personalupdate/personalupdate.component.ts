import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Homeloan } from '../homeloan';
import { HomeloanService } from '../homeloan.service';

@Component({
  selector: 'app-personalupdate',
  templateUrl: './personalupdate.component.html',
  styleUrls: ['./personalupdate.component.css']
})
export class PersonalupdateComponent implements OnInit {

  constructor(private activeRoute:ActivatedRoute,private vservice:HomeloanService) {
    this.homeloan=new Homeloan();
   }
   homeloan:Homeloan;

  pid:number=0;
  ngOnInit(): void 
  {
        this.activeRoute.paramMap.subscribe(
          params=> {
              this.pid=Number(params.get("pid") as String);
              console.log(this.pid);
          }   
            
    )

    this.vservice.searchBypersonal_Id(this.pid).subscribe
    (
      (data)=>{
          console.log(data);
          this.homeloan=data as Homeloan;
          console.log(this.homeloan);
      }
    )
         
  }

  updatePersonal(homeloanForm:any)
  {
    console.log(homeloanForm.value);
    this.homeloan=homeloanForm.value;
    this.vservice.updatePersonal(this.homeloan).subscribe
    (
      (data)=>{
        console.log(data);
        if(data)
          alert("personal updated!");
      },
      (error)=>{
          console.log(error);
      }
    )
  }
   

}
