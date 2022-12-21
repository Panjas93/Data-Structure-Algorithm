const isPalindrome = require('../palindrome');
const feedInvalidInputDataForStringDataType = require('./invalid-input-to-string-function.test');

describe('Should Check Palindrome',()=>{
    test('Valid Input',()=>{
        // Truthy
        expect(isPalindrome('maddam')).toBeTruthy();
        expect(isPalindrome('121')).toBeTruthy();
        expect(isPalindrome('aaa')).toBeTruthy();
        expect(isPalindrome('B')).toBeTruthy();
        expect(isPalindrome('')).toBeTruthy();
        expect(isPalindrome('@@')).toBeTruthy();
        expect(isPalindrome('/')).toBeTruthy();
        
        // Falsy
        expect(isPalindrome('abc')).toBeFalsy();
        expect(isPalindrome('Aba')).toBeFalsy();
    });

    test('InValid Input',()=>{
        feedInvalidInputDataForStringDataType(isPalindrome);
    });
})