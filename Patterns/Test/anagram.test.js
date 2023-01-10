const isAnagram = require('./../frequency-counter/anagram');

describe('Anagram',() => {

   it('Valid Input',() => {
      expect(isAnagram('abc','cba')).toBeTruthy();
      expect(isAnagram('abc','AbC')).toBeTruthy();
      expect(isAnagram('maddam','mdamad')).toBeTruthy();
      expect(isAnagram('rat','car')).toBeFalsy();
      expect(isAnagram('','')).toBeTruthy();
      expect(isAnagram('','ab')).toBeFalsy();
   });

   it('InValid Input',() => {
      expect(() => isAnagram(123,321)).toThrow();
      expect(() => isAnagram(void 0, null)).toThrow();
   });


})