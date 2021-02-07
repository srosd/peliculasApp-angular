import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';
import { Movie } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  public foundMovies: Movie[] = [];
  public texto: string = '';

  constructor( private activatedRoute: ActivatedRoute,
                private pelicularService: PeliculasService ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {

      this.texto = params.texto;
      
      this.pelicularService.buscarPeliculas(params.texto).subscribe(movies => {
        this.foundMovies = movies;
      })
    })
  }

}
