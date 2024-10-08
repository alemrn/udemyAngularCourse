import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LayoutPagesComponent } from './pages/layoutPages/layoutPages.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    LayoutPagesComponent,
    LoginPageComponent,
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule
  ]
})
export class AuthModule { }
