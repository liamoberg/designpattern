const movieDataBase = {
    movies :[

    ],

    Movie: class movie {
      constructor(name, year, genre, ratings) {
        this.name = name;
        this.year = year;
        this.genre = genre;
        this.ratings = ratings;
      }
    },

    pushMovie: function() {
        this.movies.push(new movieDataBase.Movie('Batman begins', 2005, ["Thriller", "Action"], [10, 6, 8, 9]))
        this.movies.push(new movieDataBase.Movie('Langetslang', 2001, ["Drama", "Romance"], [2, 1, 3, 4]))
        this.movies.push(new movieDataBase.Movie('Dåligfilm', 2005, ["Sci-fi", "Adventure"], [1, 2, 1, 3]))
        this.movies.push(new movieDataBase.Movie('fifty shades of code', 2015, ["Drama", "Tilt"], [9, 8, 7, 9]))
        this.movies.push(new movieDataBase.Movie('Langamanga', 2015, ["Comedy", "Tilt"], [10, 8, 7, 9]))
    },

    rateMovie: function(movie, rating){
        const movies = this.movies;
        
        for (let i = 0; i < movies.length; i++){
            if(movies[i].name === movie){
                movies[i].ratings.push(rating);
            }
        }
    },

    getMoviesThisYear: function(year){
        return this.movies
        .filter(movie => {
            return movie.year == year;
        })
    },

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

    getWithAverageRating: function(){
        this.movies
        .forEach(movie => {
            const sum = movie.ratings.reduce((a,b) =>{
                return a + b;
            },0)
            movie.averageRatings = sum / movie.ratings.length;
        })
        return this.movies;
    },

    getWorstRating: function(){
        const movies = this.getWithAverageRating();
        return movies.reduce(function(previousValue, value){
            return previousValue.averageRatings < value.averageRatings ? previousValue : value; 
        })
    },
    
    getHighestRating: function(){
        const movies = this.getWithAverageRating();
        return movies.reduce(function(previousValue, value){
            return previousValue.averageRatings > value.averageRatings ? previousValue : value; 
        })
    }

};


movieDataBase.pushMovie();
movieDataBase.rateMovie('Batman begins', 4);
console.log(movieDataBase.getMovieByGenre(['Tilt', 'Drama']));
console.log(movieDataBase.getMoviesThisYear(2005));
console.log(movieDataBase.getWorstRating());
console.log(movieDataBase.getHighestRating());
console.log(movieDataBase.movies);

//     Movie: function(name, year, genre, ratings){
//         this.name = name;
//         this.year = year;
//         this.genre = genre;
//         this.ratings = ratings;

//         this.showMovie = function(){
//             return this.name + ' ' + this.year + ' ' + this.genre + ' ' + this.ratings;
//         }
//     }
    
    
//     // showAllMovies: function(){
//     //     console.log(this.movies);
//     // },
//     // addMovie: function(name, year, genre){
//     //     this.name = name;
//     //     this.year = year;
//     //     this.genre = genre;
//     //     return this.movies
//     // }




