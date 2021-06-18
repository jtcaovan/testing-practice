const { test, expect } = require('@jest/globals')
const calculator = require('./calculator')


test('adds 2 + 3 to equal 5', () => {
    expect(calculator.add(2,3)).toBe(5)
})