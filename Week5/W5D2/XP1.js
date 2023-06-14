// // Exercise 1

// // retrieve h1 and console.log it
// const h1 = document.querySelector('h1');
// console.log(h1.textContent);

// // remove last paragraph
// const paragraphs = document.querySelectorAll('p');
// const lastParagraph = paragraphs[paragraphs.length - 1];
// lastParagraph.remove();

// // add event listener to h2 to change background color to red
// const h2 = document.querySelector('h2');
// h2.addEventListener('click', () => {
//   h2.style.backgroundColor = 'red';
// });

// // add event listener to h3 to hide it
// const h3 = document.querySelector('h3');
// h3.addEventListener('click', () => {
//   h3.style.display = 'none';
// });

// // add event listener to button to make all paragraphs bold
// const boldButton = document.querySelector('button');
// boldButton.addEventListener('click', () => {
//   for (const p of paragraphs) {
//     p.style.fontWeight = 'bold';
//   }
// });

// // BONUS: when h1 is hovered over, set font size to random pixel size
// h1.addEventListener('mouseover', () => {
//   const randomSize = Math.floor(Math.random() * 101);
//   h1.style.fontSize = `${randomSize}px`;
// });

// // BONUS: when 2nd paragraph is hovered over, fade out
// const secondParagraph = document.querySelectorAll('p')[1];
// secondParagraph.addEventListener('mouseover', () => {
//   secondParagraph.style.opacity = '0.5';
// });
// secondParagraph.addEventListener('mouseout', () => {
//   secondParagraph.style.opacity = '1';
// });










// Exercise 2





// // Get the form element
// const form = document.querySelector('form');

// // Log the form element to the console
// console.log(form);

// // Get the input elements by ID
// const fnameInput = document.getElementById('fname');
// const lnameInput = document.getElementById('lname');

// // Log the input elements to the console
// console.log(fnameInput, lnameInput);

// // Get the input elements by name
// const fnameInputByName = document.getElementsByName('fname')[0];
// const lnameInputByName = document.getElementsByName('lname')[0];

// // Log the input elements to the console
// console.log(fnameInputByName, lnameInputByName);

// // Add an event listener for form submission
// form.addEventListener('submit', function(event) {
//   // Prevent the default form submission behavior
//   event.preventDefault();

//   // Get the input values and trim any whitespace
//   const fnameValue = fnameInput.value.trim();
//   const lnameValue = lnameInput.value.trim();

//   // If any input value is empty, return and do nothing
//   if (fnameValue === '' || lnameValue === '') {
//     return;
//   }

//   // Get the <ul> element and create <li> elements for the input values
//   const ul = document.querySelector('.usersAnswer');
//   const fnameLi = document.createElement('li');
//   fnameLi.textContent = fnameValue;
//   const lnameLi = document.createElement('li');
//   lnameLi.textContent = lnameValue;

//   // Append the <li> elements to the <ul> element
//   ul.appendChild(fnameLi);
//   ul.appendChild(lnameLi);
// });




// Exercise 3
// declare global variable
let allBoldItems;

// function to collect all bold items
function getBold_items() {
  allBoldItems = document.getElementsByTagName("strong");
}

// function to highlight all bold text
function highlight() {
  for (let i = 0; i < allBoldItems.length; i++) {
    allBoldItems[i].style.color = "blue";
  }
}

// function to return all bold text to normal
function return_normal() {
  for (let i = 0; i < allBoldItems.length; i++) {
    allBoldItems[i].style.color = "black";
  }
}

// call getBold_items() to populate allBoldItems
getBold_items();

// add event listeners to call highlight() and return_normal() on mouseover and mouseout
let paragraph = document.querySelector("p");
paragraph.addEventListener("mouseover", highlight);
paragraph.addEventListener("mouseout", return_normal);
