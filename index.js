//Comma-separated list of words
const words = document.querySelector(".output-words");

const nouns = ["trackhawk", "hellcat", "urus", "aventador", "maybach"];
//Separate the array with commas
const separated = nouns.join(", ");
//Stores the last word in a variable
const lastWord = nouns.pop();
let output = `${separated.substring(
  0,
  separated.lastIndexOf(" ")
)} and ${lastWord}`;

words.textContent = `My favourite cars are ${output}.`;