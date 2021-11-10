let calculations = {
  prevNumber: "",
  operator: "",
  currentNumber: "0"
}

const inputNumber = (number) => { 
  if (calculations.currentNumber !== '0') {
    calculations.currentNumber += number
  } else {
    calculations.currentNumber = number
  }
}

const calcScreen = document.querySelector('.calculation-screen')

const updateScreenValue = (number) => { calcScreen.value = number }

const numbers = document.querySelectorAll(".number")

const number = numbers.forEach(number => {
  number.addEventListener("click", () => {
    inputNumber(number.value)
    updateScreenValue(calculations.currentNumber)
    //console.log(calculations)
  })
})


const operators = document.querySelectorAll(".operator")

const assignOperator = (operator) => {
  
  if (calculations.operator === '') {
    calculations.prevNumber = calculations.currentNumber
  }
  calculations.operator = operator
  calculations.currentNumber = "0"
}

const operator = operators.forEach(operator => {
  operator.addEventListener("click", () => {
    assignOperator(operator.value)
    //console.log(calculations)
  })
})

const calculationOperate = () => {
  let result = ""

  if (calculations.operator === "add") {
    result = parseFloat(calculations.prevNumber) + parseFloat(calculations.currentNumber)
  } else if (calculations.operator === "substract") {
    result = parseFloat(calculations.prevNumber) - parseFloat(calculations.currentNumber)
  } else if (calculations.operator === "multiply") {
    result = parseFloat(calculations.prevNumber) * parseFloat(calculations.currentNumber)
  } else if (calculations.operator === "divide") {
    result = parseFloat(calculations.prevNumber) / parseFloat(calculations.currentNumber)
  } else if (calculations.operator === "percent") {
    result = (parseFloat(calculations.prevNumber) / 100 ) * parseFloat(calculations.currentNumber)
  }

  calculations.currentNumber = result
  calculations.operator = ""
}

const equalOperator = document.querySelector('.equal-operator')

equalOperator.addEventListener("click", () => {
  calculationOperate()
  updateScreenValue(calculations.currentNumber)
})

const clearBtn = document.querySelector('.clear-all') 

const resetValues = () => {
  calculations.prevNumber = ''
  calculations.operator = '',
  calculations.currentNumber = '0'
}

clearBtn.addEventListener('click', () => {
  resetValues()
  updateScreenValue(calculations.currentNumber)
})

const decimalBtn = document.querySelector('.decimal')

const inputDecimalNum = (dot) => {
  calculations.currentNumber += dot
}

decimalBtn.addEventListener("click", () => {
  inputDecimalNum(decimalBtn.value)
  updateScreenValue(calculations.currentNumber)
})
