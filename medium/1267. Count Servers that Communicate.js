//1267. Count Servers that Communicate
//You are given a map of a server center, represented as a m * n integer matrix grid, where 1 means that on that cell there is a server and 0 means that it is no server.
//Two servers are said to communicate if they are on the same row or on the same column.
//Return the number of servers that communicate with any other server.

///////////////////////////////////////////////////////////////////////////////

//My solution:
var countServers = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  const rowCount = new Array(m).fill(0);
  const colCount = new Array(n).fill(0);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        rowCount[i]++;
        colCount[j]++;
      }
    }
  }
  let count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1 && (rowCount[i] > 1 || colCount[j] > 1)) {
        count++;
      }
    }
  }

  return count;
};

//Best Runtime:
var countServers = function (grid) {
  let total = 0;
  let numberOfIsolated = 0;
  const serversByRow = new Map();
  const serversByColumn = new Map();
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let row = i;
      let column = j;
      if (grid[i][j] == 1) {
        total++;
        if (!serversByRow.has(i)) serversByRow.set(i, 1);
        else serversByRow.set(i, serversByRow.get(i) + 1);
        if (!serversByColumn.has(j)) serversByColumn.set(j, 1);
        else serversByColumn.set(j, serversByColumn.get(j) + 1);
      }
    }
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == 1)
        if (serversByRow.get(i) == 1 && serversByColumn.get(j) == 1)
          numberOfIsolated++;
    }
  }
  return total - numberOfIsolated;
};

//Best Memory:
var countServers = function (grid) {
  function Neighbors(x, y) {
    for (let i = 0; i < grid.length; i++) {
      if (grid[i][y] && x !== i) return 1;
    }
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[x][j] && y !== j) return 1;
    }
    return 0;
  }
  let ans = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        ans += Neighbors(i, j);
      }
    }
  }
  return ans;
};
