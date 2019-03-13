import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Actor } from '../actor.model';
import { ActorService } from '../actor.service';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css']
})
export class ActorDetailComponent implements OnInit {
  actor: Actor;
  id: number;

  constructor(private actorService: ActorService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.actor = this.actorService.getActor(this.id);
        }
      );
  }

  onAddToShoppingList() {
    this.actorService.addMoviesToShoppingList(this.actor.movies);
  }

  onEditActor() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteActor() {
    this.actorService.deleteActor(this.id);
    this.router.navigate(['/recipes']);
  }

}
