/**
 * 1. Write a Javascript program to reverse a string
 * @function reverse
 * @param text @type String 
 * 
 * Example 1 : reverse('santanu') 
 * Expected output : 'unatnas'
 * 
 * Example 2 : reverse('$$&&**\n') 
 */

// SOLUTION - 1 : USING RECURSIVE WAY

function reverse(text){
    // edge cases 
    if(typeof text !== 'string') throw new Error('Invalid Input type, Please provide string as a Input');

    if(text === '') return '';
    
    return reverse(text.slice(1)) + text.charAt(0) 
    // return text.at(-1) + reverse(text.slice(0,-1))

}

// // SOLUTION - 2 : USING ITERATIVE WAY

// function reverse(text){
//     // edge cases 
//     if(typeof text !== 'string') throw new Error('Invalid Input type, Please provide string as a Input');
   
//     let reveresedText = '';

//     for(let i = 0; i< text.length ;i++){
//        reveresedText = text.charAt(i) + reveresedText;
//     }

//     return reveresedText;

// }



module.exports = reverse;