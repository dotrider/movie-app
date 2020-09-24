import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../movies';
import { MoviesService } from '../../movies.service';
import { Location } from '@angular/common';
//holds info about the route
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})


export class MovieInfoComponent implements OnInit {
  //gets value from movies -movie selected then it
  //allow us to pass movie into our html movie-info
  
  movie: Movie;

  constructor(
    private route: ActivatedRoute, 
    private moviesService: MoviesService,
    private Location: Location
    ) { }

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.moviesService.getMovie(id).subscribe(movie => this.movie = movie)
  }

  goBack(): void {
    // console.log(this.Location,'location')
    this.Location.back()
  }

  updateMovie(): void {
    this.moviesService.updateMovie(this.movie)
      .subscribe(() => this.goBack());
  }


}
