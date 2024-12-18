function sumArray(array) {
// check if array is empty or = 1 and return 0 if true
    if (array === null || array === undefined || array.length <= 2) {
        return 0;
    } else {
// if not, sort array and pop off first and last values
    array.sort((a, b) => a - b);
    array.shift();
    array.pop();
  
   console.log(array)
// return sum of remaining array elements
   return array.reduce((a,b) => a + b, 0);
    }
}
console.log(sumArray([-6, -20, -1, -10, -12]));