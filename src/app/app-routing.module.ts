import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AuthLayoutComponent } from './components/layouts/auth-layout/auth-layout.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { SiteLayoutComponent } from './components/layouts/site-layout/site-layout.component';
import { UsersPageComponent } from './components/users-page/users-page.component';
import { authGuard } from './auth.guard';
import { AddUserComponentComponent } from './components/add-user-component/add-user-component.component';
import { CustomersPageNewComponent } from './components/customers-page-new/customers-page-new.component';

const routes: Routes = [

  {
    path: '', component: AuthLayoutComponent, children: [
      {path: '', redirectTo: '/login', pathMatch: 'full'},
      {path: 'login', component: LoginPageComponent},
      {path: 'registration', component: RegistrationPageComponent}
    ]
  },
  {
    path: '', component: SiteLayoutComponent, children: [
      {path: '', redirectTo: '/users', pathMatch: 'full'},
      {path: 'users', component: UsersPageComponent, canActivate:[authGuard]},
      {path: 'customers', component: CustomersPageNewComponent},
      {path: 'adduser', component: AddUserComponentComponent},

    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
