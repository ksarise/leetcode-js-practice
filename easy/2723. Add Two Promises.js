//2723. Add Two Promises
//Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number.
// The returned promise should resolve with the sum of the two numbers.

///////////////////////////////////////////////////////////////////////////////

//My solution:
/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  const [res1, res2] = await Promise.all([promise1, promise2]);
  return res1 + res2;
};

//Best Runtime:
var addTwoPromises = async function (promise1, promise2) {
  return (await promise1) + (await promise2);
};

//Best Memory wtf:
var addTwoPromises = async function (promise1, promise2) {
  return new Promise(async (resolve) => {
    let x1 = await promise1;
    let x2 = await promise2;
    resolve(x1 + x2);
  });
};
