import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/cartelera-response';
import SwiperCore, {Virtual, Navigation, A11y, Scrollbar} from 'swiper/core';

SwiperCore.use([Virtual, Navigation, A11y, Scrollbar]);

@Component({
  selector: 'app-slideshow',
  styleUrls: ['./slideshow.component.css'],
  template: `
  <swiper
    [slidesPerView]="1"
    [spaceBetween]="0"
    [navigation]="true"
    [scrollbar]="{ draggable: true }"
    [virtual]="true"
    
  >

  <ng-container *ngFor="let slide of movies; index as i">

      <ng-template swiperSlide >
        <div class="movie-description" [ngStyle]="{
        'background-image': 'url(https://image.tmdb.org/t/p/w500/' + slide.backdrop_path + ')'
      }">
        <div class="box">
          <h3> {{slide.title}} </h3>
          <p> {{slide.overview | slice:0:250}}... </p>
        </div>
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
  }


}
