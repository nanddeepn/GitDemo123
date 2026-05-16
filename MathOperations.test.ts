import { MathOperations } from './MathOperations';

describe('MathOperations', () => {
    let mathOps: MathOperations;

    beforeEach(() => {
        mathOps = new MathOperations();
    });

    describe('add', () => {
        it('should correctly add two positive numbers', () => {
            expect(mathOps.add(5, 3)).toBe(8);
        });

        it('should correctly add two negative numbers', () => {
            expect(mathOps.add(-5, -3)).toBe(-8);
        });

        it('should correctly add a positive and a negative number', () => {
            expect(mathOps.add(5, -3)).toBe(2);
        });

        it('should correctly add zeros', () => {
            expect(mathOps.add(0, 0)).toBe(0);
        });
    });

    describe('subtract', () => {
        it('should correctly subtract two positive numbers', () => {
            expect(mathOps.subtract(5, 3)).toBe(2);
        });

        it('should correctly subtract two negative numbers', () => {
            expect(mathOps.subtract(-5, -3)).toBe(-2);
        });

        it('should correctly subtract a positive from another positive', () => {
            expect(mathOps.subtract(3, 5)).toBe(-2);
        });

        it('should correctly subtract a negative from a positive', () => {
            expect(mathOps.subtract(5, -3)).toBe(8);
        });

        it('should correctly subtract from zero', () => {
            expect(mathOps.subtract(0, 5)).toBe(-5);
        });
    });

    describe('multiply', () => {
        it('should correctly multiply two numbers', () => {
            expect(mathOps.multiply(4, 5)).toBe(20);
        });
    });

    describe('divide', () => {
        it('should correctly divide two numbers', () => {
            expect(mathOps.divide(10, 2)).toBe(5);
        });

        it('should throw an error when dividing by zero', () => {
            expect(() => mathOps.divide(10, 0)).toThrow('Division by zero is not allowed.');
        });
    });

    describe('power', () => {
        it('should correctly calculate power', () => {
            expect(mathOps.power(2, 3)).toBe(8);
        });
    });

    describe('squareRoot', () => {
        it('should correctly calculate square root', () => {
            expect(mathOps.squareRoot(16)).toBe(4);
        });

        it('should throw an error when calculating square root of negative number', () => {
            expect(() => mathOps.squareRoot(-1)).toThrow('Square root of negative numbers is not allowed.');
        });
    });
});
