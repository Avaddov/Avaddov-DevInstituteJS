// // Retrieve the div and console.log it
// const containerDiv = document.getElementById("container");
// console.log(containerDiv);

// // Change the name “Pete” to “Richard”
// const pete = document.querySelector("ul.list:first-of-type li:last-of-type");
// pete.textContent = "Richard";

// //Delete the <li> that contains the text node “Sarah”. (It’s the second <li> of the second <ul>):
// const sarah = document.querySelector("ul.list:last-of-type li:nth-of-type(2)");
// sarah.remove();

// //Change each first name of the two <ul>'s to your name using a loop:
// const names = ["Dov", "Dov"];

// const listItems = document.querySelectorAll("ul.list li:first-of-type");

// for (let i = 0; i < listItems.length; i++) {
//     listItems[i].textContent = names[i];
// }





// Exercise 2




// // Get the div element
// const usersDiv = document.getElementById("users-list");

// // Set the background color and padding
// usersDiv.style.backgroundColor = "lightblue";
// usersDiv.style.padding = "10px";

// // // Hide the first list item
// const johnListItem = usersDiv.querySelector("li:first-child");
// johnListItem.style.display = "none";

// // // Add a border to the second list item
// const peteListItem = usersDiv.querySelector("li:nth-child(2)");
// peteListItem.style.border = "1px solid black";

// // // Change the font size of the whole body
// document.body.style.fontSize = "16px";



// Exercise 3

// const div = document.querySelector("#navBar");
// div.setAttribute("id", "socialNetworkNavigation");


// // Select the unordered list
// const unorderedList = document.querySelector("ul");

// // Create a new list item
// const list = document.createElement("li");

// // Create a new text node with the text "Logout"
// const text = document.createTextNode("Logout");

// // Append the text node to the list item
// list.appendChild(text);

// // Append the list item to the unordered list
// unorderedList.appendChild(list);


// // Select the unordered list
// const unList = document.querySelector("ul");

// // Retrieve the first and last list items
// const firstLi = unList.firstElementChild;
// const lastLi = unList.lastElementChild;

// // Display the text of each link
// console.log(firstLi.textContent);
// console.log(lastLi.textContent);


// Exercise 4

// Create an array of books
let allBooks = [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      image: "https://images-na.ssl-images-amazon.com/images/I/81rqtW8rZgL.jpg",
      alreadyRead: true
    },
    {
      title: "1984",
      author: "George Orwell",
      image: "https://images-na.ssl-images-amazon.com/images/I/71z%2BdJ%2BtFkL.jpg",
      alreadyRead: false
    }
  ];
  
  // Get the div element
  const listBooks = document.querySelector(".listBooks");
  
  // Create an HTML table
  const table = document.createElement("table");
  
  // Create a header row for the table
  const headerRow = document.createElement("tr");
  
  // Create header cells for each column
  const titleHeader = document.createElement("th");
  titleHeader.textContent = "Title";
  headerRow.appendChild(titleHeader);
  
  const authorHeader = document.createElement("th");
  authorHeader.textContent = "Author";
  headerRow.appendChild(authorHeader);
  
  const imageHeader = document.createElement("th");
  imageHeader.textContent = "Image";
  headerRow.appendChild(imageHeader);
  
  // Add the header row to the table
  table.appendChild(headerRow);
  
  // Loop through each book and create a row in the table for each one
  allBooks.forEach((book) => {
    const row = document.createElement("tr");
  
    const titleCell = document.createElement("td");
    titleCell.textContent = book.title;
    row.appendChild(titleCell);
  
    const authorCell = document.createElement("td");
    authorCell.textContent = book.author;
    row.appendChild(authorCell);
  
    const imageCell = document.createElement("td");
    const image = document.createElement("img");
    image.src = book.image;
    image.width = "100";
    imageCell.appendChild(image);
    row.appendChild(imageCell);
  
    // Check if the book has already been read and set the color of the row accordingly
    if (book.alreadyRead) {
      row.style.color = "red";
    }
  
    // Add the row to the table
    table.appendChild(row);
  });
  
  // Add the table to the div element
  listBooks.appendChild(table);
  