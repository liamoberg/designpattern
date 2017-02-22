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
    },

    rateMovie: function(movie, rating){
        const movies = this.movies;
        
        for (let i = 0; i < movies.length; i++){
            if(movies[i].name === movie){
                movies[i].ratings.push(rating);
            }
        }
    }
};


movieDataBase.pushMovie();
movieDataBase.rateMovie('Batman begins', 4);
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




