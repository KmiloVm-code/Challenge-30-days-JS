function createCalculator() {

  let total = 0;

  const add = num => total += num;

  const subtract = num => total -= num;

  const multiply =  num => total *= num;

  const divide = num => total /= num;

  const clear = () => total = 0;

  const getTotal = () => total;

  return {
    add,
    subtract,
    multiply,
    divide,
    clear,
    getTotal
  }
}

const calculator = createCalculator()
console.log(calculator.add(10))
console.log(calculator.add(10))
console.log(calculator.subtract(-10))
console.log(calculator.add(10))
console.log(calculator.subtract(-10))
console.log(calculator.clear())
