const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];


//Create a variable named myWatchedSeriesLength 
//that is equal to the number of series in the myWatchedSeries array.

let myWatchedSeriesLength = myWatchedSeries.length;


//Create a variable named myWatchedSeriesSentence, 
//that is equal to a sentence describing the series you watched

//method 1 +:
// let myWatchedSeriesSentence =
//   "I watched " + myWatchedSeriesLength + " series " + myWatchedSeries;
// console.log(myWatchedSeriesSentence);

//method2 concatenate:
let myWatchedSeriesSentence = myWatchedSeries.join(", ");
console.log(`I watched ${myWatchedSeriesLength} series: ${myWatchedSeriesSentence}.`);

// Change "the big bang theory" to "friends".
myWatchedSeries[2] = "friends";
console.log(myWatchedSeries);

// Add, at the end of the array, the name of another series you watched.
myWatchedSeries.push("Wednesday");
console.log(myWatchedSeries);

// Add, at the beginning of the array, the name of your favorite series.
myWatchedSeries.unshift("Overlord");
console.log(myWatchedSeries);

//Delete the series “black mirror”.
myWatchedSeries.splice(1, 1);


//Console.log the third letter of the series “money heist”.
console.log(myWatchedSeries[1][2]);

//Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.
console.log(myWatchedSeries);
