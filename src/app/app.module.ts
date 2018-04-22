// Angular Modules
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

// Ngx Bootstrap Modules
import {AccordionModule} from 'ngx-bootstrap/accordion';
import {AlertModule} from 'ngx-bootstrap/alert';
import {CarouselModule} from 'ngx-bootstrap/carousel';

// App Modules

// App Common Components

// App Core Components
import {AppComponent} from './app.component';
import {HomeComponent} from './core/home/home.component';
import {PaxComponent} from './core/static/pax/pax.component';
import {HttpClientModule} from '@angular/common/http';
import {AuthModule} from './core/auth/auth.module';
import {AuthGuard} from './core/auth/auth.guard';
import {AuthService} from './core/auth/auth.service';
import {NavbarLayoutComponent} from './shared/layouts/navbar/navbar.layout';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaxComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AccordionModule.forRoot(),
    AlertModule.forRoot(),
    CarouselModule.forRoot(),
    CommonModule,
    SharedModule,
    AuthModule,
    RouterModule.forRoot([
      {
        path: '',
        component: NavbarLayoutComponent,
        children: [
          {
            path: '',
            component: HomeComponent
          },
        ]
      },
      {
        path: '',
        component: NavbarLayoutComponent,
        children: [
          {
            path: 'pax',
            component: PaxComponent,
            canActivate: [AuthGuard]
          },
        ]
      }
    ]),
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
