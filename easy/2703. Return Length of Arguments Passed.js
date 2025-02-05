//2703. Return Length of Arguments Passed
//Write a function argumentsLength that returns the count of arguments passed to it.

///////////////////////////////////////////////////////////////////////////////

//My and only solution:
/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function (...args) {
  return args.length;
};
