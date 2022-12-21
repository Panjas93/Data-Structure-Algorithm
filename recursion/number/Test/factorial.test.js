const factorial = require('../factorial');
const feedInvalidInputDataForNumberDataType = require('./invalid-input-to-number-function.test');


describe('Should return factorial of a given number',()=>{

    test('Valid input',()=>{
        expect(factorial(0)).toBe(1);
        expect(factorial(1)).toBe(1);
        expect(factorial(-5)).toBe(-120);
        expect(factorial(-0)).toBe(1);
        expect(factorial(5)).toBe(120);
        // expect(factorial(3/2)).toBe(3/4*Math.SQRT1_2);
    })

    test('InValid input',()=>{
        feedInvalidInputDataForNumberDataType(factorial);
    })
})