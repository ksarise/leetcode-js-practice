//70. Climbing Stairs
//You are climbing a staircase. It takes n steps to reach the top.
//Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

///////////////////////////////////////////////////////////////////////////////

//My solution:
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 2) return n;
  let prev1 = 1;
  let prev2 = 2;

  for (let i = 3; i <= n; i++) {
    const current = prev1 + prev2;
    prev1 = prev2;
    prev2 = current;
  }

  return prev2;
};
//Best solution:
var climbStairs = function (n) {
  const sqrt5 = Math.sqrt(5);
  const phi = (1 + sqrt5) / 2;
  const psi = (1 - sqrt5) / 2;

  return Math.round((Math.pow(phi, n + 1) - Math.pow(psi, n + 1)) / sqrt5);
};
