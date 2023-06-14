function resolvePromises(promises) {
    return Promise.all(promises) // Wait for all promises to settle
      .then(resolvedValues => resolvedValues) // Return the resolved values
      .catch(error => console.error(error)); // Catch any rejections and handle errors
  }
  
  const promise1 = Promise.resolve(3); // Create a resolved promise with value 3
  const promise2 = 42; // Create a non-promise value (will be automatically wrapped in a resolved promise)
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'foo'); // Create a promise that resolves after 3000ms with value 'foo'
  });
  
  resolvePromises([promise1, promise2, promise3]) // Pass an array of promises to resolve
    .then(result => console.log(result)); // Print the resolved values to the console
  
  // expected output: Array [3, 42, "foo"]
  