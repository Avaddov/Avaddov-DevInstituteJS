// async function fetchStarWarsData() {
//     try {
//       const response = await fetch("https://www.swapi.tech/api/starships/9/");
//       const objectStarWars = await response.json();
//       console.log(objectStarWars.result);
//     } catch (error) {
//       console.error(error);
//     }
//   }
  
//   fetchStarWarsData();
  

function resolveAfter2Seconds() {
    // Create a new promise and return it
    return new Promise(resolve => {
        // Use setTimeout to delay the resolution of the promise by 2 seconds
        setTimeout(() => {
            // Resolve the promise with the value 'resolved'
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling'); // Log 'calling' to the console
    let result = await resolveAfter2Seconds(); // Wait for the promise to resolve and assign the resolved value to 'result'
    console.log(result); // Log the resolved value to the console
}

asyncCall(); // Execute the async function

// calling
// resolved
