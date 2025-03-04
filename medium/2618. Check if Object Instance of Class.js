//2618. Check if Object Instance of Class
//Write a function that checks if a given value is an instance of a given class or superclass.
//For this problem, an object is considered an instance of a given class if that object has access to that class's methods.
//There are no constraints on the data types that can be passed to the function. For example, the value or the class could be undefined.

////////////////////////////////////////////////////////////////////////////////

//My solution:
/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function (obj, classFunction) {
  if (typeof classFunction !== "function") {
    return false;
  }
  if (obj === null || obj === undefined) {
    return false;
  }
  if (typeof obj !== "object" && typeof obj !== "function") {
    return Object(obj) instanceof classFunction;
  }
  return obj instanceof classFunction;
};

//Best solution:
var checkIfInstanceOf = function (obj, classFunction) {
  if (obj == null || typeof classFunction !== "function") return false;
  return obj instanceof classFunction || Object(obj) instanceof classFunction;
};
