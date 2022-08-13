import { Component, OnInit } from '@angular/core';
import { Homeloan } from '../homeloan';
import { HomeloanService } from '../homeloan.service';

@Component({
  selector: 'app-personaldetail',
  templateUrl: './personaldetail.component.html',
  styleUrls: ['./personaldetail.component.css']
})
export class PersonaldetailComponent implements OnInit {
 
  homeloan:Homeloan;
  addResult:boolean=true;

  constructor(private hlservice:HomeloanService) { 
    this.homeloan=new Homeloan();
  }


  ngOnInit(): void {
  }
  addPersonal(homeloanForm:any)
  {
      console.log(homeloanForm.value);
      this.homeloan=homeloanForm.value;
      this.hlservice.addNewVehicle(this.homeloan).subscribe
      (
        (data)=>{
          console.log(data);
          if(data)
            alert("personal Added!");
        },
        (error)=>{
            console.log(error);
        }
      )

  }

}
