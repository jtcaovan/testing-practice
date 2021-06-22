const { test, expect } = require('@jest/globals')
const sum = require('./sum')

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
})

test('adds 3 + 4 to equal 7', () => {
    expect(sum(3, 4)).toBe(7)
})

test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
  });