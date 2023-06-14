const fs = require('fs');

// Read the file
fs.readFile('stuff.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  
  // Log the output
  console.log(data);
});




// XP2


// const fs = require('fs');

// // Create a new text file and write to it
// fs.writeFile('example.txt', 'Buy orange juice', (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log('File created and text written successfully.');

//   // Append some other text to the text file
//   fs.appendFile('example.txt', '\nBuy milk', (err) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log('Text appended to the file successfully.');

//     // Delete the file
//     fs.unlink('example.txt', (err) => {
//       if (err) {
//         console.error(err);
//         return;
//       }
//       console.log('File deleted successfully.');
//     });
//   });
// });
