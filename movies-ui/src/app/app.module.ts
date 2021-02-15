import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { GenericListComponent } from './utilites/generic-list/generic-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { RatingComponent } from './utilites/rating/rating.component';
import { HomeComponent } from './home/home.component';
import { IndexGenresComponent } from './genres/index-genres/index-genres.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { IndexActorsComponent } from './actors/index-actors/index-actors.component';
import { CreateActorComponent } from './actors/create-actor/create-actor.component';
import { CreateMovieTheaterComponent } from './movie-theaters/create-movie-theater/create-movie-theater.component';
import { IndexMovieTheaterComponent } from './movie-theaters/index-movie-theater/index-movie-theater.component';
import { IndexMovieComponent } from './movies/index-movie/index-movie.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';
import { EditMovieTheaterComponent } from './movie-theaters/edit-movie-theater/edit-movie-theater.component';
import { EditGenreComponent } from './genres/edit-genre/edit-genre.component';
import { FormGenreComponent } from './genres/form-genre/form-genre.component';
import { MovieFilterComponent } from './movies/movie-filter/movie-filter.component';
import { FormActorComponent } from './actors/form-actor/form-actor.component';
import { InputImgComponent } from './utilites/input-img/input-img.component';
import { InputMarkdownComponent } from './utilites/input-markdown/input-markdown.component';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    GenericListComponent,
    MenuComponent,
    RatingComponent,
    HomeComponent,
    IndexGenresComponent,
    CreateGenreComponent,
    IndexActorsComponent,
    CreateActorComponent,
    CreateMovieTheaterComponent,
    IndexMovieTheaterComponent,
    IndexMovieComponent,
    CreateMovieComponent,
    EditActorComponent,
    EditMovieComponent,
    EditMovieTheaterComponent,
    EditGenreComponent,
    FormGenreComponent,
    MovieFilterComponent,
    FormActorComponent,
    InputImgComponent,
    InputMarkdownComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MarkdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
