import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/cartelera-response';
import SwiperCore, {Virtual} from 'swiper/core';

SwiperCore.use([Virtual]);

@Component({
  selector: 'app-slideshow',
  styleUrls: ['./slideshow.component.css'],
  template: `
  <swiper
    [slidesPerView]="1"
    [spaceBetween]="50"
    (swiper)="onSwiper($event)"
    [navigation]="true"
    [pagination]="{ clickable: true }"
    [scrollbar]="{ draggable: true }"
    [virtual]="true"
  >

  <ng-container *ngFor="let slide of movies; index as i">

      <ng-template swiperSlide >
        <div class="movie-description" [ngStyle]="{
        'background-image': 'url(https://image.tmdb.org/t/p/w500/' + slide.backdrop_path + ')'
      }">
          <h3> {{slide.title}} </h3>
          <p> {{slide.overview | slice:0:130}}... </p>
        </div>
      </ng-template>
    </ng-container>
    

  </swiper>
`,
})
export class SlideshowComponent implements OnInit {

  @Input() movies: Movie[];
  

  constructor() {
   }

  ngOnInit(): void {
    console.log(this.movies);
  }

  onSwiper(swiper) {
    console.log(swiper);
  }

}
