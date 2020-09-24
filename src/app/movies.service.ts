import { Injectable } from '@angular/core';
import { MOVIES } from './movies-api';
//schema
import { Movie } from './movies'
//importing observable in order to manage data aynchronously
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }


  getMovies(): Observable<Movie[]>{
    return of(MOVIES);
  }

  getMovie(id: number): Observable<Movie>{
    return of(MOVIES.find(movie => movie.id === id));
  }

  // updateMovie(movie: Movie): Observable<any> {
  
  // }
}
