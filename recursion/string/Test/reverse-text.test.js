

const reverse = require('../reverse-text');
const feedInvalidInputDataForStringDataType = require('./invalid-input-to-string-function.test');


describe('Should reverse text',()=>{
   test('Valid Input',()=>{
      expect(reverse('santanu')).toBe('unatnas');
      expect(reverse('madam')).toBe('madam');
      expect(reverse('123')).toBe('321');
      expect(reverse('\n')).toBe('\n');
      expect(reverse('\\n')).toBe('n\\');
   })
   test('Invalid Input',()=>{
    feedInvalidInputDataForStringDataType(reverse);
 })
})