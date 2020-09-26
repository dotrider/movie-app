import { Component, OnInit } from '@angular/core';
// import { MOVIES } from 'src/app/movies-api';
import { Movie } from '../../movies';
import { MoviesService } from './../../movies.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {

  //Movie array from api
  movies: Movie[];
  // selectedMovie: Movie;
  isVisible: boolean = false;

  constructor(
    private moviesService: MoviesService,
    private Location: Location
    ) { }



  //same as componentDidMount
  ngOnInit(): void {
    this.getMovies();
    // console.log('ngM', this.movies)
  }

  getMovies(){
    //getting movies from service asynchronously by using Observable and subscribing to it.
    this.moviesService.getMovies().subscribe(movies => this.movies = movies)
  }


  addMovie(img: string, title: string, description: string, comments: string): void {
    if(!img && !title && !description && !comments){return;};
    let newMovie: object = {img, title, description, comments};
    this.moviesService.addMovie(newMovie as Movie).subscribe(movie => {
      this.movies.push(movie);
    })
    this.Location.back();
  }

  deleteMovie(movie: Movie): void {
    // console.log('delete', movie)
    this.movies = this.movies.filter(m => m !== movie);
    this.moviesService.deleteMovie(movie).subscribe();
  }

  handleToggle(): void {
    // console.log('hitt')
     this.isVisible = !this.isVisible;
  }

}
