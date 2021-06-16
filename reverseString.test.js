const { test, expect } = require('@jest/globals')
const reverseString = require('./reverseString')

test('Reverse name', () => {
    expect(reverseString('justin')).toBe('nitsuj')
})
test('Reverse animal', () => {
    expect(reverseString('monkey')).toBe('yeknom')
})