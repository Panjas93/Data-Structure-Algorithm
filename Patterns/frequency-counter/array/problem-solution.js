/**
 * Write a Javascript function which takes two arrays. The function should return true if every value in the array has 
 * it's corresponding squared value in the second array. The frequency of the value must be the same
 * 
 * @function same
 * @param arr1, arr2 
 * 
 * Example : same([1,2,3],[4,1,9]) o/p = true
 * same([1,2,3],[1,9]) o/p = false
 * same([1,2,1],[4,4,1]) o/p = false (must be the same frquency)
 */

// SOLUTION : 1

function same(arr1,arr2){
    if(!(arr1 instanceof Array || arr2 instanceof Array)){
        throw new Error('Please enter a valid input');
    }
    if(arr1.length !== arr2.length) return false;

    let frquencyCounter1 = frequency(arr1);
    let frquencyCounter2 = frequency(arr2);

    for(let key in frquencyCounter1) {
        if(frquencyCounter1[key] !== frquencyCounter2[key ** 2]){
            return false;
        }
    };

    return true;
}

function frequency(arr){
    if(!(arr instanceof Array)){
        throw new Error('Please provide an array as an Input');
    }
   let lookup = {};
   for(let i = 0; i < arr.length ; i++){
    lookup[arr[i]] = (lookup[arr[i]] || 0) + 1;
   };

   return lookup;
}

// SOLUTION - 2



module.exports = {
    same,
    frequency
};

