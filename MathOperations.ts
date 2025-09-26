export class MathOperations {
    /**
     * Adds two numbers together.
     * @param a - The first number to add
     * @param b - The second number to add
     * @returns The sum of a and b
     */
    add(a: number, b: number): number {
        return a + b;
    }

    /**
     * Subtracts the second number from the first number.
     * @param a - The number to subtract from (minuend)
     * @param b - The number to subtract (subtrahend)
     * @returns The difference of a minus b
     */
    subtract(a: number, b: number): number {
        return a - b;
    }

    // Method to multiply two numbers
    multiply(a: number, b: number): number {
        return a * b;
    }

    // Method to divide two numbers
    divide(a: number, b: number): number {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }

    // Method to calculate the power of a number
    power(base: number, exponent: number): number {
        return Math.pow(base, exponent);
    }

    // Method to calculate the square root of a number
    squareRoot(value: number): number {
        if (value < 0) {
            throw new Error("Square root of negative numbers is not allowed.");
        }
        return Math.sqrt(value);
    }
}
