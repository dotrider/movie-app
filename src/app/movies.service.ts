import { Injectable } from '@angular/core';
// import { MOVIES } from './movies-api';
//schema
import { Movie } from './movies'
//importing observable in order to manage data aynchronously
import { Observable, of } from 'rxjs';
//server
import { HttpClient, HttpHeaders } from '@angular/common/http';
//Error handling
import { catchError, map, tap } from 'rxjs/operators';
import { HasErrorState } from '@angular/material/core/common-behaviors/error-state';
import { MoviesComponent } from './components/movies/movies.component';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private http: HttpClient) { }

    private moviesUrl = 'api/movies';

  getMovies(): Observable<Movie[]>{
      // console.log('get movies hit!!')
    return this.http.get<Movie[]>(this.moviesUrl).pipe(
      catchError(this.handleError<Movie[]>('getMovies', []))
    );
  }

  getMovie(id: number): Observable<Movie>{
      // console.log('movie id', id)
      return this.http.get<Movie>(`${this.moviesUrl}/${id}`).pipe(
        catchError(this.handleError<Movie>(`getMovie id=${id}`))
      )
  }

  //The HttpClient.put() method takes three parameters:
  // URL, Item being updated, http options
  updateMovie(movie: Movie): Observable<any> {
    // console.log('update movie', movie)
    return this.http.put(this.moviesUrl, movie, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateMovie'))
    )
  }

  addMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.moviesUrl, movie, this.httpOptions).pipe(
      catchError(this.handleError<Movie>('addMovie'))
    )
  }

  deleteMovie(movie: Movie | number): Observable<Movie> {
    console.log('delete/service', movie)
    const id = (typeof movie === 'number')? movie : movie.id;

    return this.http.delete<Movie>(`${this.moviesUrl}/${id}`, this.httpOptions).pipe(
      catchError(this.handleError<Movie>('deleteMovie'))
    )
  }

  //Working on Search Feature
  searchByTitle(query: string): Observable<Movie[]>{
    console.log('searchServ title', query)
    if(!query) return of([])
    return this.http.get<Movie[]>(`${this.moviesUrl}/?title=${query}`).pipe(
      map((response: any) => {   
       return response})
      // catchError(this.handleError<Movie[]>('getMovieByTitle'))
    )
  }

  //Error Handling *****ANGULAR DOCUMENTATION*******
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  //Http save request
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
}
