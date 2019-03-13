import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ActorsComponent } from './actors/actors.component';
import { ActorListComponent } from './actors/actor-list/actor-list.component';
import { ActorDetailComponent } from './actors/actor-detail/actor-detail.component';
import { ActorItemComponent } from './actors/actor-list/actor-item/actor-item.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieEditComponent } from './movie-list/movie-edit/movie-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { MovieListService } from './movie-list/movie-list.service';
import { AppRoutingModule } from './app-routing.module';
import { ActorStartComponent } from './actors/actor-start/actor-start.component';
import { ActorEditComponent } from './actors/actor-edit/actor-edit.component';
import { ActorService } from './actors/actor.service';
import { DataStorageService } from './shared/data-storage.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ActorsComponent,
    ActorListComponent,
    ActorDetailComponent,
    ActorItemComponent,
    MovieListComponent,
    MovieEditComponent,
    DropdownDirective,
    ActorStartComponent,
    ActorEditComponent,
    MainNavComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [MovieListService, ActorService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
