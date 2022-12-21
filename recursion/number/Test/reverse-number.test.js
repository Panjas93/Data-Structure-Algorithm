const reverse = require('../reverse-number');
const feedInvalidInputDataForNumberDataType = require('./invalid-input-to-number-function.test');


describe('Should reverse a number',()=>{
    // Valid Input
    test('Valid input',()=>{
        expect(reverse(234)).toBe(432);
        expect(reverse(0)).toBe(0);
        expect(reverse(111)).toBe(111);
    })

    // Invalid Input
    
    test('InValid input',()=>{
        feedInvalidInputDataForNumberDataType(reverse);
    })

})