import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../components/partials/shared.module';
import { DefaultButtonComponent } from '../components/partials/default-button/default-button.component';


@NgModule({
  declarations: [
    LoginComponent, RegisterComponent, DefaultButtonComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AuthModule { }
