
/**
 * Feed Invalid Data to Test Function
 * @param {*} testFunction 
 */


 describe('Feed Invalid Data To Function',()=>{
    test('Array Function', (done)=>{
       done();
    })
 })
 
 
 function feedInvalidInputDataForArrayDataType(testFunction) {
    expect(() => testFunction({})).toThrow();
    expect(() => testFunction('')).toThrow();
    expect(() => testFunction('abc')).toThrow(); 
    expect(() => testFunction(Math.random())).toThrow(); 
 
    // Falsy value
    expect(() => testFunction(void 0)).toThrow();
    expect(() => testFunction(Boolean(0))).toThrow();
    expect(() => testFunction(Boolean(1))).toThrow();
    expect(() => testFunction(null)).toThrow();
    expect(() => testFunction(NaN)).toThrow();
    expect(() => testFunction(Infinity)).toThrow();
 }
 
 module.exports = feedInvalidInputDataForArrayDataType;