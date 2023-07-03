import React, { useState } from 'react';
import quotes from './quotes';

const App = () => {
  const [quote, setQuote] = useState(getRandomQuote());
  const [backgroundColor, setBackgroundColor] = useState(getRandomColor());
  const [quoteColor, setQuoteColor] = useState(getRandomColor());
  const [buttonColor, setButtonColor] = useState(getRandomColor());

  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }

  function getRandomColor() {
    const colors = ['#E91E63', '#673AB7', '#4CAF50', '#FF5722', '#009688', '#FFC107'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  function generateNewQuote() {
    let newQuote = getRandomQuote();
    while (newQuote === quote) {
      newQuote = getRandomQuote();
    }
    setQuote(newQuote);
    setBackgroundColor(getRandomColor());
    setQuoteColor(getRandomColor());
    setButtonColor(getRandomColor());
  }

  return (
    <div className="container" style={{ backgroundColor }}>
      <div className="quote-container">
        <h1 className="quote" style={{ color: quoteColor }}>
          {quote.quote}
        </h1>
        <p className="author" style={{ color: quoteColor }}>
          - {quote.author}
        </p>
        <button className="new-quote-btn" style={{ backgroundColor: buttonColor }} onClick={generateNewQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
};

export default App;
