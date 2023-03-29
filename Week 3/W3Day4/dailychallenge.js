// // Daily Challenge : Not Bad

sentence = "God of war is not a bad game";
wordNot = sentence.indexOf("not");
wordBad = sentence.indexOf("bad");

if (wordNot > 0 && wordBad > 0 && wordBad > wordNot)
  sentence =
    sentence.slice(0, wordNot) +
    "good" +
    sentence.slice(wordBad + "bad".length, sentence.length);

console.log(sentence);

///With Functions

function func(sentence) {
  wordNot = sentence.indexOf("not");
  wordBad = sentence.indexOf("bad");

  if (wordNot > 0 && wordBad > 0) {
    if (wordBad > wordNot) {
      sentence =
        sentence.slice(0, wordNot) +
        "good" +
        sentence.slice(wordBad + "bad".length, sentence.length);
    }
  }

  console.log(sentence);
}
func("God of War is not a bad game");
func("The dinner is bad!");
