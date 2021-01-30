import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { SwiperModule } from 'swiper/angular'


@NgModule({
  declarations: [NavbarComponent, SlideshowComponent],
  exports: [NavbarComponent, SlideshowComponent],
  imports: [
    CommonModule,
    RouterModule,
    SwiperModule
  ]
})
export class ComponentsModule { }
