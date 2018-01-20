// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const chars = {}
  let maxChar, maxUsed = 0

  for (const char of str) {
    chars[char] = chars[char] + 1 || 1
  }

  Object.keys(chars).forEach(char => {
    if (chars[char] > maxUsed) {
      maxUsed = chars[char]
      maxChar = char
    }
  })

  return maxChar
}

module.exports = maxChar;
