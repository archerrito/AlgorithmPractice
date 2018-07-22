// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//option 1
function reverse(str) {
    //turn str into an array, split, call reverse, join array together, return 
    return str
        .split('')
        .reverse()
        .join('');


}

//option 2
function reverse(str) {
    //create an empty string called 'reversed'
    //for each character in the provided string
        //take the character and add it to the start of 'reversed'
    //return the variable 'reversed'
    let reversed = '';
    //JS syntax, 
    for (let character of str) {
        reversed = character + reversed;
    }

    return reversed;
}

//option 3
function reverse(str) {
    //take string, turn into arra, yuse reduce helper function
    //takes all values in array reduces to single value
    //takes two arguments, arrow funtion, starting value
    //will take starting argument, pass into arrow function
    //function runs one time for every element in array
    //first argument passed into reduce is our reversed string
    //character is which character in our array
    return str.split('').reduce((rev, char) => char + rev, '');
}

    //to debug
    //add debugger; statement to function
    // call function manually
    //at aterminal run node inspect index.js
    //continue execution, press c, then enter
    //to launch repl session, repl then enter
    //ctrl c to exit

module.exports = reverse;
