// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return stringA.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('') === stringB.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//   const strA = stringA.replace(/[^\w]/g, '').toLowerCase()
//   const strB = stringB.replace(/[^\w]/g, '').toLowerCase()
//   const charsA = {}, charsB = {}

//   for (const char of strA) {
//     charsA[char] = charsA[char] + 1 || 1
//   }
//   for (const char of strB) {
//     charsB[char] = charsB[char] + 1 || 1
//   }

//   if (Object.keys(charsA).length === Object.keys(charsB).length) {
//     for (const char in charsA) {
//       if (!charsB[char] || charsB[char] !== charsA[char]) {
//         return false
//       }
//     }

//     return true
//   }

//   return false
// }
