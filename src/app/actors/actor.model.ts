import { Movie } from '../shared/movie.model';

export class Actor {
  public name: string;
  public description: string;
  public imagePath: string;
  public movies: Movie[];
  public male:boolean

  constructor(name: string, desc: string, imagePath: string, movies: Movie[],gnd:boolean) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.movies = movies;
    this.male=gnd;
  }
}
