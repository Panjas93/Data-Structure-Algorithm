
/**
 * Feed Invalid Data to Test Function
 * @param {*} testFunction 
 */


describe('Feed Invalid Data To Function',()=>{
   test('String Function', (done)=>{
      done();
   })
})


function feedInvalidInputDataForStringDataType(testFunction) {
   expect(() => testFunction([])).toThrow();
   expect(() => testFunction({})).toThrow();

   expect(() => testFunction(Math.random())).toThrow();

   expect(() => testFunction(Math.random()*10)).toThrow();

   // Falsy value
   expect(() => testFunction(void 0)).toThrow();
   expect(() => testFunction(true)).toThrow();
   expect(() => testFunction(null)).toThrow();
   expect(() => testFunction(NaN)).toThrow();
}

module.exports = feedInvalidInputDataForStringDataType;