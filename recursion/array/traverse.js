/** Write a javascript program to traverse an arra 
 * @function traverse(array)
 * @param array @instanceOf Array
 * @function value @callback 
 * Example [1,2,3...]
 * Expected Output : 1,2,3...
*/

function traverse(array,value){
    if(!(array instanceof Array)){
        throw new Error('Please Enter a valid input')
    }

    if(array.length === 0) return ;
    value(array[0]); // emit the value
    traverse(array.slice(1),value);
}

module.exports = traverse;