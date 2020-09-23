import { Component, OnInit } from '@angular/core';
import { MOVIES } from 'src/app/movies-api';
import { Movie } from '../../movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  //Movie array from api
  movies = MOVIES;
  selectedMovie: Movie;

  constructor() { }

  ngOnInit(): void {
  }

  //click event to select movie
  handleClick(movie: Movie){
    this.selectedMovie = movie
    console.log(this.selectedMovie, 'handleClick')
  }

}
