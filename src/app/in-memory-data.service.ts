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
      description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.", 
      averageRating: 5, 
      myRating: 5, 
      comments: 'Best movie Ever!',
      img: 'https://imgc.allpostersimages.com/img/print/u-g-F9KMWE0.jpg?w=550&h=550&p=0' 
    },
    {
      id:3, 
      title: 'Iron Man', 
      description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.", 
      averageRating: 2, 
      myRating: 2, 
      comments: 'Best movie Ever!',
      img: 'https://www.joblo.com/assets/images/oldsite/posters/images/full/2008-iron_man-4.jpg'
    },
    {
      id:4, 
      title: 'Avengers: Endgame', 
      description: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.", 
      averageRating: 2, 
      myRating: 2, 
      comments: 'Best movie Ever!',
      img: 'https://imgc.allpostersimages.com/img/print/u-g-F9I5HL0.jpg?w=550&h=550&p=0' 
    },
    {
      id:5, 
      title: 'Black Panther', 
      description: "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.", 
      averageRating: 1, 
      myRating: 1, 
      comments: 'Best movie Ever!' ,
      img: 'https://imgc.allpostersimages.com/img/print/u-g-F977B00.jpg?w=550&h=550&p=0'
    },
    {
      id:6, 
      title: 'The Irishman', 
      description: 'An old man recalls his time painting houses for his friend, Jimmy Hoffa, through the 1950-70s.', 
      averageRating: 3, 
      myRating: 3, 
      comments: 'Best movie Ever!',
      img: 'https://imgc.allpostersimages.com/img/print/u-g-F9JL5W0.jpg?w=550&h=550&p=0' 
    },
    {
      id:7, 
      title: 'Logan', 
      description: "In a future where mutants are nearly extinct, an elderly and weary Logan leads a quiet life. But when Laura, a mutant child pursued by scientists, comes to him for help, he must get her to safety.", 
      averageRating: 4, 
      myRating: 4, 
      comments: 'Best movie Ever!' ,
      img: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/2f7d704531a19b038111332f50108bbc_26e2f23e-b397-4711-b653-2a750e8fe901_480x.progressive.jpg?v=1573595025'
    },
    {
      id:8, 
      title: 'The Pursuit of Happyness', 
      description: "A struggling salesman takes custody of his son as he's poised to begin a life-changing professional career.", 
      averageRating: 5, 
      myRating: 5, 
      comments: 'Best movie Ever!',
      img: 'https://imgc.allpostersimages.com/img/print/u-g-F4JASM0.jpg?w=550&h=550&p=0' 
    },
    {
      id:9, 
      title: 'The Incredibles 2', 
      description: "The Incredibles hero family takes on a new mission, which involves a change in family roles: Bob Parr (Mr Incredible) must manage the house while his wife Helen (Elastigirl) goes out to save the world.", 
      averageRating: 3, 
      myRating: 4, 
      comments: 'Best movie Ever!' ,
      img: 'https://imgc.allpostersimages.com/img/print/u-g-F9DGUP0.jpg?w=550&h=550&p=0'
    },
    {
      id:10, 
      title: 'Avatar', 
      description: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.", 
      averageRating: 4, 
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
