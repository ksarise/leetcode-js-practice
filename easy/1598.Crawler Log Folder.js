//1598. Crawler Log Folder
// The Leetcode file system keeps a log each time some user performs a change folder operation.

// The operations are described below:

// "../" : Move to the parent folder of the current folder. (If you are already in the main folder, remain in the same folder).
// "./" : Remain in the same folder.
// "x/" : Move to the child folder named x (This folder is guaranteed to always exist).
// You are given a list of strings logs where logs[i] is the operation performed by the user at the ith step.

// The file system starts in the main folder, then the operations in logs are performed.

// Return the minimum number of operations needed to go back to the main folder after the change folder operations.

///////////////////////////////////////////////////////////////////////////////

//My solution:
// Runtime 46ms
// Beats 93.39%
// Memory 50.79MB
// Beats 15.70%
/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
  let deep = 0;
  logs.forEach((log) => {
    if (log.match(/\.\.\//)) {
      if (deep > 0) {
        deep -= 1;
      }
    } else if (log.match(/\.\//)) {
    } else if (log.match(/[^/]+\/$/)) {
      deep += 1;
    }
  });
  return deep;
};

//Best Runtime:
//Runtime: 38ms
var minOperations = function (logs) {
  let counter = 0;
  for (let log of logs) {
    if (log === "./") continue;
    if (log === "../") {
      if (counter > 0) counter--;
    } else counter++;
  }
  return counter;
};

//Best Memory:
//Memory: 47.8mb
/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
  let stack = [];
  for (let i = 0; i < logs.length; i++) {
    if (logs[i] === "../") {
      stack.pop();
    } else if (logs[i] === "./") {
      continue;
    } else {
      stack.push(logs[i]);
    }
  }
  return stack.length;
};
