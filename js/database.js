'use strict'
class DataBase{
	constructor() {
	    this.moviesList = [];
	    this.favoritesList = [];
	    this.seriesList = [];
	    this.fillAll();
	}

	fillAll(){
		this.fillMovies();
		this.fillSeries();
		this.fillFavorites();
	}
	fillMovies(){
		this.addMovies("Back to the future I", "./images/covers/back-01.jpg");
		this.addMovies("Back to the future II", "./images/covers/back-02.jpg");
		this.addMovies("Back to the future III", "./images/covers/back-03.jpg");
	}
	fillSeries(){
	}
	fillFavorites(){
		this.addFavorites("Back to the future I", "./images/covers/back-01.jpg");
	}

	getMovies() {
		return this.moviesList;
	}
	addMovies(name, urlImage) {
		const movie = { "name": name, "img": urlImage };
		this.moviesList.push(movie);
	}
	removeFavorites(name){
		this.favoritesList.forEach(function (movie, i) {
			if (movie.name == name)
				delete db.favoritesList[i];
		});
	}
	pushFavorites(name){
		this.moviesList.forEach(function (movie, i) {
			if (movie.name == name)
				db.favoritesList.push(movie);
		});
	}
	getSeries() {
		return this.seriesList;
	}
	addSeries(name, urlImage) {
		const serie = { "name": name, "img": urlImage };
		this.seriesList.push(serie);
	}
	getFavorites() {
		return this.favoritesList;
	}
	addFavorites(name, urlImage) {
		const favorite = { "name": name, "img": urlImage };
		this.favoritesList.push(favorite);
	}
}
const db = new DataBase();
