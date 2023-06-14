// Create a function that returns true if all parameters are truthy, and false otherwise.


function allTruthy(...values) {
    return values.every(value => Boolean(value));
  }
  