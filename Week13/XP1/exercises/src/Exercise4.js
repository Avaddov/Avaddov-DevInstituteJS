import React from 'react';
import './Exercise4.css';

const styleHeader = {
  color: 'white',
  backgroundColor: 'DodgerBlue',
  padding: '10px',
  fontFamily: 'Arial',
};

function Exercise4() {
  return (
    <div>
      <h1 style={styleHeader}>Exercise 4</h1>
      <p className="para">This is a paragraph.</p>
      <a href="/">Link</a>
      <form>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
      <img src="path/to/image.jpg" alt="Image" />
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  );
}

export default Exercise4;
