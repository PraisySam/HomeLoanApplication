import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NewloginComponent } from './newlogin/newlogin.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FaqComponent } from './faq/faq.component';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';

import { PersonaldetailComponent } from './personaldetail/personaldetail.component';
import { PersonalupdateComponent } from './personalupdate/personalupdate.component';
import { PersonalsearchComponent } from './personalsearch/personalsearch.component';
import { ShowdetailsComponent } from './showdetails/showdetails.component';
import { AddincomeComponent } from './addincome/addincome.component';
import { IncomeupdateComponent } from './incomeupdate/incomeupdate.component';
import { DocumentuploadComponent } from './documentupload/documentupload.component';


import { PendingComponent } from './pending/pending.component';
import { ApprovedComponent } from './approved/approved.component';
import { RejectedComponent } from './rejected/rejected.component';
import { UpdatestatusComponent } from './updatestatus/updatestatus.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewloginComponent,
    ForgotpasswordComponent,
    HomeComponent,
    CalculatorComponent,
    FaqComponent,
    AboutComponent,
    MainComponent,
    PersonalupdateComponent,
    PersonalsearchComponent,
    ShowdetailsComponent,
    AddincomeComponent,
    IncomeupdateComponent,
    DocumentuploadComponent,
    PersonaldetailComponent,
    PendingComponent,
    ApprovedComponent,
    RejectedComponent,
    UpdatestatusComponent,
    AdminloginComponent,
    AdmindashboardComponent,
    UserdashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
