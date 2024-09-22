import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { UsersPageComponent } from './components/users-page/users-page.component';
import { ReportsPageComponent } from './components/reports-page/reports-page.component';
import { AuthLayoutComponent } from './components/layouts/auth-layout/auth-layout.component';
import { SiteLayoutComponent } from './components/layouts/site-layout/site-layout.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import {HttpClientModule} from '@angular/common/http';
import { UserService } from './services/user.service';
import { DataService } from './services/data.service';
import { CustomersService } from './services/customers.service';
import { CustomereditComponent } from './components/customeredit/customeredit.component';
import { AddUserComponentComponent } from './components/add-user-component/add-user-component.component';
import { AddUserContent } from './components/add-user-content/add-user-content.component';
import { CustomerEditContentComponent } from './components/customeredit/customer-edit-content/customer-edit-content.component';
import { CustomerDeleteComponent } from './components/customeredit/customer-delete/customer-delete.component';
import { CustomersPageNewComponent } from './components/customers-page-new/customers-page-new.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    UsersPageComponent,
    ReportsPageComponent,
    AuthLayoutComponent,
    SiteLayoutComponent,
    RegistrationPageComponent,
    CustomersPageNewComponent,
    UpdateUserComponent,
    DeleteUserComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AddUserComponentComponent,
    AddUserContent,
    // CustomereditComponent,
    // CustomerEditContentComponent,
    // CustomerDeleteComponent,
    MatDialogModule,
  
    ],
  providers: [
    UserService,
    DataService,
    CustomersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
