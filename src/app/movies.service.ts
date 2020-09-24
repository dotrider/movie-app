import { Injectable } from '@angular/core';
import { MOVIES } from './movies-api';
//schema
import { Movie } from './movies'
//importing observable in order to manage data aynchronously
import { Observable, of } from 'rxjs';
//server
import { HttpClient, HttpHeaders } from '@angular/common/http';
//Error handling
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private http: HttpClient) { }

    private moviesUrl = 'api/movies';

  getMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>(this.moviesUrl).pipe(
      catchError(this.handleError<Movie[]>('getMovies', []))
    );
  }

  getMovie(id: number): Observable<Movie>{
      return this.http.get<Movie>(`${this.moviesUrl}/${id}`).pipe(
        catchError(this.handleError<Movie>(`getMovie id=${id}`))
      )
  }

  // updateMovie(movie: Movie): Observable<any> {
  
  // }


  //Error Handling *****ANGULAR DOCUMENTATION*******
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
