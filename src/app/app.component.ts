import { Component } from '@angular/core';



type movie = {
  name: string,
  available: number
}

type moviesType = Array<movie>;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title: string = 'Películas';
  buttonAvailable: boolean = false;

  movies: moviesType = [
    { name: 'Vengadores', available: 3 },
    { name: 'Campeones', available: 2 }
  ];


  constructor() {
    console.log(this.movies);
  }

  removeMovie(movie: movie) {
    movie.available -= 1;
  }

  addMovie(movie: movie) {
    movie.available += 1;
  }



}


