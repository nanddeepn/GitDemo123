/**
 * MathOperations class provides basic mathematical operations
 * including addition, subtraction, multiplication, division, 
 * power calculation, and square root calculation.
 */
export class MathOperations {
    // Method to add two numbers
    // Returns the sum of parameters a and b
    add(a: number, b: number): number {
        return a + b;
    }

    // Method to subtract two numbers
    // Returns the difference of a minus b (a - b)
    subtract(a: number, b: number): number {
        return a - b;
    }

    // Method to multiply two numbers
    // Returns the product of parameters a and b
    multiply(a: number, b: number): number {
        return a * b;
    }

    // Method to divide two numbers
    // Returns the quotient of a divided by b (a / b)
    // Throws an error if attempting to divide by zero
    divide(a: number, b: number): number {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }

    // Method to calculate the power of a number
    // Returns base raised to the power of exponent (base^exponent)
    power(base: number, exponent: number): number {
        return Math.pow(base, exponent);
    }

    // Method to calculate the square root of a number
    // Returns the positive square root of the given value
    // Throws an error if attempting to find square root of negative numbers
    squareRoot(value: number): number {
        if (value < 0) {
            throw new Error("Square root of negative numbers is not allowed.");
        }
        return Math.sqrt(value);
    }
}
