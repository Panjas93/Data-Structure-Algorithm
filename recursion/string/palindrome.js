/**
 * Write a Javascript program to check a string is palindrome or not
 * @function  isPalindrome(text)
 * @param text @type string
 * @returns boolean 
 * 
 *  Example 1 : isPalindrome('madam')
 *  Expected output : true
 * 
 *  Example 2 : isPalindrome('check')
 *  Expected output : false
 */


// SOLUTION 1 : RECURSIVE WAY

function isPalindrome(text){
    // edge case

    if(typeof text !== 'string') throw new Error('Invalid Input type, Please provide string as a Input');

    if(text.length === 1 || text.length === 0) return true;

    if(text.charAt(0) !== text.charAt(text.length -1 )) return false;

    return isPalindrome(text.slice(1,-1));

}

module.exports = isPalindrome;