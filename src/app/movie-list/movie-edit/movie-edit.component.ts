import {
    Component,
    OnInit,
    OnDestroy,
    ViewChild
  } from '@angular/core';
  import { NgForm } from '@angular/forms';
  import { Subscription } from 'rxjs';
  
  import { Movie } from '../../shared/movie.model';
  import { MovieListService } from '../movie-list.service';
  
  @Component({
    selector: 'app-movie-edit',
    templateUrl: './movie-edit.component.html',
    styleUrls: ['./movie-edit.component.css']
  })
  export class MovieEditComponent implements OnInit, OnDestroy {
    @ViewChild('f') slForm: NgForm;
    subscription: Subscription;
    editMode = false;
    editedItemIndex: number;
    editedItem: Movie;
  
    constructor(private slService: MovieListService) { }
  
    ngOnInit() {
      this.subscription = this.slService.startedEditing
        .subscribe(
          (index: number) => {
            this.editedItemIndex = index;
            this.editMode = true;
            this.editedItem = this.slService.getMovie(index);
            this.slForm.setValue({
              name: this.editedItem.name,
              year: this.editedItem.year,
              link:this.editedItem.link
            })
          }
        );
    }
  
    onSubmit(form: NgForm) {
      const value = form.value;
      const newMovie = new Movie(value.name, value.year,value.link);
      if (this.editMode) {
        this.slService.updateMovie(this.editedItemIndex, newMovie);
      } else {
        this.slService.addMovie(newMovie);
      }
      this.editMode = false;
      form.reset();
    }
  
    onClear() {
      this.slForm.reset();
      this.editMode = false;
    }
  
    onDelete() {
      this.slService.deleteMovie(this.editedItemIndex);
      this.onClear();
    }
  
    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
  
  }
  