function foo(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  } else if (a === 0) {
    return 0; // Correctly handling the case of a = 0
  }
  return a / b;  
}

console.log(foo(10, 2)); // 5

try {
  console.log(foo(10, 0)); // Throws an error
} catch (error) {
  console.error(error.message);
}
console.log(foo(0, 2)); // 0