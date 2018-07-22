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
    //solution 1
//     const aCharMap = buildCharMap(stringA);
//     const bCharMap = buildCharMap(stringB);

//     //checks keys length
//     if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//         return false;
//     }

//     //iterate through one character map
//     for (let char in aCharMap) {
//         //checks values of keys in each
//         if (aCharMap[char] !== bCharMap[char]) {
//             return false;
//         }
//     }
//     return true;
// }

// //helper function to build character map
// function buildCharMap(str) {
//     const charMap = {};

//     for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//         charMap[char] = charMap[char] + 1 || 1;
//     }

//     return charMap;

    //solution 2
    return cleanString(stringA) === cleanString(stringB);

}

function cleanString(str) {
    return str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;
