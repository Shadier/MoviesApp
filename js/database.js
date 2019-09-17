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
		this.addMovies("Aladdin", "./images/covers/al.jpg");
		this.addMovies("IT", "./images/covers/it.jpg");
		this.addMovies("IT Chapter II", "./images/covers/it2.jpg");
		this.addMovies("Pulp Fiction", "./images/covers/pul.jpg");
		this.addMovies("Reservoir Dogs", "./images/covers/res.jpg");
	}
	fillSeries(){
		this.addSeries("SUITS", "./images/covers/suits.jpg");
		this.addSeries("Breaking Bad", "./images/covers/bb.jpg");
		this.addSeries("LOST", "./images/covers/lost.jpg");
		this.addSeries("How i met your mother", "./images/covers/mom.jpg");
		this.addSeries("Mr. ROBOT", "./images/covers/mr.jpg");
		this.addSeries("The Ranch", "./images/covers/ranch.jpg");
	}
	fillFavorites(){
		this.addFavorites("SUITS", "./images/covers/suits.jpg");
		this.addFavorites("Back to the future I", "./images/covers/back-01.jpg");
		this.addFavorites("The Ranch", "./images/covers/ranch.jpg");
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
				delete db.favoritesList.splice(i, 1);
		});
	}
	pushFavorites(name){
		this.moviesList.forEach(function (movie, i) {
			if (movie.name == name)
				db.favoritesList.push(movie);
		});
		this.seriesList.forEach(function (serie, i) {
			if (serie.name == name)
				db.favoritesList.push(serie);
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
