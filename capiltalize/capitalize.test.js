const { test, expect } = require('@jest/globals')
const capitalize = require('./capitalize')

test('capitalize justin', () => {
    expect(capitalize('justin')).toBe('Justin')
})