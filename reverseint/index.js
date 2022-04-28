// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reversed = n
    .toString()
    .split("")
    .reverse()
    .join("");
    
 //Math.sign get positive 1,  negative -1
 // 100 * -1 = -100
 // 100 * 1 = 100;
  return parseInt(reversed) * Math.sign(n); 
}

module.exports = reverseInt;
