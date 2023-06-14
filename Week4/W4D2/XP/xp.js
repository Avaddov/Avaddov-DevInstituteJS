

//  Exercise 1 : Information

// function infoAboutMe() {
//     console.log("My name is Dov. I'm 26 years old. I am depressed. lol.");
//   }
  
//   infoAboutMe();
  

//   function infoAboutPerson(personName, personAge, personFavoriteColor) {
//     console.log(`Your name is ${personName}, you are ${personAge} years old, and your favorite color is ${personFavoriteColor}.`);
//   }
  
//   infoAboutPerson("David", 45, "blue");
//   infoAboutPerson("Josh", 12, "yellow");
  


// Exercise 2 : Tips

  
//   function calculateTip() {
//     const bill = Number(prompt("Enter the amount of the bill:"));
  
//     let tipPercent;
//     if (bill < 50) {
//       tipPercent = 0.2;
//     } else if (bill >= 50 && bill <= 200) {
//       tipPercent = 0.15;
//     } else {
//       tipPercent = 0.1;
//     }
  
//     const tipAmount = bill * tipPercent;
//     const totalBill = bill + tipAmount;
  
//     console.log(`Tip amount: $${tipAmount.toFixed(2)}`);
//     console.log(`Total bill: $${totalBill.toFixed(2)}`);
//   }
  
//   calculateTip();
  



// Exercise 3 : Find The Numbers Divisible By 23


// function isDivisible() {
//     let sum = 0;
  
//     for (let i = 0; i <= 500; i++) {
//       if (i % 23 === 0) {
//         console.log(i);
//         sum += i;
//       }
//     }
  
//     console.log(`Sum: ${sum}`);
//   }
  
//   isDivisible();


// Exercise 4 : Shopping List



//   const stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry": 1
// };

// const prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry": 10
// };

// const shoppingList = ["banana", "orange", "apple"];

// function myBill() {
//   let totalPrice = 0;
//   for (let i = 0; i < shoppingList.length; i++) {
//     const item = shoppingList[i];
//     if (item in stock && stock[item] > 0) {
//       totalPrice += prices[item];
//       stock[item] -= 1; // decrease stock by 1 if item is in stock
//     }
//   }
//   return totalPrice;
// }

// console.log(`Total price: $${myBill().toFixed(2)}`);
// console.log(stock); // check updated stock





//Exercise 5 : What’s In My Wallet ?

// function changeEnough(itemPrice, amountOfChange) {
//     const quarters = amountOfChange[0] * 0.25;
//     const dimes = amountOfChange[1] * 0.1;
//     const nickels = amountOfChange[2] * 0.05;
//     const pennies = amountOfChange[3] * 0.01;
  
//     const totalChange = quarters + dimes + nickels + pennies;
  
//     return totalChange >= itemPrice;
//   }
  
//   changeEnough(4.25, [25, 20, 5, 0]); 



  //Exercise 6 : Vacations Costs


  function hotelCost() {
    return prompt("How many nights would you like to stay in the hotel?"), 10 * 140;
  }
  
  function planeRideCost() {
    const destination = prompt("Where would you like to go (London, Paris or other)?");
    switch (destination) {
      case "London":
        return 183;
      case "Paris":
        return 220;
      default:
        return 300;
    }
  }
  
  function rentalCarCost() {
    let days;
    do {
      days = prompt("How many days would you like to rent the car?"), 10;
    } while (isNaN(days));
  
    let cost = days * 40;
    if (days > 10) {
      cost *= 0.95;
    }
    return cost;
  }
  
  function totalVacationCost() {
    const hotel = hotelCost();
    const plane = planeRideCost();
    const rental = rentalCarCost();
  
    const total = hotel + plane + rental;
  
    console.log(`The hotel cost: $${hotel}, the plane tickets cost: $${plane}, the car cost: $${rental}.`);
    console.log(`The total vacation cost is: $${total}.`);
  
    return total;
  }
  
  totalVacationCost();
  