// Created in l5
async function test(title, callback) {
  try {
    await callback();
    console.log(`✓ ${title}`);
  } catch (error) {
    console.log(`x ${title}`);
    console.log(error);
  }
}

// Created in l5
function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
  };
}

global.test = test;
global.expect = expect;
