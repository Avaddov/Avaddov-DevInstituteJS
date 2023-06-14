
// DOM
// What is DOM (Document Object Model)

// JavaScript can change all the HTML elements in the page
// JavaScript can change all the HTML attributes in the page
// JavaScript can change all the CSS styles in the page
// JavaScript can remove existing HTML elements and attributes
// JavaScript can add new HTML elements and attributes
// JavaScript can react to all existing HTML events in the page
// JavaScript can create new HTML events in the page

// Finding HTML elements by id
// Finding HTML elements by tag name
// Finding HTML elements by class name
// Finding HTML elements by selectors


// Finding HTML Elements
// Method	                                Description
// document.getElementById('root')	        Find an element by element id
// document.getElementsByTagName('div')	  Find elements by tag name
// document.getElementsByClassName('a')	  Find elements by class name
// document.querySelector('#root .a')
// document.querySelectorAll('#root .a')


// Changing HTML Elements
// Property	Description
// element.innerHTML/innerText =  new html content	Change the inner HTML of an element
// element.attribute = new value	Change the attribute value of an HTML element
// element.style.property = new style	Change the style of an HTML element
// element.setAttribute(attribute, value)	Change the attribute value of an HTML element


// Adding and Deleting Elements
// Method	Description
// document.createElement(element)	Create an HTML element
// document.removeChild(element)	Remove an HTML element
// document.appendChild(element)	Add an HTML element
// document.replaceChild(new, old)	Replace an HTML element



// DOM Selectors
// --------------
// getElementById
// getElementsByTagName
// getElementsByClassName

// querySelector
// querySelectorAll

// getAttribute
// setAttribute

// ##Changing Styles
// style.{property} //ok

// className //best
// classList //best

// classList.add
// classList.remove
// classList.toggle

// ##Bonus
// innerHTML //DANGEROUS

// parentElement
// children
// childNodes

// document.createElement;
// appendChild;
// removeChild;
// replaceChild;

// ##It is important to CACHE selectors in variables




// let arr = [
//     {id:1, user:'John',email:'john@gmail.com'},
//     {id:2, user:'Sara', email:'sara@gmail.com'},
//     {id:3, user:'Yasaar', email:'yasaar@gmail.com'},
//     {id:10, user:'Yeshna', email:'yeshna@gmail.com'},
//     {id:5, user:'Varshana', email:'varshana@gmail.com'}
//   ];

const color_div = document.getElementById('div1')

color_div.addEventListener('mouseover', function(e){
  e.target.style.backgroundColor = 'blue';
})

color_div.addEventListener('mouseleave', function(e){
  changeToYellow(e)
})

// function changeToBlue(e){
//   e.target.style.backgroundColor = 'blue';
// }
function changeToYellow(e){
  e.target.style.backgroundColor = 'yellow';
}



let my_row = 3;
  function insertRow() {
    const table = document.getElementById("sampleTable");
    const row = table.insertRow(table.rows.length);
    const cell_1 = row.insertCell(0);
    const cell_2 = row.insertCell(1);
    cell_1.innerHTML = `Row ${my_row} cell 1`;
    cell_2.innerHTML = `Row ${my_row} cell 2`;
    my_row++
  }





  const root = document.getElementById('root')
function createUsers(){
  root.innerHTML = '';
  for(let i = 0; i < arr.length; i++){
    let div = document.createElement('div');
    div.classList.add('inner-div');
    let img = document.createElement('img');
    img.setAttribute('src', `https://robohash.org/${arr[i].id}`)
    img.style.width = '120px';
    div.appendChild(img);
    let name = document.createElement('h2');
    name.innerText = arr[i].user;
    div.appendChild(name)
    let email = document.createElement('p');
    email.textContent = arr[i].email;
    div.appendChild(email)
    root.appendChild(div)
  }
}