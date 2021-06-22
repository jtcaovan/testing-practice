const { test, expect } = require('@jest/globals')
const calculator = require('./calculator')

test('adds 2 + 3 to equal 5', () => {
    expect(calculator.add(2,3)).toBe(5)
})

test('subract 6 - 3 to equal 3', () => {
    expect(calculator.subtract(6,3)).toBe(3)
})

test('multiply 2 * 3 to equal 6', () => {
    expect(calculator.multiply(2,3)).toBe(6)
})

test('divide 12 / 6 to equal 2', () => {
    expect(calculator.divide(12,6)).toBe(2)
})