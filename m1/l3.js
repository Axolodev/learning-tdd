const { sum, substract } = require('../lib/math');

// Creating a testing function to identify what causes an error
function test(title, callback) {
  try {
    callback();
    console.log(`✓ ${title}`);
  } catch (error) {
    console.log(`x ${title}`);
    console.log(error);
  }
}

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

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
  };
}
