import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FaqComponent } from './faq/faq.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { NewloginComponent } from './newlogin/newlogin.component';

import { AddincomeComponent } from './addincome/addincome.component';
import { DocumentuploadComponent } from './documentupload/documentupload.component';
import { IncomeupdateComponent } from './incomeupdate/incomeupdate.component';
import { PersonalupdateComponent } from './personalupdate/personalupdate.component';
import { ShowdetailsComponent } from './showdetails/showdetails.component';
import { PersonaldetailComponent } from './personaldetail/personaldetail.component';
import { AppComponent } from './app.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';

import { PendingComponent } from './pending/pending.component';
import { ApprovedComponent } from './approved/approved.component';
import { RejectedComponent } from './rejected/rejected.component';
import { UpdatestatusComponent } from './updatestatus/updatestatus.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';



const routes: Routes = [
  {path:'newlogin' ,component:NewloginComponent},
  {path:'login' ,component:LoginComponent},
  {path:'forgotpass' ,component:ForgotpasswordComponent},
  {path:'home',component:HomeComponent},
  {path:'calculator',component:CalculatorComponent},
  {path:'about', component:AboutComponent},
  {path:'faq', component:FaqComponent},
  {path:'', component:MainComponent},

  {path:'fillaplication/addpersonal' ,component:PersonaldetailComponent},
  {path:'fillaplication/showpersonal',component:ShowdetailsComponent},
  {path:'fillaplication/addincome',component:AddincomeComponent},
  {path:'fillaplication/documentupload',component:DocumentuploadComponent},
  {path:'personalupdate/:pid',component:PersonalupdateComponent},
  {path:'incomeupdate/:iid',component:IncomeupdateComponent},
  {path:'fillaplication', component:UserdashboardComponent},


  {path:'admindashboard/pending', component:PendingComponent},
  {path:'admindashboard/approved',component:ApprovedComponent},
  {path:'admindashboard/rejected', component:RejectedComponent},
  {path:'updatestatus/:app_id', component:UpdatestatusComponent},
  {path:'admindashboard', component:AdmindashboardComponent},
  { path:'adminlogin', component:AdminloginComponent},

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
