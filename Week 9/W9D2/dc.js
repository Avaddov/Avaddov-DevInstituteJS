// DC1:


// function makeAllCaps(words) {
//     return new Promise((resolve, reject) => {
//       const areAllStrings = words.every(word => typeof word === 'string');
//       if (areAllStrings) {
//         const capitalizedWords = words.map(word => word.toUpperCase());
//         resolve(capitalizedWords);
//       } else {
//         reject("The array contains non-string elements.");
//       }
//     });
//   }
  
//   function sortWords(words) {
//     return new Promise((resolve, reject) => {
//       if (words.length > 4) {
//         const sortedWords = words.sort();
//         resolve(sortedWords);
//       } else {
//         reject("The array length is less than or equal to 4.");
//       }
//     });
//   }

  
//   makeAllCaps([1, "pear", "banana"])
//   .then((arr) => sortWords(arr))
//   .then((result) => console.log(result))
//   .catch(error => console.log(error));

// makeAllCaps(["apple", "pear", "banana"])
//   .then((arr) => sortWords(arr))
//   .then((result) => console.log(result))
//   .catch(error => console.log(error));

// makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
//   .then((arr) => sortWords(arr))
//   .then((result) => console.log(result))
//   .catch(error => console.log(error));



//   DC2:



const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`;
  
  function toJs() {
    return new Promise((resolve, reject) => {
      try {
        const morseJS = JSON.parse(morse);
        if (Object.keys(morseJS).length === 0) {
          throw new Error('Morse JavaScript object is empty.');
        }
        resolve(morseJS);
      } catch (error) {
        reject(error);
      }
    });
  }
  
  function toMorse(morseJS) {
    return new Promise((resolve, reject) => {
      const input = prompt('Enter a word or a sentence:');
      const translation = [];
      for (let i = 0; i < input.length; i++) {
        const char = input[i].toLowerCase();
        if (morseJS[char] === undefined) {
          reject(new Error(`Character "${input[i]}" does not exist in the Morse JavaScript object.`));
        } else {
          translation.push(morseJS[char]);
        }
      }
      resolve(translation);
    });
  }
  
  function joinWords(morseTranslation) {
    const morseString = morseTranslation.join(' ');
    document.getElementById('output').innerText = morseString;
  }
  
  toJs()
    .then(toMorse)
    .then(joinWords)
    .catch(error => console.error(error));
  