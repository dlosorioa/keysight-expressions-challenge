
// Define expression functions here
function add(x,y) {
  console.log('add', x, y);
  return x + y;
}
function subtract(x,y) {
  console.log('subtract', x, y);
  return x - y;
}
function foo(x,y,z) {
  console.log('foo', x, y, z);
  return (x + y) * z;
}
function doSomethingComplicated(x) {
  console.log('doSomethingComplicated', x);
  return x;
}
function square(x) {
  console.log('square', x);
  return x*x;
}
export const expressions_list = [ add, subtract, foo, doSomethingComplicated, square ];