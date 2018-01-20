// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoized(fn) {
  const cache = {}

  return function(...args) {
    if (cache[args]) {
      return cache[args]
    }

    const result = fn.apply(this, args)
    cache[args] = result

    return result
  }
}

function slowFib(n) {
  if (n < 2) return n

  return fib(n - 2) + fib(n - 1)
}

const fib = memoized(slowFib)

module.exports = fib;

// function fib(n) {
//   const fibonacci = [0, 1]
//   for (let i = 2; i <= n; i++) {
//     fibonacci.push(fibonacci[i - 2] + fibonacci[i - 1])
//   }
//   return fibonacci[n]
// }