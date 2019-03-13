import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import {Actor } from '../actor.model';
import { ActorService } from '../actor.service';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit, OnDestroy {
  actors: Actor[];
  subscription: Subscription;

  constructor(private actorService: ActorService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.actorService.actorsChanged
      .subscribe(
        (actors: Actor[]) => {
          this.actors = actors;
        }
      );
    this.actors = this.actorService.getActors();
  }

  onNewActor() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
