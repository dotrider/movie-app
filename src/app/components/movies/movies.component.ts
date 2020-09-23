import { Component, OnInit } from '@angular/core';
import { MOVIES } from 'src/app/movies-api';
import { Movie } from '../../movies';
import { MoviesService } from './../../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  //Movie array from api
  movies: Movie[];
  selectedMovie: Movie;


  constructor(private moviesService: MoviesService) { }

  //same as componentDidMount
  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(){
    //getting movies from service asynchronously by using Observable and subscribing to it.
    this.moviesService.getMovies().subscribe(movies => this.movies = movies)
  }



  //click event to select movie
  handleClick(movie: Movie){
    this.selectedMovie = movie
    console.log(this.selectedMovie, 'handleClick')
  }

}
