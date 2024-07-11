//121. Best Time to Buy and Sell Stock

// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

///////////////////////////////////////////////////////////////////////////////

//My solution:
// Runtime 71ms
// Beats 73.18%
// Memory 58.71MB
// Beats 73.76%
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = Infinity;
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else if (prices[i] - min > profit) {
      profit = prices[i] - min;
    }
  }
  return profit;
};

//Best Runtime:
//Runtime: 41ms
var maxProfit = function (prices) {
  let min = +Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else {
      let diff = prices[i] - min;
      maxProfit = Math.max(diff, maxProfit);
    }
  }
  return maxProfit;
};

//Best Memory:
//Memory: 54.7mb
var maxProfit = function (prices) {
  let l = 0;
  let r = l + 1;
  let max = 0;
  while (r < prices.length) {
    let res = prices[r] - prices[l];
    if (res > 0) {
      max = Math.max(res, max);
    } else {
      l = r;
    }
    r += 1;
  }
  return max;
};
