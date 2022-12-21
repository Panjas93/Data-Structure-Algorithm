
/**
 * Feed Invalid Data to Test Function
 * @param {*} testFunction 
 */


 describe('Feed Invalid Data To Function',()=>{
    test('Number Function', (done)=>{
       done();
    })
 })
 
 
 function feedInvalidInputDataForNumberDataType(testFunction) {
    expect(() => testFunction([])).toThrow();
    expect(() => testFunction({})).toThrow();
    expect(() => testFunction('')).toThrow();
    expect(() => testFunction('abc')).toThrow(); 
 
    // Falsy value
    expect(() => testFunction(void 0)).toThrow();
    expect(() => testFunction(Boolean(0))).toThrow();
    expect(() => testFunction(Boolean(1))).toThrow();
    expect(() => testFunction(null)).toThrow();
    expect(() => testFunction(NaN)).toThrow();
 }
 
 module.exports = feedInvalidInputDataForNumberDataType;