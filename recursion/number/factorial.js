/** Write a JavaScript program to calculate the factorial of a number 
 * @function factorial(n)
 * @param n @type number
 * @return number
*/


function factorial(n){
    if(typeof n !== 'number') throw new Error('Please enter a valid input');
    if(n === 0){
       return 1;
    }
    // if(n === 0.5) return Math.SQRT1_2;

    let sign = 1;
    if( n < 0){
        sign = -1; 
    }
    n = Math.abs(n);
    return sign*n*factorial(n-1);
}

module.exports = factorial;