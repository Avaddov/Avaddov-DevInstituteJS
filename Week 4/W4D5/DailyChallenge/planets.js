// Daily Challenge : Planets
// This webpage is just a blank universe, and you’ll fill it with planets and moons in this challenge.
// You only have to work with a JS file

// Create an array of planets of the solar system
// For each planet, in the array, create a div using createElement. This div should have a class named ‘planet’.
// Each planet should have a different background color. (Hint: add a new class to each planet)
// Finally append each div to the body.
// Bonus Do the same process for moons. Be careful, each planet has a certain amount of moons; How should you display them ?

// 1. Create an array of planets of the solar system
let planets = [
    "Mercury",
    "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
];
// console.log(planets);
let colors = [
  "grey",
  "orange",
  "turquoise",
  "red",
  "yellow",
  "pink",
  "aqua",
  "blue",
  "pink",
];


let moons=[0, 0, 1, 2, 79, 82, 27, 14];
// 2. For each planet, in the array, create a div using createElement. This div should have a class named ‘planet’.
for (i = 0; i < planets.length; i++) {
  let newDiv = document.createElement("div");  //create a new div element called planet
  newDiv.classList.add("planet");
  // 3. Each planet should have a different background color. (Hint: add a new class to each planet)
  newDiv.style.backgroundColor = colors[i];
  newDiv.style.margin = "30px";

  let name = document.createTextNode(planets[i]);
  newDiv.appendChild(name);
  document.body.appendChild(newDiv);
  console.log(newDiv);
  
  let ml=120 
  if (moons[i]!=0) {
     for (let h=0; h<moons[i]; h++){
         ml+=50;
         let divMoon=document.createElement('div'); 
         divMoon.classList.add('moon');
         divMoon.style.marginLeft=ml + 'px';
          newDiv.appendChild(divMoon);
     }
}
}