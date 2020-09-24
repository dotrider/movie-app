import { Injectable } from '@angular/core';
import { Movie } from './movies';
import { InMemoryDbService } from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  createDb() {
  const movies = [
    {
      id:2, 
      title: 'The Dark Knight', 
      description: 'goes here', 
      averageRating: 5, 
      myRating: 5, 
      comments: 'Best movie Ever!',
      img: 'https://imgc.allpostersimages.com/img/print/u-g-F9KMWE0.jpg?w=550&h=550&p=0' 
    },
    {
      id:3, 
      title: 'Iron Man', 
      description: 'goes here', 
      averageRating: 5, 
      myRating: 5, 
      comments: 'Best movie Ever!',
      img: 'https://www.joblo.com/assets/images/oldsite/posters/images/full/2008-iron_man-4.jpg'
    },
    {
      id:4, 
      title: 'Avengers: Endgame', 
      description: 'goes here', 
      averageRating: 5, 
      myRating: 5, 
      comments: 'Best movie Ever!',
      img: 'https://imgc.allpostersimages.com/img/print/u-g-F9I5HL0.jpg?w=550&h=550&p=0' 
    },
    {
      id:5, 
      title: 'Black Panther', 
      description: 'goes here', 
      averageRating: 5, 
      myRating: 5, 
      comments: 'Best movie Ever!' ,
      img: 'https://imgc.allpostersimages.com/img/print/u-g-F977B00.jpg?w=550&h=550&p=0'
    },
    {
      id:6, 
      title: 'The Irishman', 
      description: 'goes here', 
      averageRating: 5, 
      myRating: 5, 
      comments: 'Best movie Ever!',
      img: 'https://imgc.allpostersimages.com/img/print/u-g-F9JL5W0.jpg?w=550&h=550&p=0' 
    },
    {
      id:7, 
      title: 'Logan', 
      description: 'goes here', 
      averageRating: 5, 
      myRating: 5, 
      comments: 'Best movie Ever!' ,
      img: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/2f7d704531a19b038111332f50108bbc_26e2f23e-b397-4711-b653-2a750e8fe901_480x.progressive.jpg?v=1573595025'
    },
    {
      id:8, 
      title: 'The Pursuit of Happyness', 
      description: 'goes here', 
      averageRating: 5, 
      myRating: 5, 
      comments: 'Best movie Ever!',
      img: 'https://imgc.allpostersimages.com/img/print/u-g-F4JASM0.jpg?w=550&h=550&p=0' 
    },
    {
      id:9, 
      title: 'The Incredibles 2', 
      description: 'goes here', 
      averageRating: 5, 
      myRating: 5, 
      comments: 'Best movie Ever!' ,
      img: 'https://imgc.allpostersimages.com/img/print/u-g-F9DGUP0.jpg?w=550&h=550&p=0'
    },
    {
      id:10, 
      title: 'Avatar', 
      description: 'goes here', 
      averageRating: 5, 
      myRating: 5, 
      comments: 'Best movie Ever!' ,
      img: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/49dd960dd7b6ffa281fa226aa8ff7d27_155da653-f960-4df3-9610-722dbd8339b2_480x.progressive.jpg?v=1573593935'
    },

];

return {movies};
  }


  //generates id
  genId(movies: Movie[]): number {
    return movies.length > 0 ? Math.max(...movies.map(movie => movie.id)) + 1 : 1;
  }


}
