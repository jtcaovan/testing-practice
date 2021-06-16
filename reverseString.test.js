const { test, expect } = require('@jest/globals')
const reverseString = require('./reverseString')

test('Reverse string', () => {
    expect(reverseString('justin')).toBe('nitsuj')
})