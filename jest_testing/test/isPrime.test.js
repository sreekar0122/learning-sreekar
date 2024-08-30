const isPrime = require('../isPrime');  

describe('isPrime test', () => {
    test('should return true for prime numbers', () => {
        expect(isPrime(2)).toBe(true);
        expect(isPrime(7)).toBe(true);
        expect(isPrime(23)).toBe(true);
        expect(isPrime(29)).toBe(true);
    });

    test('should return false for non-prime numbers', () => {
        expect(isPrime(1)).toBe(false);
        expect(isPrime(6)).toBe(false);
        expect(isPrime(9)).toBe(false);
        expect(isPrime(25)).toBe(false);
    });

    test('should handle large numbers correctly', () => {
        expect(isPrime(9973)).toBe(true); 
        expect(isPrime(10000)).toBe(false); 
    });
});
