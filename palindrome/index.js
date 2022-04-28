// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//   const reversed = str.split("").reduce((rev, char) => `${char}${rev}`, "");

//   return reversed === str;
// }




function palindromeEx(str) {
  // ['a','b','b','a']
  // ['a','b','b','a']


  
  // every check all true 
  return str.split("").every((char, i) => {

    const indexLast  =str.length - i - 1;
    const stringLast = str[indexLast];
    // s1
    // i = 0;
    // char = a
    // indexLast = 3
    // stringLast = a;
    // return true


    // s2
    // i = 1;
    // char = b
    // indexLast = 2
    // stringLast = b;
    // return true

    // s3
    // i = 2;
    // char = b
    // indexLast = 1
    // stringLast = b;
    // return true

    // s4
    // i = 3;
    // char = a
    // indexLast = 0
    // stringLast = a;
    // return true

    return char === stringLast;
  });
}

function palindrome(str) {
  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

module.exports = palindrome;
