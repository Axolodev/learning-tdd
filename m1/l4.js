// Making this function async allows it to run both sync and async functions
async function test(title, callback) {
  try {
    await callback();
    console.log(`✓ ${title}`);
  } catch (error) {
    console.log(`x ${title}`);
    console.log(error);
  }
}
