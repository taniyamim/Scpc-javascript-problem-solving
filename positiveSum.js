function sumOfPositiveNumbers(arr) {
    let sum = 0;
    for (let num of arr) {
      if (num > 0) {
        sum = sum + num;
      }
    }
    return sum;
  }
  
 
  const numbers = [2, -5, 10, -3, 7];
  const sum = sumOfPositiveNumbers(numbers);
  console.log(sum);
  