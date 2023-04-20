

// Exercise 1


// Exercise 2
function myMove() {
    // Select the element with ID "animate"
    const animate = document.getElementById('animate');
    // Select the element with ID "container"
    const container = document.getElementById('container');
    // Initialize the position of the box to 0
    let pos = 0;
    // Set an interval to call the "moveBox" function every 1 millisecond
    const intervalId = setInterval(moveBox, 1);
    
    // Function to move the box
    function moveBox() {
      // If the box has reached the right edge of the container
      if (pos === container.offsetWidth - animate.offsetWidth) {
        // Clear the interval and stop the animation
        clearInterval(intervalId);
      } else {
        // Increment the position of the box by 1
        pos++;
        // Set the new position of the box using the "style" property
        animate.style.left = pos + 'px';
      }
    }
  }
  


  // Exercise 3

  const box = document.getElementById("box");
  const target = document.getElementById("target");
  
  box.addEventListener("dragstart", function(event) {
    // Set the data that we want to transfer
    event.dataTransfer.setData("text/plain", event.target.id);
  });
  
  target.addEventListener("dragover", function(event) {
    // Prevent default to allow drop
    event.preventDefault();
  });
  
  target.addEventListener("drop", function(event) {
    // Prevent default to allow drop
    event.preventDefault();
  
    // Get the data that was transferred
    const data = event.dataTransfer.getData("text/plain");
  
    // Append the dragged element to the target element
    const draggedElement = document.getElementById(data);
    event.target.appendChild(draggedElement);
  });
  