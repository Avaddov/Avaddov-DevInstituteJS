var x = 99; //99 beers. x = beers
var y = 1; //   =subtracted value from the wall
while (x > 0) {
  //while there are more beers on the wall
  console.log(
    x +
      " bottles of beer, on the wall! " +
      x +
      " bottles of beer! You take one down, you pass it around, you got " +
      x +
      " bottles of beer on the wall!"
  );
  if (x < y) {
    //condition for if there are less beers than there is demand
    x = x - x; //Solution for when there are more beers to take away than available
  } else {
    x = x - y;
    y++; // increase the amount of beers subtracted
  }
}
console.log(x + " bottles of beer on the wall"); //output
