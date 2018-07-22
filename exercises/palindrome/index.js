// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//option 1
function palindrome(str) {
    //reverse string that was passed to us
    const reversed = str.split('').reverse().join('');
    //boolean value
    return str === reversed;
}

//option 2
function palindrome(str) {
    //function that will receive every element in array
    //
    return str.split('').every((char, i) => {
        //compare element to counter element
        return char === str[str.length - i - 1];
    })
}

module.exports = palindrome;
