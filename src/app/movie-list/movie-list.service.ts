import { Movie } from '../shared/movie.model';
import { Subject } from 'rxjs';

export class MovieListService {
  moviesChanged = new Subject<Movie[]>();
  startedEditing = new Subject<number>();
  private movies: Movie[] = [
                 new Movie('88 Minutes',2007,'https://www.imdb.com/title/tt0411061/?ref_=nm_flmg_act_22'),
                new Movie('Carlito\'s way',1993,'https://www.imdb.com/title/tt0106519/?ref_=nm_flmg_act_39'),
                new Movie('Manglehorn',2014,'https://www.imdb.com/title/tt2893490/?ref_=nm_flmg_act_11'),
                new Movie('Ocean\'s Thirteen',2007,'https://www.imdb.com/title/tt0496806/?ref_=nm_flmg_act_21'),
                new Movie('People I Know',2002,'https://www.imdb.com/title/tt0274711/?ref_=nm_flmg_act_28'),
                new Movie('Righteous Kill',2008,'https://www.imdb.com/title/tt1034331/?ref_=nm_flmg_act_20'),
                new Movie('Scarface',1983,'https://www.imdb.com/title/tt0086250/?ref_=nm_flmg_act_48'),
                new Movie('Scent of a Woman',1993,'https://www.imdb.com/title/tt0105323/?ref_=nm_flmg_act_40'),
                new Movie('The Godfather',1972,'https://www.imdb.com/title/tt0068646/?ref_=nm_flmg_act_58'),
                new Movie('Two for the Money',2005,'https://www.imdb.com/title/tt0417217/?ref_=nm_flmg_act_23'),
                new Movie('Beowulf',2007,'https://www.imdb.com/title/tt0442933/?ref_=nm_flmg_act_17'),
                new Movie('By The Sea',2015,'https://www.imdb.com/title/tt3707106/?ref_=nm_flmg_act_7'),
                new Movie('Hackers',1995,'https://www.imdb.com/title/tt0113243/?ref_=nm_flmg_act_47'),
                new Movie('Lara Croft Tomb Raider',2001,'https://www.imdb.com/title/tt0146316/?ref_=nm_flmg_act_31'),
                new Movie('Maleficent',2014,'https://www.imdb.com/title/tt1587310/?ref_=nm_flmg_act_8'),
                new Movie('Mr. & Mrs. Smith',2005,'https://www.imdb.com/title/tt0356910/?ref_=nm_flmg_act_20'),
                new Movie('Salt',2010,'https://www.imdb.com/title/tt0944835/?ref_=nm_flmg_act_13'),
                new Movie('The Good Shepherd',2006,'https://www.imdb.com/title/tt0343737/?ref_=nm_flmg_act_19'),
                new Movie('The Tourist',2010,'https://www.imdb.com/title/tt1243957/?ref_=nm_flmg_act_11'),
                new Movie('Wanted',2008,'https://www.imdb.com/title/tt0493464/?ref_=nm_flmg_act_14'),
                new Movie('Beauty and the Beast',2017,'https://www.imdb.com/title/tt2771200/?ref_=nm_flmg_act_3'),
                new Movie('Harry Potter and the Chamber of Secrets',2002,'https://www.imdb.com/title/tt0295297/?ref_=nm_flmg_act_21'),
                new Movie('Harry Potter and the Half-Blood Prince ',2009,'https://www.imdb.com/title/tt0417741/?ref_=nm_flmg_act_15'),
                new Movie('Harry Potter and the Sorcerer\'s Stone',2001,'https://www.imdb.com/title/tt0241527/?ref_=nm_flmg_act_22'),
                new Movie('My Week with Marilyn',2011,'https://www.imdb.com/title/tt1655420/?ref_=nm_flmg_act_11'),
                new Movie('Noah',2014,'https://www.imdb.com/title/tt1959490/?ref_=nm_flmg_act_7'),
                new Movie('The Circle',2017,'https://www.imdb.com/title/tt4287320/?ref_=nm_flmg_act_2'),
                new Movie('The Colony',2015,'https://www.imdb.com/title/tt4005402/?ref_=nm_flmg_act_5'),
                new Movie('The Tale of Despereaux',2008,'https://www.imdb.com/title/tt0420238/?ref_=nm_flmg_act_16'),
                new Movie('This is the End',2013,'https://www.imdb.com/title/tt1245492/?ref_=nm_flmg_act_8'),
                new Movie('American Hustle',2013,'https://www.imdb.com/title/tt1800241/?ref_=nm_flmg_act_13'),
                new Movie('Garden Party',2008,'https://www.imdb.com/title/tt0828393/?ref_=nm_flmg_act_26'),
                new Movie('House at the End of the Street',2012,'https://www.imdb.com/title/tt1582507/?ref_=nm_flmg_act_16'),
                new Movie('Like Crazy',2011,'https://www.imdb.com/title/tt1758692/?ref_=nm_flmg_act_21'),
                new Movie('Red Sparrow',2018,'https://www.imdb.com/title/tt2873282/?ref_=nm_flmg_act_4'),
                new Movie('The Hunger Games Catching Fire',2013,'https://www.imdb.com/title/tt1951264/?ref_=nm_flmg_act_14'),
                new Movie('The Hunger Games Mockingjay - Part 1',2014,'https://www.imdb.com/title/tt1951265/?ref_=nm_flmg_act_10'),
                new Movie('The Hunger Games Mockingjay - Part 2',2015,'https://www.imdb.com/title/tt1951266/?ref_=nm_flmg_act_9'),
                new Movie('X-Men Apocalypse',2016,'https://www.imdb.com/title/tt3385516/?ref_=nm_flmg_act_7'),
                new Movie('X-Men Days of Future Past',2014,'https://www.imdb.com/title/tt1877832/?ref_=nm_flmg_act_12'),
                new Movie('Alice in Wonderland ',2010,'https://www.imdb.com/title/tt1014759/?ref_=nm_flmg_act_38'),
                new Movie('Alice Through the Looking Glass',2016,'https://www.imdb.com/title/tt2567026/?ref_=nm_flmg_act_16'),
                new Movie('Dark Shadows',2012,'https://www.imdb.com/title/tt1077368/?ref_=nm_flmg_act_29'),
                new Movie('Fantastic Beasts The Crimes of Grindelwald',2018,'https://www.imdb.com/title/tt4123430/?ref_=nm_flmg_act_6'),
                new Movie('Mortdecai',2015,'https://www.imdb.com/title/tt3045616/?ref_=nm_flmg_act_21'),
                new Movie('Murder on the Orient Express',2017,'https://www.imdb.com/title/tt3402236/?ref_=nm_flmg_act_11'),
                new Movie('Pirates of the Caribbean Dead Men Tell No Tales',2017,'https://www.imdb.com/title/tt1790809/?ref_=nm_flmg_act_13'),
                new Movie('Rango',2011,'https://www.imdb.com/title/tt1192628/?ref_=nm_flmg_act_36'),
                new Movie('The Lone Ranger',2013,'https://www.imdb.com/title/tt1210819/?ref_=nm_flmg_act_26'),
                new Movie('Transcendence',2014,'https://www.imdb.com/title/tt2209764/?ref_=nm_flmg_act_24'),
                new Movie('Blood Diamond ',2006,'https://www.imdb.com/title/tt0450259/?ref_=nm_flmg_act_16'),
                new Movie('Body of Lies',2008,'https://www.imdb.com/title/tt0758774/?ref_=nm_flmg_act_15'),
                new Movie('Catch me if you can',2002,'https://www.imdb.com/title/tt0264464/?ref_=nm_flmg_act_19'),
                new Movie('Django Unchained',2012,'https://www.imdb.com/title/tt1853728/?ref_=nm_flmg_act_9'),
                new Movie('Inception',2010,'https://www.imdb.com/title/tt1375666/?ref_=nm_flmg_act_12'),
                new Movie('Romeo + Juliet',1996,'https://www.imdb.com/title/tt1375666/?ref_=nm_flmg_act_12'),
                new Movie('The Great Gatsby',2013,'https://www.imdb.com/title/tt1343092/?ref_=nm_flmg_act_8'),
                new Movie('The Revenant',2015,'https://www.imdb.com/title/tt1663202/?ref_=nm_flmg_act_5'),
                new Movie('The Wolf of Wall Street',2013,'https://www.imdb.com/title/tt0993846/?ref_=nm_flmg_act_7'),
                new Movie('Titanic',1997,'https://www.imdb.com/title/tt0120338/?ref_=nm_flmg_act_25'),
                new Movie('Batman Begins',2005,'https://www.imdb.com/title/tt0450392/?ref_=nm_flmg_act_48'),
                new Movie('Lucky Number Slevin',2006,'https://www.imdb.com/title/tt0425210/?ref_=nm_flmg_act_44'),
                new Movie('Million Dollar Baby',2004,'https://www.imdb.com/title/tt0405159/?ref_=nm_flmg_act_54'),
                new Movie('Momentum',2015,'https://www.imdb.com/title/tt3181776/?ref_=nm_flmg_act_13'),
                new Movie('Now You See Me',2013,'https://www.imdb.com/title/tt1670345/?ref_=nm_flmg_act_23'),
                new Movie('Now You See Me 2',2016,'https://www.imdb.com/title/tt3110958/?ref_=nm_flmg_act_11'),
                new Movie('The Bucket List',2007,'https://www.imdb.com/title/tt0825232/?ref_=nm_flmg_act_38'),
                new Movie('The Dark Knight Rises',2012,'https://www.imdb.com/title/tt1345836/?ref_=nm_flmg_act_26'),
                new Movie('The Nutcracker and the Four Realms',2018,'https://www.imdb.com/title/tt5523010/?ref_=nm_flmg_act_5'),
                new Movie('The Shawshank Redemption',1994,'https://www.imdb.com/title/tt0111161/?ref_=nmbio_qu_51'),
                new Movie('Beautiful Girls',1996,'https://www.imdb.com/title/tt0115639/?ref_=nm_flmg_act_59'),
                new Movie('Closer',2004,'https://www.imdb.com/title/tt0376541/?ref_=nm_flmg_act_48'),
                new Movie('Domino One',2005,'https://www.imdb.com/title/tt0446683/?ref_=nm_flmg_act_46'),
                new Movie('Everyone Says I Love You',1996,'https://www.imdb.com/title/tt0116242/?ref_=nm_flmg_act_58'),
                new Movie('FreeZone',2005,'https://www.imdb.com/title/tt0441761/?ref_=nm_flmg_act_44'),
                new Movie('Garden State',2004,'https://www.imdb.com/title/tt0333766/?ref_=nm_flmg_act_50'),
                new Movie('Leon The Professional',1994,'https://www.imdb.com/title/tt0110413/?ref_=nm_flmg_act_62'),
                new Movie('Star Wars Episode II - Attack of the Clones',2002,'https://www.imdb.com/title/tt0121765/?ref_=nm_flmg_act_52'),
                new Movie('Thor',2011,'https://www.imdb.com/title/tt0800369/?ref_=nm_flmg_act_24'),
                new Movie('V for Vendetta',2005,'https://www.imdb.com/title/tt0434409/?ref_=nm_flmg_act_43'),
                new Movie('Dirty Grandpa',2016,'https://www.imdb.com/title/tt1860213/?ref_=nm_flmg_act_9'),
                new Movie('Flawless',1999,'https://www.imdb.com/title/tt0155711/?ref_=nm_flmg_act_59'),
                new Movie('Free Lancers',2012,'https://www.imdb.com/title/tt1815708/?ref_=nm_flmg_act_23'),
                new Movie('Heist',2015,'https://www.imdb.com/title/tt3276924/?ref_=nm_flmg_act_11'),
                new Movie('Hide and Seek',2005,'https://www.imdb.com/title/tt0382077/?ref_=nm_flmg_act_46'),
                new Movie('Killing Season',2013,'https://www.imdb.com/title/tt1480295/?ref_=nm_flmg_act_20'),
                new Movie('Limitless',2011,'https://www.imdb.com/title/tt1219289/?ref_=nm_flmg_act_31'),
                new Movie('Men of Honor',2000,'https://www.imdb.com/title/tt0203019/?ref_=nm_flmg_act_57'),
                new Movie('Red Lights',2012,'https://www.imdb.com/title/tt1748179/?ref_=nm_flmg_act_25'),
                new Movie('Righteous Kill',2008,'https://www.imdb.com/title/tt1034331/?ref_=nm_flmg_act_38'),
                new Movie('A Good Woman',2004,'https://www.imdb.com/title/tt0379306/?ref_=nm_flmg_act_46'),
                new Movie('Avengers Age of Ultron',2015,'https://www.imdb.com/title/tt2395427/?ref_=nm_flmg_act_15'),
                new Movie('Captain America Civil War',2016,'https://www.imdb.com/title/tt3498820/?ref_=nm_flmg_act_12'),
                new Movie('Captain America The Winter Soldier ',2014,'https://www.imdb.com/title/tt1843866/?ref_=nm_flmg_act_19'),
                new Movie('Ghost in the Shell',2017,'https://www.imdb.com/title/tt1219827/?ref_=nm_flmg_act_10'),
                new Movie('Ghost World',2001,'https://www.imdb.com/title/tt0162346/?ref_=nm_flmg_act_53'),
                new Movie('Iron Man 2',2010,'https://www.imdb.com/title/tt1228705/?ref_=nm_flmg_act_28'),
                new Movie('Lucy',2014,'https://www.imdb.com/title/tt2872732/?ref_=nm_flmg_act_17'),
                new Movie('Rough Night',2017,'https://www.imdb.com/title/tt4799050/?ref_=nm_flmg_act_9'),
                new Movie('The Avengers',2012,'https://www.imdb.com/title/tt0848228/?ref_=nm_flmg_act_26')
          

  ];

  getMovies() {
    return this.movies.slice();
  }

  getMovie(index: number) {
    return this.movies[index];
  }

  addMovie(movie: Movie) {
    this.movies.push(movie);
    this.moviesChanged.next(this.movies.slice());
  }

  addMovies(movies: Movie[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.movies.push(...movies);
    this.moviesChanged.next(this.movies.slice());
  }

  updateMovie(index: number, newMovie: Movie) {
    this.movies[index] = newMovie;
    this.moviesChanged.next(this.movies.slice());
  }

  deleteMovie(index: number) {
    this.movies.splice(index, 1);
    this.moviesChanged.next(this.movies.slice());
  }
}
