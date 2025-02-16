//2667. Create Hello World Function
//Write a function createHelloWorld. It should return a new function that always returns "Hello World".

///////////////////////////////////////////////////////////////////////////////

//My and Only Solution:
var createHelloWorld = function () {
  return () => "Hello World";
};
