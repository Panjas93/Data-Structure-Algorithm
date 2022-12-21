const traverse = require('./../traverse');
const feedInvalidInputDataForArrayDataType = require('../Test/invalid-input-to-array-function.test')

describe('Should pick one by one element from',()=>{

    // Valid Input
    test('Valid input',()=>{
        const fn = jest.fn();
        const input = [1,2,3,4];
        traverse([1,2,3,4],fn);
        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledTimes(input.length);
    })

    // Invalid Input
    test('Invalid input',()=> feedInvalidInputDataForArrayDataType(traverse))

})