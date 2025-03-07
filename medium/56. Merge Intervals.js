//56. Merge Intervals
//Given an array of intervals where intervals[i] = [starti, endi],
//merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

///////////////////////////////////////////////////////////////////////////////

//My and only solution:
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length === 0) return [];

  intervals.sort((a, b) => a[0] - b[0]);

  const result = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const last = result[result.length - 1];
    const current = intervals[i];

    if (current[0] <= last[1]) {
      last[1] = Math.max(last[1], current[1]);
    } else {
      result.push(current);
    }
  }

  return result;
};
