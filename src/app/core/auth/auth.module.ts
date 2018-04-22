// Angular Modules
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './auth.guard';
import {AuthService} from './auth.service';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import {SharedModule} from '../../shared/shared.module';
import {EmptyLayoutComponent} from '../../shared/layouts/empty/empty.layout';
import { FormsModule } from '@angular/forms';
import {AlertModule} from 'ngx-bootstrap/alert';
import {RegisterComponent} from './register/register.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    SharedModule,
    CarouselModule,
    AlertModule,
    RouterModule.forRoot([
      {
        path: 'auth',
        component: EmptyLayoutComponent,
        children: [
          {
            path: 'login',
            component: LoginComponent
          },
          {
            path: 'register',
            component: RegisterComponent
          },
        ]
      },
    ]),
  ],
  providers: [AuthGuard, AuthService],
})

export class AuthModule { }
