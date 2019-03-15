const { sum, substract } = require('../lib/math');

// Making functions global

test('sum adds numbers', () => {
  const result = sum(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test('substract substracts numbers', () => {
  const result = substract(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
});
