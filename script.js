// I used the constructor pattern for my objects and it's the same there, a smooth and easy way to create objects.

const movieDataBase = {
    
    // Array that will hold all the movies
    movies :[

    ],

    // Constructor that contains all the prop in the objects we create
    Movie: class movie {
      constructor(name, year, genre, ratings) {
        this.name = name;
        this.year = year;
        this.genre = genre;
        this.ratings = ratings;
      }
    },

    // Function that creates movies from the constructor above
    pushMovie: function() {
        this.movies.push(new movieDataBase.Movie('Batman begins', 2005, ['Thriller', 'Action'], [10, 6, 8, 9]))
        this.movies.push(new movieDataBase.Movie('Langetslang', 2001, ['Drama', 'Romance'], [2, 1, 3, 4]))
        this.movies.push(new movieDataBase.Movie('Dåligfilm', 2005, ['Sci-fi', 'Adventure'], [1, 2, 1, 3]))
        this.movies.push(new movieDataBase.Movie('fifty shades of code', 2015, ['Drama', 'Tilt'], [9, 8, 7, 9]))
        this.movies.push(new movieDataBase.Movie('Langamanga', 2015, ['Comedy', 'Tilt'], [10, 8, 7, 9]))
    },

    // Function that takes 2 parameters, the movie you want to rate and the rating
    rateMovie: function(movie, rating){
        let movies = this.movies;
        // loop that checks all movies and if the name you put in the parameter matches with a name of a movie,
        // pushes the rating that you put in the parameter.
        for (let i = 0; i < movies.length; i++){
            if(movies[i].name === movie){
                movies[i].ratings.push(rating);
            }
        }
    },

    // Function that takes a year as parameter and returns a new array with all the movies that matches the year
    getMoviesThisYear: function(year){
        return this.movies
        .filter(movie => {
            return movie.year == year;
        })
    },


    // Function that takes a genre as parameter and for every movie that has the genre filters into a new array.
     getMovieByGenre: function(genre){
        return this.movies
        .filter(movie =>{
            for(let i = 0; i < genre.length; i++){
                if(movie.genre.indexOf(genre[i]) > -1){
                    return movie;
                }
            }
         })
    },

    // Function that goes through movies rating and calculates averagerating and adds a new property with the average-
    // rating to the object.
    getWithAverageRating: function(){
        this.movies
        .forEach(movie => {
            let sum = movie.ratings.reduce((a,b) =>{
                return a + b;
            },0)
            movie.averageRatings = sum / movie.ratings.length;
        })
        return this.movies;
    },


    // function that checks all the averageratings of the movies and returns the one with worst rating.
    getWorstRating: function(){
        let movies = this.getWithAverageRating();
        return movies.reduce(function(previousValue, value){
            return previousValue.averageRatings < value.averageRatings ? previousValue : value; 
        })
    },
    
    // same as above but the highest rated.
    getHighestRating: function(){
        let movies = this.getWithAverageRating();
        return movies.reduce(function(previousValue, value){
            return previousValue.averageRatings > value.averageRatings ? previousValue : value; 
        })
    }

};



const functionBase = {

    // function that loops through all the movies in the database and adds them into the string variabel movies.
    // after that I change the innerHTML of the div showMovies to the var movies.
    displayAllMovies: function(){
        let movie = movieDataBase.movies;
        let movies = '';
            for (let i = 0; i < movie.length; i++){
                movies += `Title: ${movie[i].name} Release: ${movie[i].year} Genre: ${movie[i].genre} Ratings: ${movie[i].ratings}<br>`;
            }   
        document.getElementById('showMovies').innerHTML = movies;
    },
    
    // function that logs all movies in the console
    showAllMovies: function(){
        console.log(movieDataBase.movies);
    },

    // function that saves the return of the function getWorstRating into a const that is calle movie.
    // Then changes the innerHTML to the const movies different attributes
    showWorstRatedMovie: function(){
        let movie = movieDataBase.getWorstRating();
            document.getElementById('showMovies').innerHTML = `Title: ${movie.name} Release: ${movie.year} Genre: ${movie.genre} Averagerating: ${movie.averageRatings}`; 
    },

    // same as above but the highestrated
    showHighestRatedMovie: function(){
        let movie = movieDataBase.getHighestRating();
            document.getElementById('showMovies').innerHTML = `Title: ${movie.name} Release: ${movie.year} Genre: ${movie.genre} Averagerating: ${movie.averageRatings}`; 
    }
};


// all my buttons in one namespace with the eventlisteners etc
const eventSpace = {
    displayAll: function(){
        document.getElementById('allmovies').addEventListener('click', functionBase.showAllMovies);
        document.getElementById('allmovies').addEventListener('click', functionBase.displayAllMovies);
    },

    displayWorst: function(){
        document.getElementById('worstMovie').addEventListener('click', functionBase.showWorstRatedMovie);
    },

    displayBest: function(){
        document.getElementById('bestMovie').addEventListener('click', functionBase.showHighestRatedMovie);
    }


};


window.onload = function(){
    eventSpace.displayAll();
    eventSpace.displayWorst();
    eventSpace.displayBest();
    movieDataBase.pushMovie();
    movieDataBase.rateMovie('Batman begins', 4);    
    console.log(movieDataBase.getMovieByGenre(['Tilt', 'Drama']));
    console.log(movieDataBase.getMoviesThisYear(2005));
    console.log(movieDataBase.getWorstRating());
    console.log(movieDataBase.getHighestRating());
};
// eventSpace.displayAll();
// eventSpace.displayWorst();
// eventSpace.displayBest();



