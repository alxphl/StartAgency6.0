import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ActorsComponent } from './actors/actors.component';
import {MovieListComponent } from './movie-list/movie-list.component';
import { ActorStartComponent } from './actors/actor-start/actor-start.component';
import { ActorDetailComponent } from './actors/actor-detail/actor-detail.component';
import { ActorEditComponent } from './actors/actor-edit/actor-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/actors', pathMatch: 'full' },
  { path: 'actors', component: ActorsComponent, children: [
    { path: '', component: ActorStartComponent },
    { path: 'new', component: ActorEditComponent },
    { path: ':id', component: ActorDetailComponent },
    { path: ':id/edit', component: ActorEditComponent },
  ] },
  { path: 'movie-list', component: MovieListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
