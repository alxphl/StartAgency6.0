import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Movie } from '../shared/movie.model';
import { MovieListService } from './movie-list.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit, OnDestroy {
  movies: Movie[];
  private subscription: Subscription;

  constructor(private slService: MovieListService) { }

  ngOnInit() {
    this.movies = this.slService.getMovies();
    this.subscription = this.slService.moviesChanged
      .subscribe(
        (movies: Movie[]) => {
          this.movies = movies;
        }
      );
  }

  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
