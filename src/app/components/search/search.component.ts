import { Component, OnInit } from '@angular/core';
import { Movie } from '../../movies';
import { MoviesService } from './../../movies.service';
import { Observable, Subject } from 'rxjs';
import { distinctUntilChanged, debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    movies$: Observable<Movie[]>;

    

  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit(): void {

  }

  //Working on search feature
  searchByTitle(query: string): void {
    console.log('searchComp', query)
      this.movies$ = this.moviesService.searchByTitle(query)
   
  }



}
