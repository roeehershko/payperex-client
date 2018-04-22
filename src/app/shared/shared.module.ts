import {NgModule} from '@angular/core';

import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import {NavbarLayoutComponent} from './layouts/navbar/navbar.layout';
import {EmptyLayoutComponent} from './layouts/empty/empty.layout';
import {TestimonialsComponent} from './carousel/testimonials/testimonials.component';
import {WideSliderComponent} from './carousel/wide-slider/wide-slider.component';

@NgModule({
  providers: [
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    CarouselModule.forRoot(),
  ],
  declarations: [
    NavbarLayoutComponent,
    EmptyLayoutComponent,
    TestimonialsComponent,
    WideSliderComponent
  ],
  exports: [
    TestimonialsComponent,
    WideSliderComponent,
    NavbarLayoutComponent,
    EmptyLayoutComponent
  ]
})
export class SharedModule {
}
