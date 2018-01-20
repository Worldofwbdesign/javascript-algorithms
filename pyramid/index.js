// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'

function pyramid(n, row = 0, level = '') {
  if (row === n) return

  if (level.length === 2 * n - 1) {
    console.log(level)
    return pyramid(n, row + 1)
  }

  const midpoint = Math.floor((2 * n - 1) / 2)

  const add = midpoint - row <= level.length && midpoint + row >= level.length ? '#' : ' '
  pyramid(n, row, level + add)
}

module.exports = pyramid;

// function pyramid(n) {
//   const midpoint = Math.floor((n * 2 - 1) / 2)

//   for (let i = 0; i < n; i++) {
//     let level = ''
//     const levelLength = (n * 2) - 1
//     for (let j = 0; j < levelLength; j++) {
//       if (midpoint - i <= j && midpoint + i >= j) {
//         level = level + '#'
//       } else {
//         level = level + ' '
//       }
//     }
//     console.log(level)
//   }
// }