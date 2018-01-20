// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const matches = str.match(/[aeiou]/ig)
  return matches ? matches.length : 0
}

module.exports = vowels;

// function vowels(str) {
//   let count = 0
//   const vowelsArr = ['a', 'e', 'i', 'o', 'u']

//   for (const char of str.toLowerCase()) {
//     vowelsArr.includes(char) && count++
//   }

//   return count
// }