const sum = require('./sum');


describe('sum tests', () => {
    test('should sum num 1 + num 2', () => {
        const result = sum(1, 2);
        expect(result).toBe(3);
    })  
})

describe('truth or false', () => {
    test('null value', () => {
        const nully = null;
        expect(nully).toBeNull();
    })
})
















