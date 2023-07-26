function calculator(num1, operator, num2) {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 === 0) {
          return "Cannot divide by zero";
        }
        return num1 / num2;
      default:
        return "Invalid operator";
    }
  }
  

  console.log(calculator(5, '+', 3));  
  console.log(calculator(10, '-', 4)); 
  console.log(calculator(3, '*', 5));  
  console.log(calculator(8, '/', 2)); 
  console.log(calculator(5, '/', 0)); 
  console.log(calculator(2, '^', 3)); 
  