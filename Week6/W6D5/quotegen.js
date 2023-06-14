// // Part 1: Quote Generator
// const quotes = [
//     { id: 0, author: 'Author 1', quote: 'Quote 1', likes: 0 },
//     { id: 1, author: 'Author 2', quote: 'Quote 2', likes: 0 },
//     { id: 2, author: 'Author 3', quote: 'Quote 3', likes: 0 }
//   ];
  
//   let currentQuote = null;
  
//   const generateBtn = document.getElementById('generate-btn');
//   const quoteSection = document.getElementById('quote-section');
  
//   function generateRandomQuote() {
//     // Generate a random quote index that is not the same as the current one
//     let randomIndex = Math.floor(Math.random() * quotes.length);
//     while (quotes[randomIndex] === currentQuote) {
//       randomIndex = Math.floor(Math.random() * quotes.length);
//     }
//     currentQuote = quotes[randomIndex];
    
//     // Display the quote in the DOM
//     quoteSection.innerHTML = `<blockquote>"${currentQuote.quote}"<footer>${currentQuote.author}</footer></blockquote>`;
//   }
  
//   generateBtn.addEventListener('click', generateRandomQuote);
  
  
//   // Part 2: Add Buttons
//   const addQuoteForm = document.getElementById('add-quote-form');
//   const quoteInput = document.getElementById('quote-input');
//   const authorInput = document.getElementById('author-input');
//   const quoteInfo = document.getElementById('quote-info');
//   const charCountBtn = document.getElementById('char-count-btn');
//   const charCountNoSpaceBtn = document.getElementById('char-count-no-space-btn');
//   const wordCountBtn = document.getElementById('word-count-btn');
//   const likeBtn = document.getElementById('like-btn');
  
//   function addNewQuote(event) {
//     event.preventDefault();
//     // Get the last id in the array and add 1 to it
//     const newId = quotes.length ? quotes[quotes.length - 1].id + 1 : 0;
//     // Create a new quote object and add it to the quotes array
//     const newQuote = {
//       id: newId,
//       author: authorInput.value,
//       quote: quoteInput.value,
//       likes: 0
//     };
//     quotes.push(newQuote);
//     // Reset the form inputs
//     quoteInput.value = '';
//     authorInput.value = '';
//     quoteInfo.textContent = 'New quote added!';
//   }
  
//   function displayCharacterCount(withSpaces) {
//     // Get the current quote text and count its characters
  

const quotes = [
    {id: 0, author: "Albert Einstein", quote: "Strive not to be a success, but rather to be of value."},
    {id: 1, author: "Nelson Mandela", quote: "The greatest glory in living lies not in never falling, but in rising every time we fall."},
    {id: 2, author: "Mahatma Gandhi", quote: "Be the change that you wish to see in the world."},
    {id: 3, author: "Steve Jobs", quote: "Innovation distinguishes between a leader and a follower."},
    {id: 4, author: "Maya Angelou", quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."}
  ];
  
  let currentQuote = null;
  
  function generateRandomQuote() {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    while (randomQuote === currentQuote) {
      randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    }
    currentQuote = randomQuote;
    document.getElementById("quote").textContent = currentQuote.quote;
    document.getElementById("author").textContent = "- " + currentQuote.author;
  }
  
  const generateBtn = document.getElementById("generateBtn");
  generateBtn.addEventListener("click", generateRandomQuote);
  
  generateRandomQuote();
  