import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule} from '@angular/router';
import {HttpModule} from "@angular/http"

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShowdataComponent } from './showdata/showdata.component';
import { NewuserComponent } from './newuser/newuser.component';
import { FormsModule } from '@angular/forms';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { SalaryPipe } from './salary.pipe';



const ROUTES=[
  {path:"" , component:HomeComponent},
  {path:"showdata",component:ShowdataComponent},
  {path:"newuser",component:NewuserComponent},
  {path:"updateuser/:id",component:UpdateuserComponent},
  
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShowdataComponent,
    NewuserComponent,
    UpdateuserComponent,
    SalaryPipe
  ],
  imports: [
    HttpModule,
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
