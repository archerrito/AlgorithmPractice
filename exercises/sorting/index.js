// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

//runtime n^2
//basically compares two numbers, moves greater value to end
//loops through array over and over until finished
function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j +1]) {
                const lesser = arr[j + 1];
                arr[j+1] = arr[j];
                arr[j] = lesser;
            }
        }
    }
    return arr;
}

//runtime n^2
//
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        //assume element at i is least in array
        //assign to indexofmin
        let indexOfMin = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[indexOfMin]) {
                indexOfMin = j;
            }
        }

        //if two indices not the same
        if (indexOfMin !== i) {
            //point to lowest value
            let lesser = arr[indexOfMin];
            arr[indexOfMin] = arr[i];
            arr[i] = lesser;
        }
    }

    return arr;
}

//runtime n*log(n)
//basically breaking down array to lengths of 1, then calling merge
function mergeSort(arr) {
    if (arr.length == 1) {
        return arr;
    }

    const center = Math.floor(arr.length / 2);
    //create two halves
    const left = arr.slice(0, center);
    const right = arr.slice(center);

    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    const results =[];
    
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            results.push(left.shift());
        } else {
            results.push(right.shift());
        }
    }

    //creates new empty array, takes values from results,
    //left, and right and adds in
    return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
