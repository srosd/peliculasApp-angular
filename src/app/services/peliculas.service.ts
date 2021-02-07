import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { CarteleraResponse, Movie } from '../interfaces/cartelera-response';
import { MovieResponse } from '../interfaces/movie-response';
import { CreditsResponse, Cast } from '../interfaces/credits-response';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private baseUrl: string = 'https://api.themoviedb.org/3';
  private carteleraPage = 1;
  public cargando: boolean = false;

  constructor(private http: HttpClient) { }

  get params() {
    return {
      api_key: 'b70f863acb594fc30553cb1f1df72652',
      language: 'es-ES',
      page: this.carteleraPage.toString()
    }
  }

  resetPage(){
    this.carteleraPage = 1;
  }


  getCartelera(): Observable<Movie[]>{

    if(this.cargando){
      return of ([]);
    }

    this.cargando = true;

    return this.http.get<CarteleraResponse>(`${this.baseUrl}/movie/now_playing?api_key=${this.params.api_key}&language=${this.params.language}&page=${this.carteleraPage}`)
    .pipe(
      map((resp)=>{
        return resp.results;
      }),
      tap(()=>{
        this.carteleraPage+=1;
        this.cargando=false;
      })
    )
  }

  buscarPeliculas(texto: string):Observable<Movie[]>{

    const params = {...this.params, page: '1', query: texto};

    return this.http.get<CarteleraResponse>(`${this.baseUrl}/search/movie`,{
      params
    }).pipe(
      map(resp=>resp.results)
    )
  }

  getPeliculaDetalle(id: string){
    return this.http.get<MovieResponse>(`${this.baseUrl}/movie/${id}`, {
      params: this.params
    }).pipe(
      catchError(err => of(null))
    )
  }

  getCast(id: string):Observable<Cast[]>{
    return this.http.get<CreditsResponse>(`${this.baseUrl}/movie/${id}/credits`, {
      params: this.params
    }).pipe(
      map(resp => resp.cast),
      catchError(err => of([]))
    )
  }


}
