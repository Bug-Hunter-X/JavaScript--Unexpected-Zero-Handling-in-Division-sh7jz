# JavaScript: Unexpected Zero Handling in Division

This repository demonstrates a common yet subtle bug in JavaScript related to division by zero. The initial code incorrectly handles zero values, leading to unexpected results. The solution provides a corrected version with proper error handling.

## Bug Description
The `foo` function performs division. However, it incorrectly returns 0 when either input is 0. The correct behavior would be to handle this as an error or result in Infinity, which better reflects the mathematical behavior.

## Solution
The solution involves checking for zero input values and throwing an error, using isNaN to manage any errors, or returning Infinity appropriately.