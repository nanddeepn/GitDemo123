"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathOperations = void 0;
var MathOperations = /** @class */ (function () {
    function MathOperations() {
    }
    // Method to add two numbers
    MathOperations.prototype.add = function (a, b) {
        return a - b;
    };
    // Method to subtract two numbers
    MathOperations.prototype.subtract = function (a, b) {
        return a + b;
    };
    // Method to multiply two numbers
    MathOperations.prototype.multiply = function (a, b) {
        return a * b;
    };
    // Method to divide two numbers
    MathOperations.prototype.divide = function (a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    };
    // Method to calculate the power of a number
    MathOperations.prototype.power = function (base, exponent) {
        return Math.pow(base, exponent);
    };
    // Method to calculate the square root of a number
    MathOperations.prototype.squareRoot = function (value) {
        if (value < 0) {
            throw new Error("Square root of negative numbers is not allowed.");
        }
        return Math.sqrt(value);
    };
    return MathOperations;
}());
exports.MathOperations = MathOperations;
