// Part I

// Create a function getCarHonda that takes in an array of car inventory and returns the first Honda car in the inventory
function getCarHonda(carInventory) {
    // Loop through each car object in the array
    for (let i = 0; i < carInventory.length; i++) {
      // Check if the car make is Honda
      if (carInventory[i].car_make === 'Honda') {
        // If the car make is Honda, return a string with car make, model, and year
        return `This is a ${carInventory[i].car_make} ${carInventory[i].car_model} from ${carInventory[i].car_year}.`;
      }
    }
  }
  
  // Use the cars inventory below
  const inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
  ];
  
  // Call the getCarHonda function with the inventory array as argument
  console.log(getCarHonda(inventory)); // Output: This is a Honda Accord from 1983.
  
  
  // Part II
  
  // Create a function sortCarInventoryByYear that takes in an array of car inventory and returns a sorted inventory by car year in ascending order
  function sortCarInventoryByYear(carInventory) {
    // Use the sort method to sort the array of objects by car year in ascending order
    carInventory.sort((a, b) => a.car_year - b.car_year);
    return carInventory;
  }

  // Call the sortCarInventoryByYear function with the inventory array as argument
  console.log(sortCarInventoryByYear(inventory)); 
  // Output: [{id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983}, {id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995}, {id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001}, {id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009}, {id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010}]