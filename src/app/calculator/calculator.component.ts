import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  fullName: string = "Hello JavaTpoint";  

  salary:number=10000;

  loan:number=100000;
  tenure:number=12;
  interest:number=7.5;
  emi:number=0;
  rate:number=0;
  
  get sum(): number {
    // calculate your price with your formula here, 
    return 60*(0.6* this.salary);
  }

  get EMI(): number {
    this.rate= this.interest/12/100;
    var x=  Math.pow((1+this.rate),this.tenure);
    var y= Math.pow((1+this.rate), this.tenure);
    console.log(x/y);
  
    this.emi= Math.round(this.loan*this.rate*(x/(y-1)));
    return Math.round(this.loan*this.rate*(x/(y-1)));
  }
  get Amount(): number {
    this.rate= this.interest/12/100;
    var x=  Math.pow((1+this.rate),this.tenure);
    var y= Math.pow((1+this.rate), this.tenure);
    console.log(x/y);
  
    this.emi= Math.round(this.loan*this.rate*(x/(y-1)));
    return this.emi*this.tenure;
  }
  //loanAmount= 60*(0.6*this.salary);



  constructor() { 
    
  }

  ngOnInit(): void {
  }
  

}
