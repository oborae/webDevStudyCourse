var movies =  [
	{
		name: "Batman",
		watched: true,
		rating: 5
	},
	{
		name: "Spiderman",
		watched: false,
		rating: 4
	},
	{
		name: "LOTR",
		watched: true,
		rating: 5
	}
];

for (var i = 0; i < movies.length; i++) {
	if(movies[i].watched == true)
		console.log("You have watched the movie \"" + movies[i].name + "\" and it's rating is - " + movies[i].rating + " stars.");
	else
		console.log("You haven't watched the movie \"" + movies[i].name + "\" and it's rating is - " + movies[i].rating + " stars.");
}

movies.forEach(function(movie){
	if(movie.watched == true)
		console.log("You have watched the movie \"" + movie.name + "\" and it's rating is - " + movie.rating + " stars.");
	else
		console.log("You haven't watched the movie \"" + movie.name + "\" and it's rating is - " + movie.rating + " stars.");

});
