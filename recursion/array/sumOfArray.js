/**
 * Write a Javascript program to sum of number in array
 * @function sum(array)
 * @param array @InstanceOf Array
 * Example : [2,4,6,8]
 * Expected Output : 20
 */
const traverse = require('./traverse');

function sumOfArrayElements(array){
    if(!(array instanceof Array)){
        throw new Error('Please provide a valid input')
    }
    let sum = 0;

    traverse(array,(value)=>{
        if(typeof value === 'number') sum += value;
        return;
    });

    return sum;
}

module.exports = sumOfArrayElements;