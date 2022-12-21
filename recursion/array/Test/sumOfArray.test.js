const sumOfArrayElements = require('./../sumOfArray');
const feedInvalidInputDataForArrayDataType = require('../Test/invalid-input-to-array-function.test')

describe('Should Add elements of Array',()=>{

    // Valid Input
    test('Valid input',()=>{
        expect(sumOfArrayElements([1,2,3,4])).toBe(10);
    })

    // Invalid Input
    test('Invalid input',()=> {
        expect(sumOfArrayElements([1,'',()=>{}])).toBe(1);
        expect(sumOfArrayElements([undefined,'',()=>{}])).toBe(0);
        feedInvalidInputDataForArrayDataType(sumOfArrayElements)
    })

})