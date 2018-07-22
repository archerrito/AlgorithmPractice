// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    //Solution 1
    //make an empty array of words
    // const words = [];

    // //split input string by spaces to get array
    // //space means splits str by space
    // for (let word of str.split(' ')) {
    //     //uppercase first letter, add on the rest from index 1
    //     //push into words array
    //     words.push(word[0].toUpperCase() + word.slice(1));

    // }
    // //join words into string with space character and return
    // return words.join(' ');

    //Solution 2
    //create result which is first character of input string capitalized
    let result = str[0].toUpperCase();
    //for each character in string
    for (let i = 1; i < str.length; i++) {
        //if character left has space
        if (str[i - 1] === ' ') {
            //capitalize it and add to result
            result += str[i].toUpperCase();
        } else {
            //add it to result
            result += str[i]; 
        }
    }
    return result;
}

module.exports = capitalize;
