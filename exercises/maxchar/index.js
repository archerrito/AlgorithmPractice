// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
//What is most common character in string, does string a have same
//characters as string b?
//Does given string have an repeated characters in it?
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    //take string convert into object with keys set
    //characters from string, value is number of times in string
    //"Hello There!""  
    // {
    //     H:1,
    //     e: 3,
    //     l: 2,
    //     o: 1...
    // }
    //maps string to object
    // const chars = {};

    // for (let char of str) {
    //     // if (!chars[char]) {
    //     //     chars[char] = 1;
    //     // } else {
    //     //    chars[char]++; 
    //     // }
    //alternative option
    //     chars[char] = chars[char] + 1 || 1;
    // }

    // chars;
    //}

    //Set object
    const charMap = {};
    //set max count value
    let max = 0;
    //set maxChar value
    let maxChar = '';

    //Loop through string to set object values and count
    for (let char of str) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }

    //of vs. in in for loop, in used for objects
    //char will be the keys
    //loop through charmap
    for (let char in charMap) {
        //check to see if the value is bigger than our max value
        if (charMap[char] > max) {
            //set new max value
            max = charMap[char];
            //set character value
            maxChar = char
        }
    }

    return  maxChar;

}

module.exports = maxChar;
