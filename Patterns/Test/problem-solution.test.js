const {same, frequency} = require('../frequency-counter/array/problem-solution');

describe('Frequency Counter Problem Test Of Array',()=>{

    describe('Frequency Function',()=>{
        it('Valid input',()=>{
           expect(frequency([1,2,3])).toEqual({
             1 : 1,
             2 : 1,
             3 : 1
           });
           expect(frequency(['a','b','c','b'])).toEqual({
            a : 1,
            b : 2,
            c : 1
          });
        });
        it('Invalid Input',()=>{
            expect(() => frequency(null)).toThrow();
            expect(() => frequency(Math.random())).toThrow();
            expect(() => frequency(undefined)).toThrow();
            expect(() => frequency('')).toThrow();
        })
    })

    describe('Same Function',()=>{
        it('Valid input',()=>{
            expect(same([1,2,3],[4,1,9])).toBe(true);
            expect(same([1,2,3],[4,1,])).toBe(false);
            expect(same([1,2,3],[4,1,5])).toBe(false);
        });
        it('Invalid Input',()=>{
            expect(() => same(1,2)).toThrow();
        })
    })
})