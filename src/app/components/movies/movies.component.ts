import { Component, OnInit } from '@angular/core';
// import { MOVIES } from 'src/app/movies-api';
import { Movie } from '../../movies';
import { MoviesService } from './../../movies.service';
import { Location } from '@angular/common';
//holds info about the route
import { ActivatedRoute } from '@angular/router';

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
    private route: ActivatedRoute, 
    private Location: Location
    ) { }



  //same as componentDidMount
  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(){
    //getting movies from service asynchronously by using Observable and subscribing to it.
    this.moviesService.getMovies().subscribe(movies => this.movies = movies)
  }


  addMovie(img: string): void {
    if(!img){return;}
    this.moviesService.addMovie({img} as Movie).subscribe(movie => {
      this.movies.push(movie)
    })
  }

  deleteMovie(movie: Movie): void {
    // console.log('delete', movie)
    this.movies = this.movies.filter(m => m !== movie);
    this.moviesService.deleteMovie(movie).subscribe()
  }

  handleToggle(): void {
    // console.log('hitt')
     this.isVisible = !this.isVisible;
  }


  //click event to select movie
  // handleClick(movie: Movie){
  //   this.selectedMovie = movie
  //   console.log(this.selectedMovie, 'handleClick')
  // }

}
