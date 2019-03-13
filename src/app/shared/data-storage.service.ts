import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
//import 'rxjs/Rx';

import { ActorService } from '../actors/actor.service';
import { Actor } from '../actors/actor.model';

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private actorService: ActorService) {}

  storeActors() {
    return this.http.put('https://ng-recipe-book.firebaseio.com/recipes.json', this.actorService.getActors());
  }

  getActors() {
    this.http.get('https://ng-recipe-book.firebaseio.com/recipes.json')
     /* .map(
        (response: Response) => {
          const actors: Actor[] = response.json();
          for (let actor of actors) {
            if (!actor['movies']) {
              actor['movie'] = [];
            }
          }
          return actors;
        }
      )
      .subscribe(
        (actors: Actor[]) => {
          this.actorService.setActors(actors);
        }
      );*/
  }
}
