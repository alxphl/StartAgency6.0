import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { ActorService } from '../actor.service';

@Component({
  selector: 'app-actor-edit',
  templateUrl: './actor-edit.component.html',
  styleUrls: ['./actor-edit.component.css']
})
export class ActorEditComponent implements OnInit {
  id: number;
  editMode = false;
  actorForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private actorService: ActorService,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    // const newActor = new Actor(
    //   this.actorForm.value['name'],
    //   this.actorForm.value['description'],
    //   this.actorForm.value['imagePath'],
    //   this.actorForm.value['ingredients']);
    if (this.editMode) {
      this.actorService.updateActor(this.id, this.actorForm.value);
    } else {
      this.actorService.addActor(this.actorForm.value);
    }
    this.onCancel();
  }

  onAddMovie() {
    (<FormArray>this.actorForm.get('movies')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'year': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ]),
        'link': new FormControl(null, Validators.required)
      })
    );
  }

  onDeleteMovie(index: number) {
    (<FormArray>this.actorForm.get('movies')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let actorName = '';
   // let actorImagePath = '';
    let actorDescription = '';
    let actorMovies = new FormArray([]);

    if (this.editMode) {
      const actor = this.actorService.getActor(this.id);
      actorName = actor.name;
   //   actorImagePath = actor.imagePath;
      actorDescription = actor.description;
      if (actor['movies']) {
        for (let movie of actor.movies) {
          actorMovies.push(
            new FormGroup({
              'name': new FormControl(null, Validators.required),
              'year': new FormControl(null, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ]),
              'link': new FormControl(null, Validators.required)
      
            })
          );
        }
      }
    }

    this.actorForm = new FormGroup({
      'name': new FormControl(actorName, Validators.required),
    // 'imagePath': new FormControl(actorImagePath, Validators.required),
      'description': new FormControl(actorDescription, Validators.required),
      'movies': actorMovies
    });
  }

}
