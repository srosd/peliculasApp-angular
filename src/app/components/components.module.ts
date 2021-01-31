import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { SwiperModule } from 'swiper/angular';
import { PeliculasPosterGridComponent } from './peliculas-poster-grid/peliculas-poster-grid.component'
import { RatingModule } from 'ng-starrating';

@NgModule({
  declarations: [NavbarComponent, SlideshowComponent, PeliculasPosterGridComponent],
  exports: [NavbarComponent, SlideshowComponent, PeliculasPosterGridComponent],
  imports: [
    CommonModule,
    RouterModule,
    SwiperModule,
    RatingModule
  ]
})
export class ComponentsModule { }
