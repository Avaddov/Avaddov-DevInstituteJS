let client = "John";

const groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    payed: true,
    meansOfPayment: ["cash", "creditCard"],
  },
};

const displayGroceries = () => {
  groceries.fruits.forEach((fruit) => {
    console.log(fruit);
  });
};

const cloneGroceries = () => {
  let user = client; // user variable is a copy of the client variable
  client = "Betty"; // change the value of client variable to "Betty"
  console.log(user); // John. Doesn't change because user is set to let, not var. 
  
  let shopping = { ...groceries }; // create a copy of groceries object
  shopping.totalPrice = "35$"; // modify the value of totalPrice key
  console.log(groceries.totalPrice); // 20$, because groceries is not modified
  
  shopping.other.payed = false; // modify the value of payed key in other object
  console.log(groceries.other.payed); // true, because groceries is modified
  
  console.log(shopping); // {fruits: ["pear", "apple", "banana"], vegetables: ["tomatoes", "cucumber", "salad"], totalPrice: "35$", other: {payed: false, meansOfPayment: ["cash", "creditCard"]}}
};

cloneGroceries();
