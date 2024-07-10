// 2582. Pass the Pillow
// There are n people standing in a line labeled from 1 to n. The first person in the line is holding a pillow initially. Every second,
//  the person holding the pillow passes it to the next person standing in the line. Once the pillow reaches the end of the line, the direction changes,
//   and people continue passing the pillow in the opposite direction.

// For example, once the pillow reaches the nth person they pass it to the n - 1th person, then to the n - 2th person and so on.
// Given the two positive integers n and time, return the index of the person holding the pillow after time seconds.

///////////////////////////////////////////////////////////////////////////////

//My solution:
// Runtime 57ms
// Beats 26.83%
// Memory 48.32MB
// Beats 90.91%
/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function (n, time) {
  let cycle = 2 * (n - 1);
  if (time % cycle <= n - 1) {
    return (time % cycle) + 1;
  } else {
    return n - ((time % cycle) - (n - 1));
  }
};

//Best Runtime:
//Runtime: 29ms
var passThePillow = function (n, time) {
  const remainingTime = time % (n - 1);
  const rounds = time / (n - 1);

  return rounds & 1 ? n - remainingTime : 1 + remainingTime;
};

//Best Memory:
//Memory: 46.4mb
var passThePillow = function (n, time) {
  let fullRounds = Math.floor(time / (n - 1));
  let extraTime = time % (n - 1);

  if (fullRounds % 2 == 0) {
    return extraTime + 1;
  } else {
    return n - extraTime;
  }
};
