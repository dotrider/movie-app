import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../movies';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {
  //gets value from movies -movie selected then it
  //allow us to pass movie into our html movie-info
  @Input() movie: Movie;

  constructor() { }

  ngOnInit(): void {
  }

}
