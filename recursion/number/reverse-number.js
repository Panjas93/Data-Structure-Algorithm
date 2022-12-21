/** Write a javascript program to reverse a given number
 * @function reverse(number)
 * @param number @typeof number
 * Example : 234
 * Expected output : 432
 */

function reverse(number){
    if(typeof number !== 'number') throw new Error('Please provide a valid input');

    const digit = Math.ceil(Math.log10(number)) || 1; // to escape log10 => 0 value

    if(number == 0){
        return 0;
    }

    return (number % 10)*Math.pow(10,digit-1) + reverse(Math.floor(number/10));
}

module.exports = reverse;


