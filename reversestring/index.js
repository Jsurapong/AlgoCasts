// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   let reversed = "";

//   for (const character of str) {
//     reversed = `${character}${reversed}`;
//   }

//   return reversed;
// }

// function reverse(str) {
//   return str
//     .split("")
//     .reverse()
//     .join("");
// }

// function reverse(str) {
//   return str.split("").reduce((rev, char) => `${char}${rev}`, "");
// }

function reverse(str) {
  const strArr = str.split("");

  let reversed = "";

  while (strArr.length > 0) {
    // reversed =  reversed+strArr.pop() ;
    reversed = strArr.shift() + reversed;
  }

  return reversed;
}

module.exports = reverse;
