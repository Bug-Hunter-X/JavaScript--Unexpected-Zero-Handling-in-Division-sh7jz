function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; // Incorrect: should handle 0 values differently
  }
  return a / b;
}

console.log(foo(10, 2)); // 5
console.log(foo(10, 0)); // Infinity (incorrect)
console.log(foo(0, 2)); // Infinity (incorrect)