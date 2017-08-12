const words = require("an-array-of-english-words")

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

console.log(words[getRandomInt(0, words.length)])

console.log(words[getRandomInt(0, words.length)])